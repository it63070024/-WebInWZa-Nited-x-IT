function closeLoad(){
    document.querySelector(".loading_screen").style.display = "none"
    check = 0
}
function closeLoadScreen(){
    document.querySelector(".loading_screen").style.animation = "transition 2s ease-in-out forwards"
    setTimeout(closeLoad, 2000)  
}
function addCloseLoad(){
    document.querySelector(".loading_screen").setAttribute('onclick','closeLoadScreen()')
    document.querySelector(".loading_screen").style.cursor= "pointer"
    document.getElementById("load").innerHTML = "Click to continue"

}
function fakeLoad(){
    setTimeout(addCloseLoad, 3000)
}