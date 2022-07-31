
// Initializing the variables...!!

let songIndex = 0;
let audioElement = new Audio('src/songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let masterSongName = document.getElementById("masterSongName");
let myGif = document.getElementById("gif");
let songItem = Array.from(document.getElementsByClassName("songItem")); // Array is added because "FOR-EACH" only takes values from array...!!

let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "src/songs/1.mp3", coverPath: "src/images/covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "src/songs/2.mp3", coverPath: "src/images/covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]", filePath: "src/songs/3.mp3", coverPath: "src/images/covers/3.jpg"},
    {songName: "Different Heaven & EH!DE [NCS Release]", filePath: "src/songs/4.mp3", coverPath: "src/images/covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-NCS-Release", filePath: "src/songs/5.mp3", coverPath: "src/images/covers/5.jpg"},
    {songName: "Rabba - Invincible", filePath: "src/songs/6.mp3", coverPath: "src/images/covers/6.jpg"},
    {songName: "Bhula Dena", filePath: "src/songs/7.mp3", coverPath: "src/images/covers/7.jpg"},
    {songName: "Sakhiyaan", filePath: "src/songs/8.mp3", coverPath: "src/images/covers/8.jpg"},
    {songName: "Tumhari Kasam", filePath: "src/songs/9.mp3", coverPath: "src/images/covers/9.jpg"},
    {songName: "Salem-e-Ishq", filePath: "src/songs/10.mp3", coverPath: "src/images/covers/10.jpg"},
]; 


// ********************************************* Changing Song Name and CoverPath ************************************************************************************


songItem.forEach((element, i) => {
    // console.log(element, i);
    element.querySelectorAll("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});



// ******************************************** Handle play/ pause click *****************************************************

masterPlay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        myGif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        myGif.style.opacity = 0;
    }

});


// ******************************************** Listen To Events **************************************************************

// Update Seekbar
audioElement.addEventListener("timeupdate", () => {
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);   
    myProgressBar.value = progress;

});

// To change the songs when seekbar is moved..!!
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (((myProgressBar.value)*(audioElement.duration))/100);

});


// ******************************************************************************************************************************

const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    });
}

// ******************************************************************************************************************************

Array.from(document.getElementsByClassName("songItemPlay")).forEach( (element) => {

    element.addEventListener('click', (e) => {
        // console.log(e.target); // By "e.target" we will get that element which is being clicked...!!
        
        songIndex = parseInt(e.target.id);
        
        if (audioElement.paused || audioElement.currentTime<=0) {
            makeAllPlay();
            e.target.classList.remove("fa-circle-play");
            e.target.classList.add("fa-circle-pause");
            
            audioElement.src = `src/songs/${songIndex+1}.mp3`;
            audioElement.currentTime = 0;
            audioElement.play();
            masterSongName.innerText = songs[songIndex].songName;
            
            masterPlay.classList.remove("fa-circle-play");
            masterPlay.classList.add("fa-circle-pause");
            
            myGif.style.opacity = 1;
        }
        else{
            makeAllPlay();
            e.target.classList.remove("fa-circle-pause");
            e.target.classList.add("fa-circle-play");

            audioElement.src = `src/songs/${songIndex+1}.mp3`;
            audioElement.currentTime = 0;
            audioElement.pause();
            masterSongName.innerText = songs[songIndex].songName;
            
            masterPlay.classList.remove("fa-circle-pause");
            masterPlay.classList.add("fa-circle-play");

            myGif.style.opacity = 0;
        }
        
    });

});




// NEXT BUTTON

document.getElementById(`next`).addEventListener('click', () => {

    if(songIndex >= 9){
        songIndex = 0;
    }
    else{
        songIndex += 1; 
    }
    audioElement.src = `src/songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");

});


// PREVIOUS BUTTON
document.getElementById(`previous`).addEventListener('click', () => {

    if(songIndex <= 0){
        songIndex = 0;
    }
    else{
        songIndex -= 1; 
    }
    audioElement.src = `src/songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");

});