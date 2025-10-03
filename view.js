function updateView(){
let HTML = document.getElementById("app").innerHTML = /*HTML*/ `
<div><img id="M8" src="Magic_8_ball.png"></div>
<h2>Hvem er den heldige?</h2>

<!-- Bakgrunnsmusikk som fungerer ved play -->
<audio src="Magic Escape Room.mp3" controls></audio>

<button onclick="TellFortune()">Lets rumble</button>
<p id="Answers"><p>













`
}

updateView()