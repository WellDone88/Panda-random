function updateView(){
let HTML = document.getElementById("app").innerHTML = /*HTML*/ `
<h2>Hvem er den heldige?</h2>
<div><img id="M8" src="Magic_8_ball.png"></div> 
<img id="PL" src="pandaLogo.png">



<button onclick="TellFortune()">Lets rumble</button>
<p id="Answers"><p>













`
}

updateView()