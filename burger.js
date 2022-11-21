document.getElementById("menu_con").src= "./PNG update/UI/burger menu/burgerframe.png";

function callMenu() {
    var menu_display_stat = document.getElementById("menu");
    
    if (menu_display_stat.style.display == "none"){
        unhoverabt();
        unhoverrs();
        unhovermt();
        document.getElementById("menu_con").src= "./PNG update/UI/burger menu/burgerframe.png";
        document.getElementsByClassName("frame")[0].style.display = "flex"
        document.getElementsByClassName("frame")[1].style.display = "flex"
        document.getElementsByClassName("frame")[2].style.display = "flex"
        document.getElementsByClassName("frame")[3].style.display = "flex"
        document.getElementsByClassName("frame")[4].style.display = "flex"
        document.getElementsByClassName("frame")[5].style.display = "flex"
        document.getElementsByClassName("button")[0].style.display = "flex"
        document.getElementsByClassName("button")[1].style.display = "flex"
        document.getElementsByClassName("button")[2].style.display = "flex"
        document.getElementsByClassName("button")[3].style.display = "flex"
        document.getElementsByClassName("button")[4].style.display = "flex"
        document.getElementsByClassName("button")[5].style.display = "flex"
        check = 1
        menu_display_stat.style.display = "flex"
    } else {
        menu_display_stat.style.display = "none"
        check = 0
    }
}

function about(){
    unhoverabt();
    document.getElementById("menu_con").src = "./PNG update/UI/burger menu/about info.png"
    document.getElementsByClassName("frame")[0].style.display = "none"
    document.getElementsByClassName("frame")[1].style.display = "none"
    document.getElementsByClassName("frame")[2].style.display = "none"
    document.getElementsByClassName("frame")[3].style.display = "none"
    document.getElementsByClassName("frame")[4].style.display = "none"
    document.getElementsByClassName("frame")[5].style.display = "none"
    document.getElementsByClassName("button")[0].style.display = "none"
    document.getElementsByClassName("button")[1].style.display = "none"
    document.getElementsByClassName("button")[2].style.display = "none"
    document.getElementsByClassName("button")[3].style.display = "none"
    document.getElementsByClassName("button")[4].style.display = "none"
    document.getElementsByClassName("button")[5].style.display = "none"
}

function hoverm2() {
    document.getElementById("fm2").src = "./PNG update/UI/burger menu/R3 hold-01.png"
  }
function unhoverm2() {
    document.getElementById("fm2").src = "./PNG update/UI/burger menu/R3-01.png";
  }

function hoverm3() {
    document.getElementById("fm3").src = "./PNG update/UI/burger menu/R5 hold-01.png"
}

function unhoverm3() {
    document.getElementById("fm3").src = "./PNG update/UI/burger menu/R5-01.png"
}

function hovermm() {
    document.getElementById("fmm").src = "./PNG update/UI/burger menu/new hold-01.png"
}

function unhovermm() {
    document.getElementById("fmm").src = "./PNG update/UI/burger menu/new-01.png"  
}

function hoverrs() {
    document.getElementById("frs").src = "./PNG update/UI/burger menu/Re hold.png"
}

function unhoverrs() {
    document.getElementById("frs").src = "./PNG update/UI/burger menu/re.png"
}

function hoverabt() {
    document.getElementById("fabt").src = "./PNG update/UI/burger menu/about hold.png"
}

function unhoverabt() {
    document.getElementById("fabt").src = "./PNG update/UI/burger menu/about.png" 
}

function gotomap2() {
    if(sessionStorage.accessedMap2){
        location.replace("map2.html")
    }
    else{
        alert("You can't go there for now.")
    }
}

function gotomap3() {
    if(sessionStorage.accessedMap3){
        location.replace("map3.html")
    }
    else{
        alert("You can't go there for now.")
    }
}

function gotomap4() {
    if(sessionStorage.accessedMap4){
        location.replace("map4.html")
        }
        else{
            alert("You can't go there for now.")
        }
}

function reset() {
    unhoverrs()
    sessionStorage.clear()
    sessionStorage.isMuted = false
    location.replace("map1.html")
}

function hovermt() {
    if((sessionStorage.isMuted === 'false')){
        document.getElementById("fmt").src = "./PNG update/UI/burger menu/song hold.png"
    }
    else{
        document.getElementById("fmt").src = "./PNG update/UI/burger menu/mute hold.png"
    }
}

function unhovermt() {
    if ((sessionStorage.isMuted === 'false')){
        document.getElementById("fmt").src = "./PNG update/UI/burger menu/song.png"
    }
    else{
        document.getElementById("fmt").src = "./PNG update/UI/burger menu/mute.png"
    }
}

function mute(){
    if ((sessionStorage.isMuted === 'false')){ //เช็คว่าตอนนี้เสียงโดน mute อยู่หรือเปล่า
        var aud = document.querySelector(".soundtrack");
        aud.muted = true;
        sessionStorage.isMuted = true
        unhovermt();
    }
    else{
        document.getElementById("fmt").src = "./PNG update/UI/burger menu/song.png"
        var aud = document.querySelector(".soundtrack");
        aud.muted = false;
        sessionStorage.isMuted = false
        unhovermt();
    }
    console.log((sessionStorage.isMuted === 'false'))
}

