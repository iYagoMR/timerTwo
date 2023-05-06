export default function Controls({
    minutesDisplay,
    buttonPlay,
    buttonStop,
}) {

    let minutes = Number(minutesDisplay.textContent)

    function volUp() {
        ++minutes
        minutesDisplay.textContent = String(minutes)
    }
    function volDown() {
        --minutes
        minutesDisplay.textContent = String(minutes)
    }
    function stop() {
        buttonPlay.classList.remove('hide') 
    }
    function play() {
        buttonPlay.classList.add('hide')
        buttonStop.classList.remove('hide')
    }
    function reset() {
        buttonPlay.classList.remove('hide')
        buttonStop.classList.remove('hide')
    }

    return {
        volUp,
        volDown,
        stop,
        play,
        reset
    }
}