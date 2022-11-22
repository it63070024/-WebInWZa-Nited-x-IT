var soundtrack = document.querySelector(".soundtrack")
soundtrack.volume = 0.25;
function closeLoad(){
    document.querySelector(".loading_screen").style.display = "none"
    check = 0
}
function closeLoadScreen(){
    document.querySelector(".loading_screen").style.animation = "transition 1s ease-in-out forwards"
    setTimeout(closeLoad, 850) 
    soundtrack.play()
}
function addCloseLoad(){
    document.querySelector(".loading_screen").setAttribute('onclick','closeLoadScreen()')
    document.querySelector(".loading_screen").style.cursor= "pointer"
    document.getElementById("load").innerHTML = "Click to continue"

}
function fakeLoad(){
    setTimeout(addCloseLoad, 1500)
}

document.body.addEventListener('contextmenu', (event) => {
    event.preventDefault();
  });