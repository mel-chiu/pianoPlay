let numberOfPianoKeys = document.querySelectorAll(".key").length;

for (let i = 0; i < numberOfPianoKeys; i++) {
    document.querySelectorAll(".key")[i].addEventListener('click', function () {
        let buttonInnerHTML = this.innerHTML;
        pianoPlay(buttonInnerHTML);
    })

}

window.addEventListener('keypress', function (e) {
    pianoPlay(e.key);
})



function pianoPlay(key) {
    switch (key) {
        case "C":
            let audioC = new Audio("/audio/piano_middle_C.mp3");
            audioC.play();
            break;
        case "D":
            let audioD = new Audio("/audio/piano_D.mp3");
            audioD.play();
            break;
        case "E":
            let audioE = new Audio("/audio/piano_E.mp3");
            audioE.play();
            break;
        case "F":
            let audio = new Audio("/audio/piano_F.mp3");
            audio.play();
            break;
        case "G":
            let audioG = new Audio("/audio/piano_G.mp3"); //The audio is a bit brokern
            audioG.play();
            break;
        case "A":
            let audioA = new Audio("/audio/piano_A.mp3");
            audioA.play();
            break;
        case "B":
            let audioB = new Audio("/audio/piano_B.mp3");
            audioB.play();
            break;
        default: console.log("Let's click a button!")
            break;
    }
}