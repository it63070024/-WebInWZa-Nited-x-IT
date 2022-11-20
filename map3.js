const bun = document.querySelector('.clickR') //ปุ่มที่จะใช้กด
const bun1 = document.querySelector('.clickL')
var walkRight = false; //เช็คเดินขวา
var walkLeft = false; //เช็คเดินซ้าย
let timer
sessionStorage.accessedMap3 = true;

var y = 18;
py = y + 'vw';
var m = 0;
const character = document.querySelector(".c1")
const character_img = document.querySelector(".cha")
const map3m = document.getElementById("map3")
character.style.setProperty('--moveset', py);

const cha_offset = document.getElementById("c1");
const check_offset = document.getElementById("check");
const check_end = document.querySelector(".hole");

const person1_offset = document.querySelector(".person1");
const foreigner_offset = document.querySelector(".foreigner");
const women_offset = document.querySelector(".women1");


var mid = check_offset.offsetLeft - cha_offset.offsetLeft;
var check = 0

var front_back = 1;
var turn = 0;
var walk = 0;

var event_trigger = 0;

document.addEventListener('keydown', function (event) {

    if ((check_end.offsetLeft - cha_offset.offsetLeft <= 10)) {
        check = 1
        character.style.animation = "fall 0.5s forwards";
        setTimeout(newmap, 700);
        
    }

    /*D*/

    mid = check_offset.offsetLeft - cha_offset.offsetLeft;

    if ((event.keyCode == 68 || event.keyCode == 39) && (window.innerWidth * 0.40) + (cha_offset.offsetLeft) >= check_end.offsetLeft && cha_offset.offsetLeft <= check_end.offsetLeft && check == 0) {
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
        map3m.style.setProperty('--map3move', my)
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
    if ((event.keyCode == 65 || event.keyCode == 37) && cha_offset.offsetLeft < check_end.offsetLeft && cha_offset.offsetLeft + (window.innerWidth * 0.40) >= check_end.offsetLeft && check == 0) {
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

    else if ((event.keyCode == 65 || event.keyCode == 37) && y >= 18 && m < -1 && check == 0) {
        y -= 0.8;
        py = y + 'vw';
        m += 0.8;
        my = m + 'vw';
        map3m.style.setProperty('--map3move', my)
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
    else if ((event.keyCode == 65 || event.keyCode == 37) && y > 19 && check == 0) {

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

    if (person1_offset.offsetLeft - cha_offset.offsetLeft <= 20) {
        
        document.getElementById("chat2").style.opacity = "100";
        document.getElementById("chat3").style.opacity = "100";
        if (person1_offset.offsetLeft - cha_offset.offsetLeft <= -500) {
            document.getElementById("chat2").style.display = "none";
            document.getElementById("chat3").style.display = "none";
        }
    }

    if (foreigner_offset.offsetLeft - cha_offset.offsetLeft <= 60 && event_trigger == 0) {
        document.getElementById("chat1").style.opacity = "100"
        check =1
        event_trigger = 1
    }
    if (women_offset.offsetLeft - cha_offset.offsetLeft <= 20 && event_trigger == 1) {
        hiddenPopup3()
        check =1
        event_trigger = 2
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

function newmap() {
    location.replace("map4.html")
}

function hide_chat() {
    document.getElementById("chat1").style.opacity = "0"
    check = 0
}

function hiddenPopup() {
    sessionStorage.hiddenCheck2 = true;
    document.querySelector(".hidden_img1").src = "./PNG update/Map3/Hidden1.svg"
    document.getElementById("popup1").style.display = "flex"
    check = 1
}

function hiddenPopup2() {
    sessionStorage.hiddenCheck3 = true;
    document.querySelector(".hidden_img2").src = "./PNG update/Map3/Hidden2.svg"
    document.getElementById("popup2").style.display = "flex"
    check = 1
}


function hiddenPopup3() {
    document.querySelector(".hidden_img3").src = "./PNG update/Map3/pop up1.svg"
    document.getElementById("popup3").style.display = "flex"
    check = 1
}

function closePopup() {
    document.getElementsByClassName("popup_wrap")[0].style.display = "none"
    document.getElementsByClassName("popup_wrap")[1].style.display = "none"
    document.getElementsByClassName("popup_wrap")[2].style.display = "none"
    check = 0
    check = 0
}

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
        map3m.style.setProperty('--map3move', my)
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
    if (person1_offset.offsetLeft - cha_offset.offsetLeft <= 20) {
        
        document.getElementById("chat2").style.opacity = "100";
        document.getElementById("chat3").style.opacity = "100";
        if (person1_offset.offsetLeft - cha_offset.offsetLeft <= -500) {
            document.getElementById("chat2").style.display = "none";
            document.getElementById("chat3").style.display = "none";
        }
    }

    if (foreigner_offset.offsetLeft - cha_offset.offsetLeft <= 60 && event_trigger == 0) {
        document.getElementById("chat1").style.opacity = "100"
        check =1
        event_trigger = 1
    }
    if (women_offset.offsetLeft - cha_offset.offsetLeft <= 20 && event_trigger == 1) {
        hiddenPopup3()
        check =1
        event_trigger = 2
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
        map3m.style.setProperty('--map3move', my)
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

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    bun.style.display = "inline"
    bun1.style.display = "inline"
    map3m.style.transform = "translateY(-5vw)"
   }
else{
    bun.style.display = "none"
    bun1.style.display = "none"
}

//phonewalk
/////////////////////////////////////////////////////////////////////////////////////////