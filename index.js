
// Homework:
// Create a music box. The design is completely up to you;
// The app should be able to:
//  - play audio files;
//  - pause audio files;
//  - has next/previous buttons;
//  - has randomization (when selected it randomizes the song order);
//  - able to load audio files;
// Please make sure that the app looks as good as possible in terms of design. This is your protfolio
// and all aspects of the app (not only the js logic) is very important;
// Start the project gradually - first figure out how to work with audio in javascript. Once you get the play and
// pause buttons proceed with the rest; Leave the design and css until the end


function SongTrack(title, artist, source) {
    this.title = title
    this.artist = artist
    this.source = source
}

let SongTrack1 = new SongTrack('Upbeat Party', 'Scott Holmes', 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Scott_Holmes/Inspiring__Upbeat_Music/Scott_Holmes_-_04_-_Upbeat_Party.mp3');

let SongTrack2 = new SongTrack('Stomps and Claps', 'Scott Holmes', 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Scott_Holmes/Inspiring__Upbeat_Music/Scott_Holmes_-_03_-_Stomps_and_Claps.mp3');

let SongTrack3 = new SongTrack('Inspirational Outlook', 'Scott Holmes', 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Scott_Holmes/Inspiring__Upbeat_Music/Scott_Holmes_-_07_-_Inspirational_Outlook.mp3')

let songList = [SongTrack1, SongTrack2, SongTrack3]

//checked the location of data
//console.log(SongTrack.length)
//console.log(songList.length)
//console.log(SongTrack4.source)
//console.log(SongTrack4.title)

var song = new Audio();
var currentSong = 0; 

    function playSong () { 
        song.src = songList[currentSong].source;
        song.play();   
        console.log(songList[currentSong].title)
        console.log(songList[currentSong].artist)
        
        var songName = document.getElementById("songName").innerHTML = songList[currentSong].title;
        var songArtist = document.getElementById("songArtist").innerHTML =  songList[currentSong].artist;
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


    let shuffle = undefined;
    do{
        shuffle = Math.floor(Math.random()* songList.length)
    }
    while (currentSong == shuffle)
    currentSong = shuffle  
    playSong();
}






function Jukebox (songTrack) {
    this.currentSong = 0
    this.songs = songTrack;
    
    
}
//check location of data
console.log(SongTrack)
console.log(song)
console.log(song.src)

