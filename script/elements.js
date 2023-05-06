//Controls
const buttonPlay = document.querySelector('.play');
const buttonStop = document.querySelector('.stop');
const buttonVolUp = document.querySelector('.plusFiveMin');
const buttonVolDown = document.querySelector('.minusFiveMin');
//Timer displayed numbers
const minutesDisplay = document.querySelector('.minutesDisplay')
const secondsDisplay = document.querySelector('.secondsDisplay')
//Sound buttons
const treeSoundBtn = document.querySelector('.tree')
const cloudSoundBtn = document.querySelector('.cloud')
const storeSoundBtn = document.querySelector('.store')
const fireSoundBtn = document.querySelector('.fire')

//This was supposed to select all the divs inside the right section
//and it would be used to change the color of the buttons,
//when the user pressed it.
//////BUT IT IS NOT WORKING//////
//const soundBtns = document.querySelector(".right div")

export {
    buttonPlay,
    buttonStop,
    buttonVolUp,
    buttonVolDown,
    minutesDisplay,
    secondsDisplay,
    treeSoundBtn,
    cloudSoundBtn,
    storeSoundBtn,
    fireSoundBtn
}
