export default function() {
    const treeAudio = new Audio("assets/floresta.wav")
    const cloudAudio = new Audio("assets/chuva.wav")
    const storeAudio = new Audio("assets/cafeteria.wav")
    const fireAudio = new Audio("assets/lareira.wav")
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")

    function tree() { treeAudio.play() }
    function cloud() { cloudAudio.play() }
    function store() { storeAudio.play() }
    function fire() { fireAudio.play() }

    function pressButton() { buttonPressAudio.play() }

    function stop() {
        treeAudio.pause()
        cloudAudio.pause()
        storeAudio.pause()
        fireAudio.pause()
    }
    
    treeAudio.loop = true
    cloudAudio.loop = true
    storeAudio.loop = true
    fireAudio.loop = true

    return {
        tree,
        cloud,
        store,
        fire,

        stop,
        pressButton
    }
}
