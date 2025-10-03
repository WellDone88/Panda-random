
function TellFortune() {
    let audio = new Audio("drum-roll-379670.mp3");
    audio.play();

    setTimeout(function () {
        let fortune = magicArray[Math.floor(Math.random() * magicArray.length)];
        document.getElementById("Answers").innerHTML = fortune + '<br>'; 
    }, 4000);
}
