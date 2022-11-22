let num1 = Math.floor(100000 + Math.random() * 900000);
let num2 = Math.floor(100000 + Math.random() * 900000);
let num3 = Math.floor(100000 + Math.random() * 900000);
let won_num = Math.floor(100000 + Math.random() * 900000);
randomnum()

const bun = document.querySelector('.clickR') //ปุ่มที่จะใช้กด
const bun1 = document.querySelector('.clickL')
var walkRight = false; //เช็คเดินขวา
var walkLeft = false; //เช็คเดินซ้าย
let timer

var event_trigger = 0;

var front_back = 1;
var turn = 0;
var walk = 0;


var check = 1;
var collision = 0;
var check_text = 0;

var catfx = document.querySelector(".cat_sfx")
catfx.volume = 0.7;

function hidehuay() {
    document.querySelector(".pang_pop").style.display = "none"
    check = 0
}

function hidetv() {
    document.querySelector(".tv_pop").style.display = "none";
    check = 0
    document.querySelector("video").pause();
    console.log("hide")
    if (check_text == 0) {
        timedText()
        console.log("if")
    }
    if(won_num == num1 || won_num == num2 || won_num == num3)
    document.querySelector(".won_number").innerHTML = won_num-10+1
    else(
    document.querySelector(".won_number").innerHTML = won_num
    )
}

function newmap() {
    location.replace("map2.html")
}


var tv_show = 0;
const bg = document.querySelector(".floor");

const character_img = document.querySelector(".cha")
const character = document.querySelector(".c1")
const map1m = document.getElementById("map1");

const cha_offset = document.getElementById("c1");
const check_offset = document.getElementById("check");
const check_end = document.querySelector(".guay");

const yai_offset = document.querySelector(".yai");
const women_offset = document.querySelector(".women_map1");
const shrine_offset = document.querySelector(".shrine");

var mid = check_offset.offsetLeft - cha_offset.offsetLeft;
var y = 0;
var m = 0;



document.addEventListener('keydown', function (event) {

    mid = check_offset.offsetLeft - cha_offset.offsetLeft;
    if ((cha_offset.offsetLeft >= check_end.offsetLeft)) {
        check=1;
        document.getElementById("c1").style.animation = "fall 0.3s forwards";
        setTimeout(newmap, 500);
    }
    /*D*/


    ////////////////////////////////////////////////////////////////////////////////////
    // เดิน
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
    else if ((event.keyCode == 68 || event.keyCode == 39) && mid <= (check_offset.offsetLeft / 2) && check == 0) {
        y += 0.8;
        py = y + 'vw';
        m -= 0.8;
        my = m + 'vw';
        map1m.style.setProperty('--map1move', my)
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
    if ((event.keyCode == 65 || event.keyCode == 37) && cha_offset.offsetLeft < check_end.offsetLeft && cha_offset.offsetLeft+(window.innerWidth *0.40) >= check_end.offsetLeft && check == 0) {
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
        map1m.style.setProperty('--map1move', my)
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

    ////////////////////////////////////////////////////////////////////////////////////////////
    

    
    if ((yai_offset.offsetLeft - cha_offset.offsetLeft <= 0) && collision == 0) {
        document.getElementById("dia").style.display = "inline"
        check = 1
        collision = 1
    }

    if (women_offset.offsetLeft - cha_offset.offsetLeft <= 35 && tv_show == 0) {
        check = 1
        document.querySelector(".tv_pop").style.display = "flex"
        document.querySelector("video").play();

        setTimeout(hidetv, 4700)
        tv_show = 1

    }

    if (shrine_offset.offsetLeft - cha_offset.offsetLeft <= 150 && event_trigger == 0) {
        catfx.play()
        document.querySelector(".shrine_talk").style.opacity = 100;
        console.log("sarn")
        event_trigger = 1
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


function randomnum() {

    document.getElementById("huayp1").innerHTML = num1;
    document.getElementById("huayp2").innerHTML = num2;
    document.getElementById("huayp3").innerHTML = num3;
}

let app = new Vue({
    el: '.dialog',
    data: {
        mes: ["เอ้าว่าไงไอ้หนุ่ม สนใจมาวัดดวงกับป้ามั้ย อีกไม่กี่ใบก็หมดแล้วรับรองรวย ไม่ต้องทำงานงกๆหน้าคอมไปอีกนาน อีกไม่กี่นาทีก็จะประกาศผลแล้วเด้อ"
            , "เอ่อ...ก็ได้ครับ"
            , "ขอให้โชคดีนะพ่อหนุ่ม"],
        talker: 0

    },
    methods: {
        talk: function () {
            this.talker = (this.talker + 1)

            if (this.talker == 0) {
                document.querySelector('.dialog').dataset.flip = 1
                document.querySelector('.chat1').dataset.flip = 1
                document.querySelector('.next').dataset.flip = 1
            }
            else if (this.talker == 1) {
                document.querySelector('.dialog').dataset.flip = -1
                document.querySelector('.chat1').dataset.flip = -1
                document.querySelector('.next').dataset.flip = -1
            }
            else if (this.talker == 2) {
                document.querySelector('.dialog').dataset.flip = 2
                document.querySelector('.chat1').dataset.flip = 2
                document.querySelector('.next').dataset.flip = 2
            }


            else {
                document.querySelector('.dialog').style.display = "none"
                document.querySelector(".pang_pop").style.display = "flex"

            }
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
    if ((walkRight && !walkLeft) && (window.innerWidth * 0.40) + (cha_offset.offsetLeft) >= check_end.offsetLeft && cha_offset.offsetLeft <= check_end.offsetLeft && check == 0) {
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
        map1m.style.setProperty('--map1move', my)
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
    if ((yai_offset.offsetLeft - cha_offset.offsetLeft <= 0) && collision == 0) {
        document.getElementById("dia").style.display = "inline"
        check = 1
        collision = 1
        
    }
    if (women_offset.offsetLeft - cha_offset.offsetLeft <= 35 && tv_show == 0) {
        check = 1
        document.querySelector(".tv_pop").style.display = "flex"
        document.querySelector("video").play();

        setTimeout(hidetv, 4700)
        tv_show = 1

    }

    if (shrine_offset.offsetLeft - cha_offset.offsetLeft <= 150 && event_trigger == 0) {
        catfx.play()
        document.querySelector(".shrine_talk").style.opacity = 100;
        console.log("sarn")
        event_trigger = 1
    }
}

function walkingLeft(){
    walkLeft = true
    mid = check_offset.offsetLeft - cha_offset.offsetLeft;
    if ((walkLeft && !walkRight) && cha_offset.offsetLeft < check_end.offsetLeft && cha_offset.offsetLeft+(window.innerWidth *0.40) >= check_end.offsetLeft && check == 0) {
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
        map1m.style.setProperty('--map1move', my)
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
    map1m.style.transform = "translateY(-8vw)"
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
function timedText() {
    var x = document.querySelector(".bon1");
    check_text = 1;
    setTimeout(() => { x.style.opacity = "100" }, 1000);
    setTimeout(() => { x.innerHTML = "อ๊าก ! หวยแดก !" }, 1000);
    setTimeout(() => { x.innerHTML = "อะไรเนี่ย โกงกันรึเปล่า !?" }, 3000);
    setTimeout(() => { x.innerHTML = "ใครมันเป็นคนสรรหาคิดวิธีการ <br> ขูดรีดชาวบ้านชนชั้นกลางแบบนี้เนี่ย <br> อย่าให้รู้นะ ! หลอกลวงที่สุด!" }, 6000);
    setTimeout(() => { x.style.top = "-7vw" }, 6000);
    setTimeout(() => { x.style.left = "-5vw" }, 6000);
    setTimeout(() => { x.style.fontSize = "1.4vw" }, 6000);
    setTimeout(() => { x.style.opacity = "0" }, 12000);
    
}