const bun = document.querySelector('.clickR') //ปุ่มที่จะใช้กด
const bun1 = document.querySelector('.clickL')
var walkRight = false; //เช็คเดินขวา
var walkLeft = false; //เช็คเดินซ้าย
let timer
var y = 0;
var m = 0;
var check = 1;
sessionStorage.accessedMap4 = true;

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

const women1_offset = document.querySelector(".women1");
const women2_offset = document.querySelector(".women2");
const women3_offset = document.querySelector(".women3");

var front_back = 1;
var turn = 0;
var walk = 0;

var event_trigger = 0

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
}

function lottoPopup3() {
    document.getElementById("nextbutton2").style.display = "flex"
    document.getElementById("pl3").src = "./PNG update/Map4/popup/popup3_1.svg"
    document.getElementById("p3").style.display = "flex"
    check = 1
}

function nextPopup2() {
    pop3stat = document.getElementById("pl3").getAttribute("src")
    if (pop3stat == pop3[1]) {
        document.getElementById("pl3").src = pop3[2]
        document.getElementById("nextbutton2").style.display = "none"
    }
    else {
        document.getElementById("pl3").src = pop3[1]
    }
}

function elmoPopup() {
    if(check == 0){
        check = 1
        document.querySelector(".elmo_wrap").style.display = "flex"
    }else{
        document.querySelector(".elmo_wrap").style.display = "none"
        check = 0
    }
}

function newmap() {
    location.replace("map5.html")
}



document.addEventListener('keydown', function (event) {

    /*D*/
    mid = check_offset.offsetLeft - cha_offset.offsetLeft;

    if (check_end.offsetLeft - cha_offset.offsetLeft <= 0) {
        check = 1
        newmap()
    }

    if ((event.keyCode == 68 || event.keyCode == 39) && (window.innerWidth * 0.35) + (cha_offset.offsetLeft) >= check_end.offsetLeft && cha_offset.offsetLeft <= check_end.offsetLeft && check == 0) {
        y += 0.8;
        py = y + 'vw';
        character.style.setProperty('--moveset', py);
        
        walk += 1
        front_back = Math.abs(front_back)
        if (turn == 0) {
            character_img.setAttribute("src", "./PNG update/character/Mc1.PNG")
            turn = 1
        }
        if (walk % 10 == 0) {
            character_img.setAttribute("src", "./PNG update/character/Mc1.PNG")
        }
        else if (walk % 10 == 5){
            character_img.setAttribute("src", "./PNG update/character/Mc2.PNG")
        }
        console.log("1");

    }

    else if ((event.keyCode == 68 || event.keyCode == 39) && mid > check_offset.offsetLeft / 2 && check == 0) {
        y += 0.8;
        py = y + 'vw';
        character.style.setProperty('--moveset', py);

        walk += 1
        front_back = Math.abs(front_back)
        if (turn == 0) {
            character_img.setAttribute("src", "./PNG update/character/Mc1.PNG")
            turn = 1
        }
        if (walk % 10 == 0) {
            character_img.setAttribute("src", "./PNG update/character/Mc1.PNG")
        }
        else if (walk % 10 == 5){
            character_img.setAttribute("src", "./PNG update/character/Mc2.PNG")
        }
        console.log("2")

    }
    else if ((event.keyCode == 68 || event.keyCode == 39) && mid <= (check_offset.offsetLeft / 2) && check == 0) {
        y += 0.8;
        py = y + 'vw';
        m -= 0.8;
        my = m + 'vw';
        map4m.style.setProperty('--map4move', my)
        character.style.setProperty('--moveset', py);
        
        walk += 1
        front_back = Math.abs(front_back)
        if (turn == 0) {
            character_img.setAttribute("src", "./PNG update/character/Mc1.PNG")
            turn = 1
        }
        if (walk % 10 == 0) {
            character_img.setAttribute("src", "./PNG update/character/Mc1.PNG")
        }
        else if (walk % 10 == 5){
            character_img.setAttribute("src", "./PNG update/character/Mc2.PNG")
        }
        console.log("3")
    }




    /*A*/
    if ((event.keyCode == 65 || event.keyCode == 37) && cha_offset.offsetLeft < check_end.offsetLeft && cha_offset.offsetLeft + (window.innerWidth * 0.35) >= check_end.offsetLeft && check == 0) {
        y -= 0.8;
        py = y + 'vw';

        character.style.setProperty('--moveset', py)

        front_back = -Math.abs(front_back)
        walk += 1
        if (turn == 1) {
            character_img.setAttribute("src", "./PNG update/character/Mc1_flip.PNG")
            turn = 0
        }
        if (walk % 10 == 0) {
            character_img.setAttribute("src", "./PNG update/character/Mc1_flip.PNG")
        }
        else if (walk % 10 == 5){
            character_img.setAttribute("src", "./PNG update/character/Mc2_flip.PNG")
        }
        console.log("4")
    }

    else if ((event.keyCode == 65 || event.keyCode == 37) && y >= 0 && m < -1 && check == 0) {
        y -= 0.8;
        py = y + 'vw';
        m += 0.8;
        my = m + 'vw';
        map4m.style.setProperty('--map4move', my)
        character.style.setProperty('--moveset', py);
        
        
        front_back = -Math.abs(front_back)
        walk += 1
        if (turn == 1) {
            character_img.setAttribute("src", "./PNG update/character/Mc1_flip.PNG")
            turn = 0
        }
        if (walk % 10 == 0) {
            character_img.setAttribute("src", "./PNG update/character/Mc1_flip.PNG")
        }
        else if (walk % 10 == 5){
            character_img.setAttribute("src", "./PNG update/character/Mc2_flip.PNG")
        }
        console.log("5")
    }
    else if ((event.keyCode == 65 || event.keyCode == 37) && y > 1 && check == 0) {

        y -= 0.8;
        py = y + 'vw';
        character.style.setProperty('--moveset', py);


        front_back = -Math.abs(front_back)
        walk += 1
        if (turn == 1) {
            character_img.setAttribute("src", "./PNG update/character/Mc1_flip.PNG")
            turn = 0
        }
        if (walk % 10 == 0) {
            character_img.setAttribute("src", "./PNG update/character/Mc1_flip.PNG")
        }
        else if (walk % 10 == 5){
            character_img.setAttribute("src", "./PNG update/character/Mc2_flip.PNG")
        }
        console.log("6")
    }

    if (women1_offset.offsetLeft - cha_offset.offsetLeft <= 10 && event_trigger == 0) {
        lottoPopup()
        event_trigger = 1

    }

    if (women2_offset.offsetLeft - cha_offset.offsetLeft <= 10 && event_trigger == 1) {
        lottoPopup2()
        event_trigger = 2

    }

    if (women3_offset.offsetLeft - cha_offset.offsetLeft <= 10 && event_trigger == 2) {
        lottoPopup3()
        event_trigger = 3

    }




})


document.addEventListener('keyup', function (event) {

    if (event.keyCode == 65 || event.keyCode == 37 || event.keyCode == 68 || event.keyCode == 39) {
        if (Math.sign(front_back) == 1) {
            character_img.setAttribute("src", "./PNG update/Map1/character/main_cha.gif")
        }
        else if (Math.sign(front_back) == -1) {
            character_img.setAttribute("src", "./PNG update/Map1/character/main_cha_flip.gif")
        }
    }

})

/////////////////////////////////////////////////////////////////////////////////////////
//phonewalk



function timeoutClearRight() {
    clearTimeout(timer);
    walkRight = false
    walkLeft = false
}

function walkingRight(){
    walkRight = true
    mid = check_offset.offsetLeft - cha_offset.offsetLeft;
    if ((cha_offset.offsetLeft >= check_end.offsetLeft)) {
        check=1;
        document.getElementById("c1").style.animation = "fall 0.3s forwards";
        setTimeout(newmap, 500);
    }
    /*D*/


    ////////////////////////////////////////////////////////////////////////////////////
    // เดิน
    if ((walkRight && !walkLeft) && (window.innerWidth * 0.35) + (cha_offset.offsetLeft) >= check_end.offsetLeft && cha_offset.offsetLeft <= check_end.offsetLeft && check == 0) {
        y += 0.8;
        py = y + 'vw';
        
        character.style.setProperty('--moveset', py);

        walk += 1
        front_back = Math.abs(front_back)
        if (turn == 0) {
            character_img.setAttribute("src", "./PNG update/character/Mc1.PNG")
            turn = 1
        }
        if (walk % 10 == 0) {
            character_img.setAttribute("src", "./PNG update/character/Mc1.PNG")
        }
        else if (walk % 10 == 5){
            character_img.setAttribute("src", "./PNG update/character/Mc2.PNG")
        }

        console.log("1");

    }

    else if ((walkRight && !walkLeft) && mid > check_offset.offsetLeft / 2 && check == 0) {
        y += 0.8;
        py = y + 'vw';
        character.style.setProperty('--moveset', py);


        front_back = Math.abs(front_back)
        walk += 1
        if (turn == 0) {
            character_img.setAttribute("src", "./PNG update/character/Mc1.PNG")
            turn = 1
        }
        if (walk % 10 == 0) {
            character_img.setAttribute("src", "./PNG update/character/Mc1.PNG")
        }
        else if (walk % 10 == 5){
            character_img.setAttribute("src", "./PNG update/character/Mc2.PNG")
        }
        
        console.log("2")

    }
    else if ((walkRight && !walkLeft) && mid <= (check_offset.offsetLeft / 2) && check == 0) {
        y += 0.8;
        py = y + 'vw';
        m -= 0.8;
        my = m + 'vw';
        map4m.style.setProperty('--map4move', my)
        character.style.setProperty('--moveset', py);

        walk += 1
        front_back = Math.abs(front_back)
        if (turn == 0) {
            character_img.setAttribute("src", "./PNG update/character/Mc1.PNG")
            turn = 1
        }
        if (walk % 10 == 0) {
            character_img.setAttribute("src", "./PNG update/character/Mc1.PNG")
        }
        else if (walk % 10 == 5){
            character_img.setAttribute("src", "./PNG update/character/Mc2.PNG")
        }
        console.log("3")
    }
    timer = setTimeout(walkingRight,33);
    if (women1_offset.offsetLeft - cha_offset.offsetLeft <= 10 && event_trigger == 0) {
        lottoPopup()
        event_trigger = 1

    }

    if (women2_offset.offsetLeft - cha_offset.offsetLeft <= 10 && event_trigger == 1) {
        lottoPopup2()
        event_trigger = 2

    }

    if (women3_offset.offsetLeft - cha_offset.offsetLeft <= 10 && event_trigger == 2) {
        lottoPopup3()
        event_trigger = 3

    }
}

function walkingLeft(){
    walkLeft = true
    mid = check_offset.offsetLeft - cha_offset.offsetLeft;
    if ((walkLeft && !walkRight) && cha_offset.offsetLeft < check_end.offsetLeft && cha_offset.offsetLeft+(window.innerWidth *0.35) >= check_end.offsetLeft && check == 0) {
        y -= 0.8;
        py = y + 'vw';
        character.style.setProperty('--moveset', py)


        front_back = -Math.abs(front_back)
        walk += 1
        if (turn == 1) {
            character_img.setAttribute("src", "./PNG update/character/Mc1_flip.PNG")
            turn = 0
        }
        if (walk % 10 == 0) {
            character_img.setAttribute("src", "./PNG update/character/Mc1_flip.PNG")
        }
        else if (walk % 10 == 5){
            character_img.setAttribute("src", "./PNG update/character/Mc2_flip.PNG")
        }
        
        console.log("4")
    }

    else if ((walkLeft && !walkRight) && y >= 0 && m < -1 && check == 0) {
        y -= 0.8;
        py = y + 'vw';
        m += 0.8;
        my = m + 'vw';
        map4m.style.setProperty('--map4move', my)
        character.style.setProperty('--moveset', py);
        front_back = -Math.abs(front_back)
        walk += 1
        if (turn == 1) {
            character_img.setAttribute("src", "./PNG update/character/Mc1_flip.PNG")
            turn = 0
        }
        if (walk % 10 == 0) {
            character_img.setAttribute("src", "./PNG update/character/Mc1_flip.PNG")
        }
        else if (walk % 10 == 5){
            character_img.setAttribute("src", "./PNG update/character/Mc2_flip.PNG")
        }
        console.log("5")
    }
    else if ((walkLeft && !walkRight) && y > 1 && check == 0) {

        y -= 0.8;
        py = y + 'vw';
        character.style.setProperty('--moveset', py);

        front_back = -Math.abs(front_back)
        walk += 1
        if (turn == 1) {
            character_img.setAttribute("src", "./PNG update/character/Mc1_flip.PNG")
            turn = 0
        }
        if (walk % 10 == 0) {
            character_img.setAttribute("src", "./PNG update/character/Mc1_flip.PNG")
        }
        else if (walk % 10 == 5){
            character_img.setAttribute("src", "./PNG update/character/Mc2_flip.PNG")
        }
        console.log("6")
    }
    timer = setTimeout(walkingLeft,33);
}

bun.addEventListener('touchstart', walkingRight) //ตั้ง eventlisttener ที่ปุ่มกด
bun.addEventListener('touchend', timeoutClearRight);


bun1.addEventListener('touchstart', walkingLeft) //ตั้ง eventlisttener ที่ปุ่มกด
bun1.addEventListener('touchend', timeoutClearRight);


document.addEventListener('contextmenu', event => event.preventDefault());

if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    bun.style.display = "flex"
    bun1.style.display = "flex"
    map4m.style.transform = "translateY(-8vw)"
   }
else if( /iPad/i.test(navigator.userAgent) ) {
    bun.style.display = "flex"
    bun1.style.display = "flex" 
   }
else{
    bun.style.display = "none"
    bun1.style.display = "none"
}

//phonewalk
/////////////////////////////////////////////////////////////////////////////////////////