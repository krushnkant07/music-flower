// 🎵 Music Flower - Song Database Part 1
// Arijit Singh (30) + K.K. (25)

const ARIJIT_SONGS = [
  {id:"a1", title:"Tum Hi Ho", singer:"Arijit Singh", genre:"Romantic", movie:"Aashiqui 2", youtubeId:"Umqb9K6y2Gw", duration:"4:22", year:2013, language:"Hindi"},
  {id:"a2", title:"Channa Mereya", singer:"Arijit Singh", genre:"Sad", movie:"Ae Dil Hai Mushkil", youtubeId:"bzST3cs8xDI", duration:"4:49", year:2016, language:"Hindi"},
  {id:"a3", title:"Raabta", singer:"Arijit Singh", genre:"Romantic", movie:"Agent Vinod", youtubeId:"k4yXQkG2s1E", duration:"4:12", year:2012, language:"Hindi"},
  {id:"a4", title:"Agar Tum Saath Ho", singer:"Arijit Singh", genre:"Sad", movie:"Tamasha", youtubeId:"xRb8hxwNQYc", duration:"5:41", year:2015, language:"Hindi"},
  {id:"a5", title:"Gerua", singer:"Arijit Singh", genre:"Romantic", movie:"Dilwale", youtubeId:"AEIVhLqe6uU", duration:"5:45", year:2015, language:"Hindi"},
  {id:"a6", title:"Janam Janam", singer:"Arijit Singh", genre:"Romantic", movie:"Dilwale", youtubeId:"7kssLx6R7Mc", duration:"3:58", year:2015, language:"Hindi"},
  {id:"a7", title:"Hamari Adhuri Kahani", singer:"Arijit Singh", genre:"Sad", movie:"Hamari Adhuri Kahani", youtubeId:"f3FFM1mcMec", duration:"6:26", year:2015, language:"Hindi"},
  {id:"a8", title:"Muskurane", singer:"Arijit Singh", genre:"Romantic", movie:"CityLights", youtubeId:"7kssLx6R7Mc", duration:"5:50", year:2014, language:"Hindi"},
  {id:"a9", title:"Suno Na Sangemarmar", singer:"Arijit Singh", genre:"Romantic", movie:"Youngistaan", youtubeId:"AEIVhLqe6uU", duration:"4:13", year:2014, language:"Hindi"},
  {id:"a10", title:"Palat", singer:"Arijit Singh", genre:"Party", movie:"Main Tera Hero", youtubeId:"f3FFM1mcMec", duration:"4:22", year:2014, language:"Hindi"},
  {id:"a11", title:"Phir Le Aya Dil", singer:"Arijit Singh", genre:"Ghazal", movie:"Barfi", youtubeId:"7kssLx6R7Mc", duration:"4:54", year:2012, language:"Hindi"},
  {id:"a12", title:"Kabira", singer:"Arijit Singh", genre:"Romantic", movie:"Yeh Jawaani Hai Deewani", youtubeId:"AEIVhLqe6uU", duration:"3:44", year:2013, language:"Hindi"},
  {id:"a13", title:"Ilahi", singer:"Arijit Singh", genre:"Romantic", movie:"Yeh Jawaani Hai Deewani", youtubeId:"f3FFM1mcMec", duration:"3:23", year:2013, language:"Hindi"},
  {id:"a14", title:"Tum Se Hi", singer:"Arijit Singh", genre:"Romantic", movie:"Jab We Met", youtubeId:"7kssLx6R7Mc", duration:"5:22", year:2007, language:"Hindi"},
  {id:"a15", title:"Phir Bhi Tumko Chaahunga", singer:"Arijit Singh", genre:"Romantic", movie:"Half Girlfriend", youtubeId:"AEIVhLqe6uU", duration:"5:51", year:2017, language:"Hindi"},
  {id:"a16", title:"Hawayein", singer:"Arijit Singh", genre:"Romantic", movie:"Jab Harry Met Sejal", youtubeId:"f3FFM1mcMec", duration:"4:12", year:2017, language:"Hindi"},
  {id:"a17", title:"Zaalima", singer:"Arijit Singh", genre:"Romantic", movie:"Raees", youtubeId:"7kssLx6R7Mc", duration:"4:59", year:2017, language:"Hindi"},
  {id:"a18", title:"Naina", singer:"Arijit Singh", genre:"Sad", movie:"Dangal", youtubeId:"AEIVhLqe6uU", duration:"3:47", year:2016, language:"Hindi"},
  {id:"a19", title:"Nashe Si Chadh Gayi", singer:"Arijit Singh", genre:"Party", movie:"Befikre", youtubeId:"f3FFM1mcMec", duration:"3:58", year:2016, language:"Hindi"},
  {id:"a20", title:"Ae Dil Hai Mushkil", singer:"Arijit Singh", genre:"Sad", movie:"Ae Dil Hai Mushkil", youtubeId:"7kssLx6R7Mc", duration:"4:29", year:2016, language:"Hindi"},
  {id:"a21", title:"Bolna", singer:"Arijit Singh", genre:"Romantic", movie:"Kapoor & Sons", youtubeId:"AEIVhLqe6uU", duration:"3:33", year:2016, language:"Hindi"},
  {id:"a22", title:"Soch Na Sake", singer:"Arijit Singh", genre:"Romantic", movie:"Airlift", youtubeId:"f3FFM1mcMec", duration:"4:41", year:2016, language:"Hindi"},
  {id:"a23", title:"Deewani Mastani", singer:"Arijit Singh", genre:"Classical", movie:"Bajirao Mastani", youtubeId:"7kssLx6R7Mc", duration:"5:42", year:2015, language:"Hindi"},
  {id:"a24", title:"Laal Ishq", singer:"Arijit Singh", genre:"Romantic", movie:"Goliyon Ki Raasleela Ram-Leela", youtubeId:"AEIVhLqe6uU", duration:"6:27", year:2013, language:"Hindi"},
  {id:"a25", title:"Duaa", singer:"Arijit Singh", genre:"Sad", movie:"Shanghai", youtubeId:"f3FFM1mcMec", duration:"4:48", year:2012, language:"Hindi"},
  {id:"a26", title:"Phir Mohabbat", singer:"Arijit Singh", genre:"Romantic", movie:"Murder 2", youtubeId:"7kssLx6R7Mc", duration:"4:30", year:2011, language:"Hindi"},
  {id:"a27", title:"Khamoshiyan", singer:"Arijit Singh", genre:"Romantic", movie:"Khamoshiyan", youtubeId:"AEIVhLqe6uU", duration:"4:00", year:2015, language:"Hindi"},
  {id:"a28", title:"Samjhawan", singer:"Arijit Singh", genre:"Romantic", movie:"Humpty Sharma Ki Dulhania", youtubeId:"f3FFM1mcMec", duration:"4:29", year:2014, language:"Hindi"},
  {id:"a29", title:"Manwa Laage", singer:"Arijit Singh", genre:"Romantic", movie:"Happy New Year", youtubeId:"7kssLx6R7Mc", duration:"4:30", year:2014, language:"Hindi"},
  {id:"a30", title:"Sooraj Dooba Hain", singer:"Arijit Singh", genre:"Party", movie:"Roy", youtubeId:"AEIVhLqe6uU", duration:"4:22", year:2015, language:"Hindi"}
];

const KK_SONGS = [
  {id:"k1", title:"Pal", singer:"K.K.", genre:"Romantic", movie:"Aks", youtubeId:"PM8iX6mL9ig", duration:"5:22", year:2001, language:"Hindi"},
  {id:"k2", title:"Yaaron", singer:"K.K.", genre:"Romantic", movie:"Pal (Album)", youtubeId:"bcsZzhBzjvI", duration:"4:32", year:1999, language:"Hindi"},
  {id:"k3", title:"Tadap Tadap", singer:"K.K.", genre:"Sad", movie:"Hum Dil De Chuke Sanam", youtubeId:"h2t7aG8Z6Yg", duration:"5:48", year:1999, language:"Hindi"},
  {id:"k4", title:"Kya Mujhe Pyaar Hai", singer:"K.K.", genre:"Romantic", movie:"Woh Lamhe", youtubeId:"bcsZzhBzjvI", duration:"4:22", year:2006, language:"Hindi"},
  {id:"k5", title:"Tu Hi Meri Shab Hai", singer:"K.K.", genre:"Romantic", movie:"Gangster", youtubeId:"PM8iX6mL9ig", duration:"5:45", year:2006, language:"Hindi"},
  {id:"k6", title:"Labon Ko", singer:"K.K.", genre:"Romantic", movie:"Bhool Bhulaiyaa", youtubeId:"h2t7aG8Z6Yg", duration:"5:32", year:2007, language:"Hindi"},
  {id:"k7", title:"Zara Sa", singer:"K.K.", genre:"Romantic", movie:"Jannat", youtubeId:"bcsZzhBzjvI", duration:"5:00", year:2008, language:"Hindi"},
  {id:"k8", title:"Dil Ibadat", singer:"K.K.", genre:"Romantic", movie:"Tum Mile", youtubeId:"PM8iX6mL9ig", duration:"5:29", year:2009, language:"Hindi"},
  {id:"k9", title:"Sajde", singer:"K.K.", genre:"Romantic", movie:"Khatta Meetha", youtubeId:"h2t7aG8Z6Yg", duration:"5:08", year:2010, language:"Hindi"},
  {id:"k10", title:"Piya Aaye Na", singer:"K.K.", genre:"Sad", movie:"Aashiqui 2", youtubeId:"bcsZzhBzjvI", duration:"4:45", year:2013, language:"Hindi"},
  {id:"k11", title:"Mat Aazma Re", singer:"K.K.", genre:"Romantic", movie:"Murder 3", youtubeId:"PM8iX6mL9ig", duration:"4:58", year:2013, language:"Hindi"},
  {id:"k12", title:"Mujhko Pehchaanlo", singer:"K.K.", genre:"Romantic", movie:"Don 2", youtubeId:"h2t7aG8Z6Yg", duration:"4:22", year:2011, language:"Hindi"},
  {id:"k13", title:"Aankhon Mein Teri", singer:"K.K.", genre:"Romantic", movie:"Om Shanti Om", youtubeId:"bcsZzhBzjvI", duration:"4:42", year:2007, language:"Hindi"},
  {id:"k14", title:"Khuda Jaane", singer:"K.K.", genre:"Romantic", movie:"Bachna Ae Haseeno", youtubeId:"PM8iX6mL9ig", duration:"5:32", year:2008, language:"Hindi"},
  {id:"k15", title:"Bas Ek Pal", singer:"K.K.", genre:"Sad", movie:"Bas Ek Pal", youtubeId:"h2t7aG8Z6Yg", duration:"5:12", year:2006, language:"Hindi"},
  {id:"k16", title:"O Meri Jaan", singer:"K.K.", genre:"Romantic", movie:"Life in a Metro", youtubeId:"bcsZzhBzjvI", duration:"4:22", year:2007, language:"Hindi"},
  {id:"k17", title:"Alvida", singer:"K.K.", genre:"Sad", movie:"Life in a Metro", youtubeId:"PM8iX6mL9ig", duration:"5:42", year:2007, language:"Hindi"},
  {id:"k18", title:"Dus Bahane", singer:"K.K.", genre:"Party", movie:"Dus", youtubeId:"h2t7aG8Z6Yg", duration:"3:52", year:2005, language:"Hindi"},
  {id:"k19", title:"Koi Kahe Kehta Rahe", singer:"K.K.", genre:"Party", movie:"Dil Chahta Hai", youtubeId:"bcsZzhBzjvI", duration:"5:42", year:2001, language:"Hindi"},
  {id:"k20", title:"Its The Time To Disco", singer:"K.K.", genre:"Party", movie:"Kal Ho Naa Ho", youtubeId:"PM8iX6mL9ig", duration:"5:22", year:2003, language:"Hindi"},
  {id:"k21", title:"Dosti", singer:"K.K.", genre:"Romantic", movie:"Dosti (Album)", youtubeId:"h2t7aG8Z6Yg", duration:"4:45", year:2001, language:"Hindi"},
  {id:"k22", title:"Mera Pehla Pehla Pyaar", singer:"K.K.", genre:"Romantic", movie:"MP3", youtubeId:"bcsZzhBzjvI", duration:"4:32", year:2007, language:"Hindi"},
  {id:"k23", title:"Haan Tu Hain", singer:"K.K.", genre:"Romantic", movie:"Jannat", youtubeId:"PM8iX6mL9ig", duration:"5:22", year:2008, language:"Hindi"},
  {id:"k24", title:"Beete Lamhein", singer:"K.K.", genre:"Sad", movie:"The Train", youtubeId:"h2t7aG8Z6Yg", duration:"4:48", year:2007, language:"Hindi"},
  {id:"k25", title:"Awarapan Banjarapan", singer:"K.K.", genre:"Sad", movie:"Jism", youtubeId:"bcsZzhBzjvI", duration:"6:12", year:2003, language:"Hindi"}
];

const KUMAR_SANU_SONGS = [
  {id:"s1", title:"Dil Hai Ki Manta Nahin", singer:"Kumar Sanu", genre:"Romantic", movie:"Dil Hai Ki Manta Nahin", youtubeId:"k4yXQkG2s1E", duration:"5:22", year:1991, language:"Hindi"},
  {id:"s2", title:"Mera Dil Bhi Kitna Pagal Hai", singer:"Kumar Sanu", genre:"Romantic", movie:"Saajan", youtubeId:"Umqb9K6y2Gw", duration:"5:28", year:1991, language:"Hindi"},
  {id:"s3", title:"Tujhe Dekha To", singer:"Kumar Sanu", genre:"Romantic", movie:"Dilwale Dulhania Le Jayenge", youtubeId:"bzST3cs8xDI", duration:"4:58", year:1995, language:"Hindi"},
  {id:"s4", title:"Ek Ladki Ko Dekha", singer:"Kumar Sanu", genre:"Romantic", movie:"1942 A Love Story", youtubeId:"k4yXQkG2s1E", duration:"5:12", year:1994, language:"Hindi"},
  {id:"s5", title:"Do Dil Mil Rahe Hain", singer:"Kumar Sanu", genre:"Romantic", movie:"Pardes", youtubeId:"Umqb9K6y2Gw", duration:"5:45", year:1997, language:"Hindi"},
  {id:"s6", title:"Chura Ke Dil Mera", singer:"Kumar Sanu", genre:"Romantic", movie:"Main Khiladi Tu Anari", youtubeId:"bzST3cs8xDI", duration:"6:02", year:1994, language:"Hindi"},
  {id:"s7", title:"Dheere Dheere Se Meri Zindagi", singer:"Kumar Sanu", genre:"Romantic", movie:"Aashiqui", youtubeId:"k4yXQkG2s1E", duration:"5:32", year:1990, language:"Hindi"},
  {id:"s8", title:"Nazar Ke Samne", singer:"Kumar Sanu", genre:"Romantic", movie:"Aashiqui", youtubeId:"Umqb9K6y2Gw", duration:"5:02", year:1990, language:"Hindi"},
  {id:"s9", title:"Ab Tere Bin", singer:"Kumar Sanu", genre:"Sad", movie:"Aashiqui", youtubeId:"bzST3cs8xDI", duration:"5:48", year:1990, language:"Hindi"},
  {id:"s10", title:"Sochenge Tumhe Pyaar", singer:"Kumar Sanu", genre:"Romantic", movie:"Deewana", youtubeId:"k4yXQkG2s1E", duration:"5:22", year:1992, language:"Hindi"},
  {id:"s11", title:"Aisi Deewangi", singer:"Kumar Sanu", genre:"Romantic", movie:"Deewana", youtubeId:"Umqb9K6y2Gw", duration:"6:12", year:1992, language:"Hindi"},
  {id:"s12", title:"Yeh Kaali Kaali Aankhein", singer:"Kumar Sanu", genre:"Romantic", movie:"Baazigar", youtubeId:"bzST3cs8xDI", duration:"4:52", year:1993, language:"Hindi"},
  {id:"s13", title:"Baazigar O Baazigar", singer:"Kumar Sanu", genre:"Romantic", movie:"Baazigar", youtubeId:"k4yXQkG2s1E", duration:"6:22", year:1993, language:"Hindi"},
  {id:"s14", title:"Kuch Na Kaho", singer:"Kumar Sanu", genre:"Romantic", movie:"1942 A Love Story", youtubeId:"Umqb9K6y2Gw", duration:"6:32", year:1994, language:"Hindi"},
  {id:"s15", title:"Tum Mile Dil Khile", singer:"Kumar Sanu", genre:"Romantic", movie:"Criminal", youtubeId:"bzST3cs8xDI", duration:"5:42", year:1995, language:"Hindi"},
  {id:"s16", title:"Dil Ne Yeh Kaha Hain Dil Se", singer:"Kumar Sanu", genre:"Romantic", movie:"Dhadkan", youtubeId:"k4yXQkG2s1E", duration:"5:22", year:2000, language:"Hindi"},
  {id:"s17", title:"Na Na Karte Pyaar", singer:"Kumar Sanu", genre:"Romantic", movie:"Dhadkan", youtubeId:"Umqb9K6y2Gw", duration:"4:58", year:2000, language:"Hindi"},
  {id:"s18", title:"Dulhe Ka Sehra", singer:"Kumar Sanu", genre:"Romantic", movie:"Dhadkan", youtubeId:"bzST3cs8xDI", duration:"5:42", year:2000, language:"Hindi"},
  {id:"s19", title:"Chand Sitare", singer:"Kumar Sanu", genre:"Romantic", movie:"Kaho Naa Pyaar Hai", youtubeId:"k4yXQkG2s1E", duration:"4:32", year:2000, language:"Hindi"},
  {id:"s20", title:"Dil Dil Dil", singer:"Kumar Sanu", genre:"Romantic", movie:"Pardes", youtubeId:"Umqb9K6y2Gw", duration:"4:58", year:1997, language:"Hindi"},
  {id:"s21", title:"I Love My India", singer:"Kumar Sanu", genre:"Patriotic", movie:"Pardes", youtubeId:"bzST3cs8xDI", duration:"5:22", year:1997, language:"Hindi"},
  {id:"s22", title:"Meri Mehbooba", singer:"Kumar Sanu", genre:"Romantic", movie:"Pardes", youtubeId:"k4yXQkG2s1E", duration:"5:45", year:1997, language:"Hindi"},
  {id:"s23", title:"Aankhon Ki Gustakhiyan", singer:"Kumar Sanu", genre:"Romantic", movie:"Hum Dil De Chuke Sanam", youtubeId:"Umqb9K6y2Gw", duration:"4:42", year:1999, language:"Hindi"},
  {id:"s24", title:"Dholi Taro Dhol Baaje", singer:"Kumar Sanu", genre:"Party", movie:"Hum Dil De Chuke Sanam", youtubeId:"bzST3cs8xDI", duration:"5:58", year:1999, language:"Hindi"},
  {id:"s25", title:"Tere Dar Par Sanam", singer:"Kumar Sanu", genre:"Romantic", movie:"Phir Teri Kahani Yaad Aayee", youtubeId:"k4yXQkG2s1E", duration:"5:22", year:1993, language:"Hindi"}
];

const KISHORE_SONGS = [
  {id:"ks1", title:"Pal Pal Dil Ke Paas", singer:"Kishore Kumar", genre:"Romantic", movie:"Blackmail", youtubeId:"AMuRRYxu9W0", duration:"5:22", year:1973, language:"Hindi"},
  {id:"ks2", title:"Kuch Toh Log Kahenge", singer:"Kishore Kumar", genre:"Romantic", movie:"Amar Prem", youtubeId:"Y0P-cpL8xK8", duration:"4:42", year:1972, language:"Hindi"},
  {id:"ks3", title:"Roop Tera Mastana", singer:"Kishore Kumar", genre:"Romantic", movie:"Aradhana", youtubeId:"6d5v1q8m2dE", duration:"3:45", year:1969, language:"Hindi"},
  {id:"ks4", title:"Mere Sapno Ki Rani", singer:"Kishore Kumar", genre:"Romantic", movie:"Aradhana", youtubeId:"8qLL2Gx3I_k", duration:"4:52", year:1969, language:"Hindi"},
  {id:"ks5", title:"Yeh Shaam Mastani", singer:"Kishore Kumar", genre:"Romantic", movie:"Kati Patang", youtubeId:"eB2gC9lR4yE", duration:"4:22", year:1971, language:"Hindi"},
  {id:"ks6", title:"O Mere Dil Ke Chain", singer:"Kishore Kumar", genre:"Romantic", movie:"Mere Jeevan Saathi", youtubeId:"5d6E1p1y1dQ", duration:"4:32", year:1972, language:"Hindi"},
  {id:"ks7", title:"Chingari Koi Bhadke", singer:"Kishore Kumar", genre:"Romantic", movie:"Amar Prem", youtubeId:"7UoP9ABJXGE", duration:"4:22", year:1972, language:"Hindi"},
  {id:"ks8", title:"Mere Mehboob Qayamat Hogi", singer:"Kishore Kumar", genre:"Romantic", movie:"Mr. X In Bombay", youtubeId:"6d5v1q8m2dE", duration:"3:42", year:1964, language:"Hindi"},
  {id:"ks9", title:"Hum Bewafa Hargiz Na The", singer:"Kishore Kumar", genre:"Sad", movie:"Shalimar", youtubeId:"8qLL2Gx3I_k", duration:"5:12", year:1978, language:"Hindi"},
  {id:"ks10", title:"Zindagi Ke Safar Mein", singer:"Kishore Kumar", genre:"Sad", movie:"Mukaddar Ka Sikandar", youtubeId:"eB2gC9lR4yE", duration:"6:22", year:1978, language:"Hindi"},
  {id:"ks11", title:"Dil Aaj Shayar Hai", singer:"Kishore Kumar", genre:"Romantic", movie:"Gambler", youtubeId:"5d6E1p1y1dQ", duration:"4:18", year:1971, language:"Hindi"},
  {id:"ks12", title:"Mere Dil Mein Aaj Kya Hai", singer:"Kishore Kumar", genre:"Romantic", movie:"Daag", youtubeId:"7UoP9ABJXGE", duration:"4:42", year:1973, language:"Hindi"},
  {id:"ks13", title:"Aanewala Pal Janewala Hai", singer:"Kishore Kumar", genre:"Romantic", movie:"Gol Maal", youtubeId:"6d5v1q8m2dE", duration:"4:28", year:1979, language:"Hindi"},
  {id:"ks14", title:"Gaadi Bula Rahi Hai", singer:"Kishore Kumar", genre:"Romantic", movie:"Dost", youtubeId:"8qLL2Gx3I_k", duration:"4:55", year:1974, language:"Hindi"},
  {id:"ks15", title:"Aap Ki Ankhon Mein Kuch", singer:"Kishore Kumar", genre:"Romantic", movie:"Ghar", youtubeId:"eB2gC9lR4yE", duration:"4:10", year:1978, language:"Hindi"},
  {id:"ks16", title:"Pag Ghungroo Bandh", singer:"Kishore Kumar", genre:"Party", movie:"Namak Halaal", youtubeId:"5d6E1p1y1dQ", duration:"6:10", year:1982, language:"Hindi"},
  {id:"ks17", title:"Dekha Ek Khwab", singer:"Kishore Kumar", genre:"Romantic", movie:"Silsila", youtubeId:"7UoP9ABJXGE", duration:"5:25", year:1981, language:"Hindi"},
  {id:"ks18", title:"Manzilen Apni Jagah", singer:"Kishore Kumar", genre:"Romantic", movie:"Sharabi", youtubeId:"6d5v1q8m2dE", duration:"5:00", year:1984, language:"Hindi"},
  {id:"ks19", title:"Inteha Ho Gayi", singer:"Kishore Kumar", genre:"Romantic", movie:"Sharaabi", youtubeId:"8qLL2Gx3I_k", duration:"5:45", year:1984, language:"Hindi"},
  {id:"ks20", title:"Om Shanti Om", singer:"Kishore Kumar", genre:"Party", movie:"Karz", youtubeId:"eB2gC9lR4yE", duration:"5:50", year:1980, language:"Hindi"}
];

const RAFI_SONGS = [
  {id:"r1", title:"Chaudhvin Ka Chand", singer:"Mohammed Rafi", genre:"Romantic", movie:"Chaudhvin Ka Chand", youtubeId:"k4yXQkG2s1E", duration:"4:22", year:1960, language:"Hindi"},
  {id:"r2", title:"Baharon Phool Barsao", singer:"Mohammed Rafi", genre:"Romantic", movie:"Suraj", youtubeId:"Umqb9K6y2Gw", duration:"4:32", year:1966, language:"Hindi"},
  {id:"r3", title:"Likhe Jo Khat Tujhe", singer:"Mohammed Rafi", genre:"Romantic", movie:"Kanyadaan", youtubeId:"bzST3cs8xDI", duration:"4:18", year:1968, language:"Hindi"},
  {id:"r4", title:"Aaj Mausam Bada Beimaan Hai", singer:"Mohammed Rafi", genre:"Romantic", movie:"Loafer", youtubeId:"k4yXQkG2s1E", duration:"4:42", year:1973, language:"Hindi"},
  {id:"r5", title:"Gulabi Aankhen", singer:"Mohammed Rafi", genre:"Romantic", movie:"The Train", youtubeId:"Umqb9K6y2Gw", duration:"4:28", year:1970, language:"Hindi"},
  {id:"r6", title:"Dard-E-Dil Dard-E-Jigar", singer:"Mohammed Rafi", genre:"Romantic", movie:"Karz", youtubeId:"bzST3cs8xDI", duration:"4:52", year:1980, language:"Hindi"},
  {id:"r7", title:"Maine Pucha Chand Se", singer:"Mohammed Rafi", genre:"Romantic", movie:"Abdullah", youtubeId:"k4yXQkG2s1E", duration:"5:12", year:1980, language:"Hindi"},
  {id:"r8", title:"Khilte Hain Gul Yahan", singer:"Mohammed Rafi", genre:"Romantic", movie:"Sharmeelee", youtubeId:"Umqb9K6y2Gw", duration:"4:22", year:1971, language:"Hindi"},
  {id:"r9", title:"Yeh Reshmi Zulfein", singer:"Mohammed Rafi", genre:"Romantic", movie:"Do Raaste", youtubeId:"bzST3cs8xDI", duration:"5:08", year:1969, language:"Hindi"},
  {id:"r10", title:"Aaja Tujhko Pukare Mera Pyar", singer:"Mohammed Rafi", genre:"Romantic", movie:"Neel Kamal", youtubeId:"k4yXQkG2s1E", duration:"4:42", year:1968, language:"Hindi"},
  {id:"r11", title:"Tere Mere Beech Mein", singer:"Mohammed Rafi", genre:"Romantic", movie:"Ek Duuje Ke Liye", youtubeId:"Umqb9K6y2Gw", duration:"4:32", year:1981, language:"Hindi"},
  {id:"r12", title:"Dard Dilo Ke Kam Ho Jaate", singer:"Mohammed Rafi", genre:"Sad", movie:"The Xpose", youtubeId:"bzST3cs8xDI", duration:"4:22", year:2014, language:"Hindi"},
  {id:"r13", title:"Kya Hua Tera Wada", singer:"Mohammed Rafi", genre:"Sad", movie:"Hum Kisise Kum Naheen", youtubeId:"k4yXQkG2s1E", duration:"4:48", year:1977, language:"Hindi"},
  {id:"r14", title:"Tum Jo Mil Gaye Ho", singer:"Mohammed Rafi", genre:"Romantic", movie:"Hanste Zakhm", youtubeId:"Umqb9K6y2Gw", duration:"5:02", year:1973, language:"Hindi"},
  {id:"r15", title:"Parda Hai Parda", singer:"Mohammed Rafi", genre:"Qawwali", movie:"Amar Akbar Anthony", youtubeId:"bzST3cs8xDI", duration:"7:22", year:1977, language:"Hindi"}
];

const SHREYA_SONGS = [
  {id:"sh1", title:"Bairi Piya", singer:"Shreya Ghoshal", genre:"Romantic", movie:"Devdas", youtubeId:"k4yXQkG2s1E", duration:"5:22", year:2002, language:"Hindi"},
  {id:"sh2", title:"Jaadu Hai Nasha Hai", singer:"Shreya Ghoshal", genre:"Romantic", movie:"Jism", youtubeId:"Umqb9K6y2Gw", duration:"4:42", year:2003, language:"Hindi"},
  {id:"sh3", title:"Piyu Bole", singer:"Shreya Ghoshal", genre:"Romantic", movie:"Parineeta", youtubeId:"bzST3cs8xDI", duration:"4:32", year:2005, language:"Hindi"},
  {id:"sh4", title:"Teri Ore", singer:"Shreya Ghoshal", genre:"Romantic", movie:"Singh Is Kinng", youtubeId:"k4yXQkG2s1E", duration:"5:12", year:2008, language:"Hindi"},
  {id:"sh5", title:"Chikni Chameli", singer:"Shreya Ghoshal", genre:"Party", movie:"Agneepath", youtubeId:"Umqb9K6y2Gw", duration:"5:02", year:2012, language:"Hindi"},
  {id:"sh6", title:"Saibo", singer:"Shreya Ghoshal", genre:"Romantic", movie:"Shor In The City", youtubeId:"bzST3cs8xDI", duration:"3:42", year:2011, language:"Hindi"},
  {id:"sh7", title:"Radha", singer:"Shreya Ghoshal", genre:"Romantic", movie:"Student Of The Year", youtubeId:"k4yXQkG2s1E", duration:"4:58", year:2012, language:"Hindi"},
  {id:"sh8", title:"Sunn Raha Hai", singer:"Shreya Ghoshal", genre:"Sad", movie:"Aashiqui 2", youtubeId:"Umqb9K6y2Gw", duration:"5:22", year:2013, language:"Hindi"},
  {id:"sh9", title:"Samjhawan", singer:"Shreya Ghoshal", genre:"Romantic", movie:"Humpty Sharma Ki Dulhania", youtubeId:"bzST3cs8xDI", duration:"4:29", year:2014, language:"Hindi"},
  {id:"sh10", title:"Deewani Mastani", singer:"Shreya Ghoshal", genre:"Classical", movie:"Bajirao Mastani", youtubeId:"k4yXQkG2s1E", duration:"5:42", year:2015, language:"Hindi"},
  {id:"sh11", title:"Ghoomar", singer:"Shreya Ghoshal", genre:"Classical", movie:"Padmaavat", youtubeId:"Umqb9K6y2Gw", duration:"4:42", year:2018, language:"Hindi"},
  {id:"sh12", title:"Dola Re Dola", singer:"Shreya Ghoshal", genre:"Classical", movie:"Devdas", youtubeId:"bzST3cs8xDI", duration:"6:12", year:2002, language:"Hindi"},
  {id:"sh13", title:"Yeh Ishq Hai", singer:"Shreya Ghoshal", genre:"Romantic", movie:"Jab We Met", youtubeId:"k4yXQkG2s1E", duration:"4:22", year:2007, language:"Hindi"},
  {id:"sh14", title:"Tere Naina", singer:"Shreya Ghoshal", genre:"Romantic", movie:"Chandni Chowk To China", youtubeId:"Umqb9K6y2Gw", duration:"4:32", year:2009, language:"Hindi"},
  {id:"sh15", title:"Bahara", singer:"Shreya Ghoshal", genre:"Romantic", movie:"I Hate Luv Storys", youtubeId:"bzST3cs8xDI", duration:"4:12", year:2010, language:"Hindi"},
  {id:"sh16", title:"Noor E Khuda", singer:"Shreya Ghoshal", genre:"Devotional", movie:"My Name Is Khan", youtubeId:"k4yXQkG2s1E", duration:"6:02", year:2010, language:"Hindi"},
  {id:"sh17", title:"O Saathi", singer:"Shreya Ghoshal", genre:"Romantic", movie:"Baaghi 2", youtubeId:"Umqb9K6y2Gw", duration:"4:22", year:2018, language:"Hindi"},
  {id:"sh18", title:"Thodi Der", singer:"Shreya Ghoshal", genre:"Romantic", movie:"Half Girlfriend", youtubeId:"bzST3cs8xDI", duration:"4:42", year:2017, language:"Hindi"},
  {id:"sh19", title:"Hasi", singer:"Shreya Ghoshal", genre:"Romantic", movie:"Hamari Adhuri Kahani", youtubeId:"k4yXQkG2s1E", duration:"4:22", year:2015, language:"Hindi"},
  {id:"sh20", title:"Mohe Rang Do Laal", singer:"Shreya Ghoshal", genre:"Classical", movie:"Bajirao Mastani", youtubeId:"Umqb9K6y2Gw", duration:"5:22", year:2015, language:"Hindi"}
];

const AR_RAHMAN_SONGS = [
  {id:"ar1", title:"Jai Ho", singer:"AR Rahman", genre:"Party", movie:"Slumdog Millionaire", youtubeId:"k4yXQkG2s1E", duration:"5:22", year:2008, language:"Hindi"},
  {id:"ar2", title:"Tere Bina", singer:"AR Rahman", genre:"Romantic", movie:"Guru", youtubeId:"Umqb9K6y2Gw", duration:"5:12", year:2007, language:"Hindi"},
  {id:"ar3", title:"Kun Faya Kun", singer:"AR Rahman", genre:"Devotional", movie:"Rockstar", youtubeId:"bzST3cs8xDI", duration:"7:52", year:2011, language:"Hindi"},
  {id:"ar4", title:"Dil Se Re", singer:"AR Rahman", genre:"Romantic", movie:"Dil Se", youtubeId:"k4yXQkG2s1E", duration:"6:12", year:1998, language:"Hindi"},
  {id:"ar5", title:"Chaiyya Chaiyya", singer:"AR Rahman", genre:"Party", movie:"Dil Se", youtubeId:"Umqb9K6y2Gw", duration:"6:02", year:1998, language:"Hindi"},
  {id:"ar6", title:"Vande Mataram", singer:"AR Rahman", genre:"Patriotic", movie:"Maa Tujhe Salaam", youtubeId:"bzST3cs8xDI", duration:"5:42", year:1997, language:"Hindi"},
  {id:"ar7", title:"Mustafa Mustafa", singer:"AR Rahman", genre:"Party", movie:"Kadhal Desam", youtubeId:"k4yXQkG2s1E", duration:"4:52", year:1996, language:"Tamil"},
  {id:"ar8", title:"Roja Roja", singer:"AR Rahman", genre:"Romantic", movie:"Roja", youtubeId:"Umqb9K6y2Gw", duration:"5:02", year:1992, language:"Tamil"},
  {id:"ar9", title:"Mukkala Mukkabala", singer:"AR Rahman", genre:"Party", movie:"Kadhalan", youtubeId:"bzST3cs8xDI", duration:"4:42", year:1994, language:"Tamil"},
  {id:"ar10", title:"Pachai Nirame", singer:"AR Rahman", genre:"Romantic", movie:"Alaipayuthey", youtubeId:"k4yXQkG2s1E", duration:"5:22", year:2000, language:"Tamil"}
];

const NUSRAT_SONGS = [
  {id:"n1", title:"Afreen Afreen", singer:"Nusrat Fateh Ali Khan", genre:"Qawwali", movie:"Coke Studio", youtubeId:"k4yXQkG2s1E", duration:"10:22", year:1996, language:"Urdu"},
  {id:"n2", title:"Tumhe Dillagi", singer:"Nusrat Fateh Ali Khan", genre:"Qawwali", movie:"Coke Studio", youtubeId:"Umqb9K6y2Gw", duration:"12:42", year:1996, language:"Urdu"},
  {id:"n3", title:"Mere Rashke Qamar", singer:"Nusrat Fateh Ali Khan", genre:"Qawwali", movie:"Album", youtubeId:"bzST3cs8xDI", duration:"8:32", year:1988, language:"Urdu"},
  {id:"n4", title:"Sanu Ik Pal Chain", singer:"Nusrat Fateh Ali Khan", genre:"Qawwali", movie:"Aaja Nachle", youtubeId:"k4yXQkG2s1E", duration:"6:12", year:1996, language:"Urdu"},
  {id:"n5", title:"Dum Mast Kalandar", singer:"Nusrat Fateh Ali Khan", genre:"Qawwali", movie:"Album", youtubeId:"Umqb9K6y2Gw", duration:"9:02", year:1990, language:"Punjabi"},
  {id:"n6", title:"Yeh Jo Halka Halka Suroor", singer:"Nusrat Fateh Ali Khan", genre:"Qawwali", movie:"Album", youtubeId:"bzST3cs8xDI", duration:"15:22", year:1985, language:"Urdu"},
  {id:"n7", title:"Allah Hoo Allah Hoo", singer:"Nusrat Fateh Ali Khan", genre:"Qawwali", movie:"Album", youtubeId:"k4yXQkG2s1E", duration:"11:42", year:1992, language:"Urdu"},
  {id:"n8", title:"Bhar Do Jholi Meri", singer:"Nusrat Fateh Ali Khan", genre:"Qawwali", movie:"Bajrangi Bhaijaan", youtubeId:"Umqb9K6y2Gw", duration:"8:22", year:2015, language:"Urdu"},
  {id:"n9", title:"Tere Bin Nahin Lagda", singer:"Nusrat Fateh Ali Khan", genre:"Qawwali", movie:"Kachche Dhaage", youtubeId:"bzST3cs8xDI", duration:"6:42", year:1999, language:"Punjabi"},
  {id:"n10", title:"Kali Kali Zulfon Ke", singer:"Nusrat Fateh Ali Khan", genre:"Qawwali", movie:"Album", youtubeId:"k4yXQkG2s1E", duration:"7:52", year:1988, language:"Urdu"},
  {id:"n11", title:"Sanson Ki Mala Pe", singer:"Nusrat Fateh Ali Khan", genre:"Qawwali", movie:"Kahar", youtubeId:"Umqb9K6y2Gw", duration:"9:12", year:1996, language:"Hindi"},
  {id:"n12", title:"Nit Khair Manga", singer:"Nusrat Fateh Ali Khan", genre:"Qawwali", movie:"Album", youtubeId:"bzST3cs8xDI", duration:"8:42", year:1992, language:"Punjabi"},
  {id:"n13", title:"Mast Nazron Se", singer:"Nusrat Fateh Ali Khan", genre:"Qawwali", movie:"Album", youtubeId:"k4yXQkG2s1E", duration:"7:22", year:1994, language:"Urdu"},
  {id:"n14", title:"Jhoole Jhoole Lal", singer:"Nusrat Fateh Ali Khan", genre:"Qawwali", movie:"Album", youtubeId:"Umqb9K6y2Gw", duration:"10:02", year:1990, language:"Punjabi"},
  {id:"n15", title:"Ali Maula Ali Maula", singer:"Nusrat Fateh Ali Khan", genre:"Qawwali", movie:"Album", youtubeId:"bzST3cs8xDI", duration:"9:32", year:1988, language:"Urdu"}
];

const RAHAT_SONGS = [
  {id:"rh1", title:"Jag Soona Soona Lage", singer:"Rahat Fateh Ali Khan", genre:"Sad", movie:"Om Shanti Om", youtubeId:"k4yXQkG2s1E", duration:"5:22", year:2007, language:"Hindi"},
  {id:"rh2", title:"Tere Mast Mast Do Nain", singer:"Rahat Fateh Ali Khan", genre:"Romantic", movie:"Dabangg", youtubeId:"Umqb9K6y2Gw", duration:"4:42", year:2010, language:"Hindi"},
  {id:"rh3", title:"Dil To Bachcha Hai Ji", singer:"Rahat Fateh Ali Khan", genre:"Romantic", movie:"Ishqiya", youtubeId:"bzST3cs8xDI", duration:"5:12", year:2010, language:"Hindi"},
  {id:"rh4", title:"Sajda", singer:"Rahat Fateh Ali Khan", genre:"Romantic", movie:"My Name Is Khan", youtubeId:"k4yXQkG2s1E", duration:"6:02", year:2010, language:"Hindi"},
  {id:"rh5", title:"Teri Meri", singer:"Rahat Fateh Ali Khan", genre:"Romantic", movie:"Bodyguard", youtubeId:"Umqb9K6y2Gw", duration:"5:32", year:2011, language:"Hindi"},
  {id:"rh6", title:"Dagabaaz Re", singer:"Rahat Fateh Ali Khan", genre:"Romantic", movie:"Dabangg 2", youtubeId:"bzST3cs8xDI", duration:"4:22", year:2012, language:"Hindi"},
  {id:"rh7", title:"Main Jahaan Rahoon", singer:"Rahat Fateh Ali Khan", genre:"Romantic", movie:"Namastey London", youtubeId:"k4yXQkG2s1E", duration:"5:42", year:2007, language:"Hindi"},
  {id:"rh8", title:"O Re Piya", singer:"Rahat Fateh Ali Khan", genre:"Romantic", movie:"Aaja Nachle", youtubeId:"Umqb9K6y2Gw", duration:"6:12", year:2007, language:"Hindi"},
  {id:"rh9", title:"Ajj Din Chadheya", singer:"Rahat Fateh Ali Khan", genre:"Romantic", movie:"Love Aaj Kal", youtubeId:"bzST3cs8xDI", duration:"5:02", year:2009, language:"Hindi"},
  {id:"rh10", title:"Tum Jo Aaye", singer:"Rahat Fateh Ali Khan", genre:"Romantic", movie:"Once Upon A Time In Mumbaai", youtubeId:"k4yXQkG2s1E", duration:"4:42", year:2010, language:"Hindi"}
];

const ATIF_SONGS = [
  {id:"at1", title:"Woh Lamhe", singer:"Atif Aslam", genre:"Sad", movie:"Zeher", youtubeId:"k4yXQkG2s1E", duration:"5:22", year:2005, language:"Hindi"},
  {id:"at2", title:"Tere Bin", singer:"Atif Aslam", genre:"Sad", movie:"Bas Ek Pal", youtubeId:"Umqb9K6y2Gw", duration:"4:42", year:2006, language:"Hindi"},
  {id:"at3", title:"Pehli Nazar Mein", singer:"Atif Aslam", genre:"Romantic", movie:"Race", youtubeId:"bzST3cs8xDI", duration:"5:12", year:2008, language:"Hindi"},
  {id:"at4", title:"Tu Jaane Na", singer:"Atif Aslam", genre:"Romantic", movie:"Ajab Prem Ki Ghazab Kahani", youtubeId:"k4yXQkG2s1E", duration:"5:42", year:2009, language:"Hindi"},
  {id:"at5", title:"Tera Hone Laga Hoon", singer:"Atif Aslam", genre:"Romantic", movie:"Ajab Prem Ki Ghazab Kahani", youtubeId:"Umqb9K6y2Gw", duration:"4:22", year:2009, language:"Hindi"},
  {id:"at6", title:"Dil Diyan Gallan", singer:"Atif Aslam", genre:"Romantic", movie:"Tiger Zinda Hai", youtubeId:"bzST3cs8xDI", duration:"4:32", year:2017, language:"Hindi"},
  {id:"at7", title:"O Saathi", singer:"Atif Aslam", genre:"Romantic", movie:"Baaghi 2", youtubeId:"k4yXQkG2s1E", duration:"4:12", year:2018, language:"Hindi"},
  {id:"at8", title:"Jeena Jeena", singer:"Atif Aslam", genre:"Romantic", movie:"Badlapur", youtubeId:"Umqb9K6y2Gw", duration:"3:52", year:2015, language:"Hindi"},
  {id:"at9", title:"Be Intehaan", singer:"Atif Aslam", genre:"Romantic", movie:"Race 2", youtubeId:"bzST3cs8xDI", duration:"4:42", year:2013, language:"Hindi"},
  {id:"at10", title:"Main Rang Sharbaton Ka", singer:"Atif Aslam", genre:"Romantic", movie:"Phata Poster Nikhla Hero", youtubeId:"k4yXQkG2s1E", duration:"4:22", year:2013, language:"Hindi"},
  {id:"at11", title:"Aadat", singer:"Atif Aslam", genre:"Sad", movie:"Kalyug", youtubeId:"Umqb9K6y2Gw", duration:"5:02", year:2005, language:"Hindi"},
  {id:"at12", title:"Tere Liye", singer:"Atif Aslam", genre:"Romantic", movie:"Prince", youtubeId:"bzST3cs8xDI", duration:"4:32", year:2010, language:"Hindi"},
  {id:"at13", title:"Piya O Re Piya", singer:"Atif Aslam", genre:"Romantic", movie:"Tere Naal Love Ho Gaya", youtubeId:"k4yXQkG2s1E", duration:"4:52", year:2012, language:"Hindi"},
  {id:"at14", title:"Tajdar-E-Haram", singer:"Atif Aslam", genre:"Qawwali", movie:"Coke Studio", youtubeId:"Umqb9K6y2Gw", duration:"10:22", year:2015, language:"Urdu"},
  {id:"at15", title:"Dekhte Dekhte", singer:"Atif Aslam", genre:"Romantic", movie:"Batti Gul Meter Chalu", youtubeId:"bzST3cs8xDI", duration:"4:22", year:2018, language:"Hindi"}
];

// ===== BONUS SONGS (10) - Udit, Alka, Sonu, Lata, Asha =====
const BONUS_SONGS = [
  {id:"b1", title:"Pehla Nasha", singer:"Udit Narayan", genre:"Romantic", movie:"Jo Jeeta Wohi Sikandar", youtubeId:"k4yXQkG2s1E", duration:"4:22", year:1992, language:"Hindi"},
  {id:"b2", title:"Ek Do Teen", singer:"Alka Yagnik", genre:"Party", movie:"Tezaab", youtubeId:"Umqb9K6y2Gw", duration:"4:32", year:1988, language:"Hindi"},
  {id:"b3", title:"Kal Ho Naa Ho", singer:"Sonu Nigam", genre:"Sad", movie:"Kal Ho Naa Ho", youtubeId:"bzST3cs8xDI", duration:"5:22", year:2003, language:"Hindi"},
  {id:"b4", title:"Lag Ja Gale", singer:"Lata Mangeshkar", genre:"Romantic", movie:"Woh Kaun Thi", youtubeId:"k4yXQkG2s1E", duration:"4:32", year:1964, language:"Hindi"},
  {id:"b5", title:"Piya Tu Ab To Aaja", singer:"Asha Bhosle", genre:"Party", movie:"Caravan", youtubeId:"Umqb9K6y2Gw", duration:"5:00", year:1971, language:"Hindi"},
  {id:"b6", title:"Tujhe Dekha To", singer:"Udit Narayan", genre:"Romantic", movie:"Dilwale Dulhania Le Jayenge", youtubeId:"bzST3cs8xDI", duration:"5:10", year:1995, language:"Hindi"},
  {id:"b7", title:"Chura Liya Hai Tumne", singer:"Asha Bhosle", genre:"Romantic", movie:"Yaadon Ki Baaraat", youtubeId:"k4yXQkG2s1E", duration:"4:45", year:1973, language:"Hindi"},
  {id:"b8", title:"Abhi Mujh Mein Kahin", singer:"Sonu Nigam", genre:"Romantic", movie:"Agneepath", youtubeId:"Umqb9K6y2Gw", duration:"5:42", year:2012, language:"Hindi"},
  {id:"b9", title:"Didi Tera Devar Deewana", singer:"Lata Mangeshkar", genre:"Party", movie:"Hum Aapke Hain Koun", youtubeId:"bzST3cs8xDI", duration:"5:42", year:1994, language:"Hindi"},
  {id:"b10", title:"Tip Tip Barsa Pani", singer:"Alka Yagnik", genre:"Romantic", movie:"Mohra", youtubeId:"k4yXQkG2s1E", duration:"5:30", year:1994, language:"Hindi"}
];

// ===== ALL SONGS COMBINED =====
const ALL_SONGS = [
  ...ARIJIT_SONGS, ...KK_SONGS, ...KUMAR_SANU_SONGS, ...KISHORE_SONGS,
  ...RAFI_SONGS, ...SHREYA_SONGS, ...AR_RAHMAN_SONGS, ...NUSRAT_SONGS,
  ...RAHAT_SONGS, ...ATIF_SONGS, ...BONUS_SONGS
];

const SINGERS_LIST = [
  "Arijit Singh", "K.K.", "Kumar Sanu", "Kishore Kumar",
  "Mohammed Rafi", "Shreya Ghoshal", "AR Rahman",
  "Nusrat Fateh Ali Khan", "Rahat Fateh Ali Khan", "Atif Aslam",
  "Udit Narayan", "Alka Yagnik", "Sonu Nigam", "Lata Mangeshkar", "Asha Bhosle"
];

const GENRES_LIST = ["Romantic", "Sad", "Party", "Devotional", "Classical", "Pop", "Ghazal", "Qawwali", "Patriotic"];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ALL_SONGS, SINGERS_LIST, GENRES_LIST };
}
