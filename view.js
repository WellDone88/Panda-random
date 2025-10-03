function updateView(){
let HTML = document.getElementById("app").innerHTML = /*HTML*/ `
<div><img id="M8" src="Magic_8_ball.png"></div>
<h2>Still et spørsmål høyt og trykk på spå knappen</h2>

<!-- Bakgrunnsmusikk som fungerer ved play -->
<audio src="Magic Escape Room.mp3" controls></audio>

<button onclick="TellFortune()">Spå meg</button>
<p id="Answers"><p>













`
}

updateView()