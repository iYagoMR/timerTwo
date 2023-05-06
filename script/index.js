import Controls from './controls.js'
import Sounds from './sounds.js'
import Timer from './timer.js'
import {
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
} from './elements.js';

const controls = Controls({
    minutesDisplay,
    buttonPlay,
    buttonStop
})

const sounds = Sounds()

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
    stopSound: sounds.stop
})


//Actions
//Sound buttons' events
treeSoundBtn.addEventListener('click', function() {
    sounds.pressButton()
    sounds.stop()
    sounds.tree()
})
cloudSoundBtn.addEventListener('click', function() {
    sounds.pressButton()
    sounds.stop()
    sounds.cloud()
})
storeSoundBtn.addEventListener('click', function() {
    sounds.pressButton()
    sounds.stop()
    sounds.store()
})
fireSoundBtn.addEventListener('click', function() {
    sounds.pressButton()
    sounds.stop()
    sounds.fire()
})

//Controllers' buttons
buttonVolUp.addEventListener('click', function() {
    sounds.pressButton()
    controls.volUp()
})
buttonVolDown.addEventListener('click', function() {
    sounds.pressButton()
    controls.volDown()
})
buttonStop.addEventListener('click', function() {
    sounds.stop()
    sounds.pressButton()
    controls.stop()
    timer.reset()
})
buttonPlay.addEventListener('click', function() {
    sounds.pressButton()
    controls.play()
    timer.countDown()
})