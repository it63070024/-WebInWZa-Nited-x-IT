
var y = 0;
var m = 0;
var check = 0;
const character = document.querySelector(".c1")
const character_img = document.querySelector(".cha")
const map4m = document.getElementById("map4")
const pop2 = "./PNG update/Map4/popup/popup2_2.svg";
const pop3 = ["./PNG update/Map4/popup/popup3_1.svg",
    "./PNG update/Map4/popup/popup3_2.svg",
    "./PNG update/Map4/popup/popup3_3.svg"];
const cha_offset = document.getElementById("c1");
const check_offset = document.getElementById("check");
const check_end = document.querySelector(".door2");
var mid = check_offset.offsetLeft - cha_offset.offsetLeft;
var pop3stat
// ปิด popup
function closePopup() {
    document.getElementsByClassName("popup_wrap")[0].style.display = "none"
    document.getElementsByClassName("popup_wrap")[1].style.display = "none"
    document.getElementsByClassName("popup_wrap")[2].style.display = "none"
    check = 0
}

function lottoPopup() {
    document.getElementById("pl1").src = "./PNG update/Map4/popup/popup1.svg"
    document.getElementById("p1").style.display = "flex"
    check = 1
}
function lottoPopup2() {
    document.getElementById("pl2").src = "./PNG update/Map4/popup/popup2_1.svg"
    document.getElementById("p2").style.display = "flex"
    document.getElementById("nextbutton1").style.display = "flex"
    check = 1
}
function nextPopup() {
    document.getElementById("pl2").src = pop2
    document.getElementById("nextbutton1").style.display = "none"
    check = 1
}

function lottoPopup3() {
    document.getElementById("nextbutton2").style.display = "flex"
    document.getElementById("pl3").src = "./PNG update/Map4/popup/popup3_1.svg"
    document.getElementById("p3").style.display = "flex"
    check = 1
}

function nextPopup2() {
    pop3stat = document.getElementById("pl3").getAttribute("src")
    check = 1
    if (pop3stat == pop3[1]) {
        document.getElementById("pl3").src = pop3[2]
        document.getElementById("nextbutton2").style.display = "none"
    }
    else {
        document.getElementById("pl3").src = pop3[1]
    }
}

function elmoZoom() {
    document.getElementById("").style.display = "flex"
}


document.addEventListener('keydown', function (event) {

    /*D*/
    mid = check_offset.offsetLeft - cha_offset.offsetLeft;

    if ((event.keyCode == 68 || event.keyCode == 39) && (window.innerWidth * 0.35) + (cha_offset.offsetLeft) >= check_end.offsetLeft && cha_offset.offsetLeft <= check_end.offsetLeft && check == 0) {
        y += 0.8;
        py = y + 'vw';
        character.style.setProperty('--moveset', py);
        character_img.setAttribute("src", "./PNG update/Map1/character/main_cha.gif");
        console.log("1");

    }

    else if ((event.keyCode == 68 || event.keyCode == 39) && mid > check_offset.offsetLeft / 2 && check == 0) {
        y += 0.8;
        py = y + 'vw';
        character.style.setProperty('--moveset', py);

        character_img.setAttribute("src", "./PNG update/Map1/character/main_cha.gif")
        console.log("2")

    }
    else if ((event.keyCode == 68 || event.keyCode == 39) && mid <= (check_offset.offsetLeft / 2) && check == 0) {
        y += 0.8;
        py = y + 'vw';
        m -= 0.8;
        my = m + 'vw';
        map4m.style.setProperty('--map4move', my)
        character.style.setProperty('--moveset', py);
        character_img.setAttribute("src", "./PNG update/Map1/character/main_cha.gif")
        console.log("3")
    }




    /*A*/
    if ((event.keyCode == 65 || event.keyCode == 37) && cha_offset.offsetLeft < check_end.offsetLeft && cha_offset.offsetLeft + (window.innerWidth * 0.35) >= check_end.offsetLeft && check == 0) {
        y -= 0.8;
        py = y + 'vw';

        character.style.setProperty('--moveset', py)
        character_img.setAttribute("src", "./PNG update/Map1/character/main_cha_flip.gif")
        console.log("4")
    }

    else if ((event.keyCode == 65 || event.keyCode == 37) && y >= 0 && m < -1 && check == 0) {
        y -= 0.8;
        py = y + 'vw';
        m += 0.8;
        my = m + 'vw';
        map4m.style.setProperty('--map4move', my)
        character.style.setProperty('--moveset', py);
        character_img.setAttribute("src", "./PNG update/Map1/character/main_cha_flip.gif")
        console.log("5")
    }
    else if ((event.keyCode == 65 || event.keyCode == 37) && y > 1 && check == 0) {

        y -= 0.8;
        py = y + 'vw';
        character.style.setProperty('--moveset', py);


        character_img.setAttribute("src", "./PNG update/Map1/character/main_cha_flip.gif")
        console.log("6")
    }



})



