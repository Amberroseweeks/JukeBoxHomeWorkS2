
function SongTrack(title, artist, source) {
    this.title = title
    this.artist = artist
    this.source = source
}

let SongTrack1 = new SongTrack('Upbeat Party', 'Artist 1: Scott Holmes', 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Scott_Holmes/Inspiring__Upbeat_Music/Scott_Holmes_-_04_-_Upbeat_Party.mp3');

let SongTrack2 = new SongTrack('Stomps and Claps', 'Artist 2: Scot Holmes', 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Scott_Holmes/Inspiring__Upbeat_Music/Scott_Holmes_-_03_-_Stomps_and_Claps.mp3');

let SongTrack3 = new SongTrack('Inspirational Outlook', 'Artist 3: Scott Holmes', 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Scott_Holmes/Inspiring__Upbeat_Music/Scott_Holmes_-_07_-_Inspirational_Outlook.mp3')

let songList = [SongTrack1, SongTrack2, SongTrack3]


//console.log(SongTrack.length)
//console.log(songList.length)
//console.log(SongTrack4.source)
//console.log(SongTrack4.title)


var songName = document.getElementById("songName");

var song = new Audio();
var currentSong = 0; 
//let playbutton = document.getElementById("playbutton");




    function playSong () { 
        song.src = songList[currentSong].source;
        song.play();   
        console.log(songList[currentSong].title)
        console.log(songList[currentSong].artist)
        
        var songName = document.getElementById("songName").innerHTML = "Song Title: " + songList[currentSong].title;
        var songArtist = document.getElementById("songArtist").innerHTML = "By: " + songList[currentSong].artist;
    }
    
console.log(songList[currentSong].source)
    function pauseSong () {
    song.pause()
        
    }

    function nextSong() {
    currentSong++;
    if(currentSong > 2){
        currentSong = 0;
    }
    playSong();
    }
    
    function preSong() {
    currentSong--;
    if(currentSong < 0){
        currentSong = 2;
    }
    playSong();
        
    }





function shuffleSong() {
//console.log('current song' + currentSong)

    let shuffle = undefined;
    do{
        shuffle = Math.floor(Math.random()* songList.length)
//        console.log(' shuffle ' + shuffle)
    }
    while (currentSong == shuffle)
    currentSong = shuffle  
    playSong();
}






function Jukebox (songTrack) {
    this.currentSong = 0
    this.songs = songTrack;
    
    
}

console.log(SongTrack)
console.log(song)
console.log(song.src)

//function playSong(){
//    
//    song.src = songs[currentSong];
//    
//    songName.textContent = SongTrack[i].title[currentSong];
//    
//    song.play();
//}
//
//console.log(songName)
//function pauseSong(){
//    song.src = songs[currentSong];
//    
//    songName.textContent = songs[currentSong];
//    
//    song.pause();
//}
//
//function next(){
//    
//    currentSong++;
//    if(currentSong >2){
//        currentSong = 0;
//    }
//    playSong();
//}
//
//function pre(){
//    currentSong--;
//    if(currentSong < 0){
//        currentSong= 2;
//    }
//    playSong();
//}
