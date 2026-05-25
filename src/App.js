import React, { useState, useEffect, useRef } from 'react';

// ==================== DATA IMPORT ====================
// Songs data from data.js (loaded via script tag in index.html)
const SONGS = typeof ALL_SONGS !== 'undefined' ? ALL_SONGS : [];
const SINGERS = typeof SINGERS_LIST !== 'undefined' ? SINGERS_LIST : [];
const GENRES = typeof GENRES_LIST !== 'undefined' ? GENRES_LIST : [];

// ==================== STORAGE HELPERS ====================
const storage = {
  get: (key, defaultValue = []) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch { return defaultValue; }
  },
  set: (key, value) => {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
  }
};

// ==================== YOUTUBE SEARCH ====================
const searchYouTube = async (query) => {
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY || 'YOUR_API_KEY';
  if (API_KEY === 'YOUR_API_KEY') {
    // Demo mode - return mock results
    return [
      { id: 'demo1', title: query + ' - Official Video', singer: 'Unknown', youtubeId: 'dQw4w9WgXcQ', thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg' },
      { id: 'demo2', title: query + ' - Audio', singer: 'Unknown', youtubeId: 'kJQP7kiw5Fk', thumbnail: 'https://i.ytimg.com/vi/kJQP7kiw5Fk/mqdefault.jpg' }
    ];
  }
  try {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&key=${API_KEY}&maxResults=10`);
    const data = await res.json();
    return data.items?.map(item => ({
      id: item.id.videoId,
      title: item.snippet.title,
      singer: item.snippet.channelTitle,
      youtubeId: item.id.videoId,
      thumbnail: item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default?.url
    })) || [];
  } catch {
    return [];
  }
};

// ==================== COMPONENTS ====================

// --- Player Component ---
function Player({ currentSong, isPlaying, onToggle, onNext, onPrev, progress, volume, onVolumeChange }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (currentSong && iframeRef.current) {
      iframeRef.current.src = `https://www.youtube.com/embed/${currentSong.youtubeId}?autoplay=${isPlaying ? 1 : 0}&mute=0`;
    }
  }, [currentSong, isPlaying]);

  if (!currentSong) return (
    <div className="player-bar empty">
      <div className="player-info">
        <span className="music-icon">🎵</span>
        <span>Select a song to play</span>
      </div>
    </div>
  );

  return (
    <div className="player-bar">
      <div className="player-left">
        <button className="player-btn" onClick={onPrev}>⏮</button>
        <button className="player-btn play-btn" onClick={onToggle}>
          {isPlaying ? '⏸' : '▶'}
        </button>
        <button className="player-btn" onClick={onNext}>⏭</button>
      </div>
      <div className="player-info">
        <span className="song-title">{currentSong.title}</span>
        <span className="song-singer">{currentSong.singer}</span>
      </div>
      <div className="player-right">
        <input 
          type="range" 
          min="0" max="100" 
          value={volume} 
          onChange={(e) => onVolumeChange(e.target.value)}
          className="volume-slider"
        />
        <span className="volume-icon">🔊</span>
      </div>
      <iframe 
        ref={iframeRef}
        width="0" height="0" 
        style={{position: 'absolute', opacity: 0}}
        allow="autoplay"
        title="player"
      />
    </div>
  );
}

// --- Song Card Component ---
function SongCard({ song, onPlay, onAddToFolder, onAddToPlaylist, isFavorite, onToggleFavorite }) {
  return (
    <div className="song-card">
      <div className="song-thumb" onClick={() => onPlay(song)}>
        <img src={`https://i.ytimg.com/vi/${song.youtubeId}/mqdefault.jpg`} alt={song.title} loading="lazy" />
        <div className="play-overlay">▶</div>
      </div>
      <div className="song-details">
        <h4 className="song-title">{song.title}</h4>
        <p className="song-meta">{song.singer} • {song.movie} • {song.year}</p>
        <div className="song-tags">
          <span className="tag genre">{song.genre}</span>
          <span className="tag lang">{song.language}</span>
        </div>
      </div>
      <div className="song-actions">
        <button className="action-btn" onClick={() => onToggleFavorite(song)}>
          {isFavorite ? '❤️' : '🤍'}
        </button>
        <button className="action-btn" onClick={() => onAddToPlaylist(song)}>📋</button>
        <button className="action-btn" onClick={() => onAddToFolder(song)}>📁</button>
      </div>
    </div>
  );
}

// --- Folder Card Component ---
function FolderCard({ folder, onOpen, onDelete, onEdit }) {
  return (
    <div className="folder-card">
      <div className="folder-icon">📁</div>
      <div className="folder-info">
        <h4>{folder.name}</h4>
        <p>{folder.songs?.length || 0} songs</p>
      </div>
      <div className="folder-actions">
        <button onClick={() => onOpen(folder)}>Open</button>
        <button onClick={() => onEdit(folder)}>Edit</button>
        <button onClick={() => onDelete(folder.id)}>Delete</button>
      </div>
    </div>
  );
}

// --- Main App Component ---
function App() {
  // State
  const [currentView, setCurrentView] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(80);
  const [favorites, setFavorites] = useState(storage.get('mf_favorites', []));
  const [recent, setRecent] = useState(storage.get('mf_recent', []));
  const [folders, setFolders] = useState(storage.get('mf_folders', []));
  const [playlists, setPlaylists] = useState(storage.get('mf_playlists', []));
  const [currentFolder, setCurrentFolder] = useState(null);
  const [showCreateFolder, setShowCreateFolder] = useState(false);
  const [showCreatePlaylist, setShowCreatePlaylist] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');
  const [newPlaylistName, setNewPlaylistName] = useState('');
  const [selectedSinger, setSelectedSinger] = useState('All');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [queue, setQueue] = useState([]);
  const [queueIndex, setQueueIndex] = useState(0);

  // Save to storage
  useEffect(() => storage.set('mf_favorites', favorites), [favorites]);
  useEffect(() => storage.set('mf_recent', recent), [recent]);
  useEffect(() => storage.set('mf_folders', folders), [folders]);
  useEffect(() => storage.set('mf_playlists', playlists), [playlists]);

  // Filter songs
  const filteredSongs = SONGS.filter(song => {
    const matchSearch = !searchQuery || 
      song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.singer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.movie.toLowerCase().includes(searchQuery.toLowerCase());
    const matchSinger = selectedSinger === 'All' || song.singer === selectedSinger;
    const matchGenre = selectedGenre === 'All' || song.genre === selectedGenre;
    return matchSearch && matchSinger && matchGenre;
  });

  // Play song
  const playSong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
    setRecent(prev => {
      const updated = [song, ...prev.filter(s => s.id !== song.id)].slice(0, 20);
      return updated;
    });
  };

  // Toggle play
  const togglePlay = () => setIsPlaying(!isPlaying);

  // Next song
  const nextSong = () => {
    if (queue.length > 0) {
      const next = (queueIndex + 1) % queue.length;
      setQueueIndex(next);
      playSong(queue[next]);
    } else {
      const idx = Math.floor(Math.random() * filteredSongs.length);
      playSong(filteredSongs[idx]);
    }
  };

  // Prev song
  const prevSong = () => {
    if (recent.length > 1) {
      playSong(recent[1]);
    }
  };

  // Toggle favorite
  const toggleFavorite = (song) => {
    setFavorites(prev => {
      const exists = prev.find(s => s.id === song.id);
      if (exists) return prev.filter(s => s.id !== song.id);
      return [...prev, song];
    });
  };

  // Create folder
  const createFolder = () => {
    if (!newFolderName.trim()) return;
    const folder = {
      id: Date.now().toString(),
      name: newFolderName,
      songs: [],
      createdAt: new Date().toISOString()
    };
    setFolders([...folders, folder]);
    setNewFolderName('');
    setShowCreateFolder(false);
  };

  // Delete folder
  const deleteFolder = (id) => {
    setFolders(folders.filter(f => f.id !== id));
  };

  // Add song to folder
  const addToFolder = (song) => {
    if (folders.length === 0) {
      alert('No folders! Create one first.');
      return;
    }
    const folderId = prompt('Enter folder name or select:
' + folders.map(f => f.name).join('
'));
    const folder = folders.find(f => f.name.toLowerCase() === folderId?.toLowerCase());
    if (folder) {
      setFolders(folders.map(f => 
        f.id === folder.id ? {...f, songs: [...f.songs, song]} : f
      ));
      alert(`Added to ${folder.name}!`);
    }
  };

  // Create playlist
  const createPlaylist = () => {
    if (!newPlaylistName.trim()) return;
    const playlist = {
      id: Date.now().toString(),
      name: newPlaylistName,
      songs: [],
      createdAt: new Date().toISOString()
    };
    setPlaylists([...playlists, playlist]);
    setNewPlaylistName('');
    setShowCreatePlaylist(false);
  };

  // Add to playlist
  const addToPlaylist = (song) => {
    if (playlists.length === 0) {
      alert('No playlists! Create one first.');
      return;
    }
    const playlistName = prompt('Enter playlist name:
' + playlists.map(p => p.name).join('
'));
    const playlist = playlists.find(p => p.name.toLowerCase() === playlistName?.toLowerCase());
    if (playlist) {
      setPlaylists(playlists.map(p => 
        p.id === playlist.id ? {...p, songs: [...p.songs, song]} : p
      ));
      alert(`Added to ${playlist.name}!`);
    }
  };

  // Search YouTube
  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    const results = await searchYouTube(searchQuery);
    setSearchResults(results);
  };

  // Random song
  const playRandom = () => {
    const idx = Math.floor(Math.random() * SONGS.length);
    playSong(SONGS[idx]);
  };

  // ==================== VIEWS ====================

  // Home View
  const HomeView = () => (
    <div className="view home-view">
      <div className="hero">
        <h1>🌸 Music Flower</h1>
        <p>Your Personal Music Streaming App</p>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">{SONGS.length}</span>
            <span className="stat-label">Songs</span>
          </div>
          <div className="stat">
            <span className="stat-num">{SINGERS.length}</span>
            <span className="stat-label">Artists</span>
          </div>
          <div className="stat">
            <span className="stat-num">{folders.length}</span>
            <span className="stat-label">Folders</span>
          </div>
        </div>
        <button className="random-btn" onClick={playRandom}>🎲 Play Random</button>
      </div>

      <div className="section">
        <h2>🎵 All Songs</h2>
        <div className="filters">
          <select value={selectedSinger} onChange={e => setSelectedSinger(e.target.value)}>
            <option value="All">All Singers</option>
            {SINGERS.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <select value={selectedGenre} onChange={e => setSelectedGenre(e.target.value)}>
            <option value="All">All Genres</option>
            {GENRES.map(g => <option key={g} value={g}>{g}</option>)}
          </select>
        </div>
        <div className="songs-grid">
          {filteredSongs.map(song => (
            <SongCard 
              key={song.id} 
              song={song} 
              onPlay={playSong}
              onAddToFolder={addToFolder}
              onAddToPlaylist={addToPlaylist}
              isFavorite={favorites.some(f => f.id === song.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      </div>
    </div>
  );

  // Search View
  const SearchView = () => (
    <div className="view search-view">
      <h2>🔍 Search YouTube</h2>
      <div className="search-box">
        <input 
          type="text" 
          placeholder="Search songs, artists..." 
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          onKeyPress={e => e.key === 'Enter' && handleSearch()}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="songs-grid">
        {searchResults.map(song => (
          <SongCard 
            key={song.id} 
            song={song} 
            onPlay={playSong}
            onAddToFolder={addToFolder}
            onAddToPlaylist={addToPlaylist}
            isFavorite={favorites.some(f => f.id === song.id)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );

  // Library View
  const LibraryView = () => (
    <div className="view library-view">
      <h2>📚 Your Library</h2>

      <div className="library-section">
        <h3>📁 Folders ({folders.length})</h3>
        <button className="create-btn" onClick={() => setShowCreateFolder(true)}>+ New Folder</button>
        {showCreateFolder && (
          <div className="create-form">
            <input 
              type="text" 
              placeholder="Folder name" 
              value={newFolderName}
              onChange={e => setNewFolderName(e.target.value)}
            />
            <button onClick={createFolder}>Create</button>
            <button onClick={() => setShowCreateFolder(false)}>Cancel</button>
          </div>
        )}
        <div className="folders-grid">
          {folders.map(folder => (
            <FolderCard 
              key={folder.id} 
              folder={folder}
              onOpen={setCurrentFolder}
              onDelete={deleteFolder}
              onEdit={(f) => {
                const newName = prompt('New name:', f.name);
                if (newName) setFolders(folders.map(fol => fol.id === f.id ? {...fol, name: newName} : fol));
              }}
            />
          ))}
        </div>
      </div>

      <div className="library-section">
        <h3>📋 Playlists ({playlists.length})</h3>
        <button className="create-btn" onClick={() => setShowCreatePlaylist(true)}>+ New Playlist</button>
        {showCreatePlaylist && (
          <div className="create-form">
            <input 
              type="text" 
              placeholder="Playlist name" 
              value={newPlaylistName}
              onChange={e => setNewPlaylistName(e.target.value)}
            />
            <button onClick={createPlaylist}>Create</button>
            <button onClick={() => setShowCreatePlaylist(false)}>Cancel</button>
          </div>
        )}
        <div className="folders-grid">
          {playlists.map(playlist => (
            <div key={playlist.id} className="folder-card">
              <div className="folder-icon">📋</div>
              <div className="folder-info">
                <h4>{playlist.name}</h4>
                <p>{playlist.songs?.length || 0} songs</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="library-section">
        <h3>❤️ Favorites ({favorites.length})</h3>
        <div className="songs-grid">
          {favorites.map(song => (
            <SongCard 
              key={song.id} 
              song={song} 
              onPlay={playSong}
              onAddToFolder={addToFolder}
              onAddToPlaylist={addToPlaylist}
              isFavorite={true}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      </div>

      <div className="library-section">
        <h3>🕐 Recently Played ({recent.length})</h3>
        <div className="songs-grid">
          {recent.map(song => (
            <SongCard 
              key={song.id} 
              song={song} 
              onPlay={playSong}
              onAddToFolder={addToFolder}
              onAddToPlaylist={addToPlaylist}
              isFavorite={favorites.some(f => f.id === song.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      </div>
    </div>
  );

  // Folder Detail View
  const FolderView = () => {
    if (!currentFolder) return null;
    return (
      <div className="view folder-view">
        <button className="back-btn" onClick={() => setCurrentFolder(null)}>← Back</button>
        <h2>📁 {currentFolder.name}</h2>
        <div className="songs-grid">
          {currentFolder.songs?.map(song => (
            <SongCard 
              key={song.id} 
              song={song} 
              onPlay={playSong}
              onAddToFolder={addToFolder}
              onAddToPlaylist={addToPlaylist}
              isFavorite={favorites.some(f => f.id === song.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      </div>
    );
  };

  // ==================== RENDER ====================
  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <span className="logo-icon">🌸</span>
          <span className="logo-text">Music Flower</span>
        </div>
        <nav className="nav">
          <button className={currentView === 'home' ? 'active' : ''} onClick={() => {setCurrentView('home'); setCurrentFolder(null);}}>
            🏠 Home
          </button>
          <button className={currentView === 'search' ? 'active' : ''} onClick={() => {setCurrentView('search'); setCurrentFolder(null);}}>
            🔍 Search
          </button>
          <button className={currentView === 'library' ? 'active' : ''} onClick={() => {setCurrentView('library'); setCurrentFolder(null);}}>
            📚 Library
          </button>
        </nav>
        <div className="sidebar-section">
          <h4>Quick Play</h4>
          <button onClick={playRandom}>🎲 Random Song</button>
          <button onClick={() => {
            const singer = SINGERS[Math.floor(Math.random() * SINGERS.length)];
            setSelectedSinger(singer);
            setCurrentView('home');
          }}>🎭 Random Artist</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {currentFolder ? <FolderView /> : 
          currentView === 'home' ? <HomeView /> :
          currentView === 'search' ? <SearchView /> :
          currentView === 'library' ? <LibraryView /> :
          <HomeView />
        }
      </main>

      {/* Player Bar */}
      <Player 
        currentSong={currentSong}
        isPlaying={isPlaying}
        onToggle={togglePlay}
        onNext={nextSong}
        onPrev={prevSong}
        volume={volume}
        onVolumeChange={setVolume}
      />
    </div>
  );
}

export default App;
