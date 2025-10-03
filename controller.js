
function TellFortune(){
    let fortune = magicArray[Math.floor(Math.random() * magicArray.length)]

    document.getElementById("Answers").innerHTML = fortune + '<br>'; 
}