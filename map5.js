const bun = document.querySelector('.clickR') //ปุ่มที่จะใช้กด
const bun1 = document.querySelector('.clickL')
var walkRight = false; //เช็คเดินขวา
var walkLeft = false; //เช็คเดินซ้าย
let timer
let num1 = Math.floor(100000 + Math.random() * 900000);
let num2 = Math.floor(100000 + Math.random() * 900000);
let num3 = Math.floor(100000 + Math.random() * 900000);
randomnum()
var check = 0;
var collision = 0;
var check_text = 0;

var selected_huay


function hidehuay(num) {
    document.getElementById("pang_h").style.display = "none"
    check = 0

    if (num == 1) {
        selected_huay = num1
    }
    else if (num == 2) {
        selected_huay = num2
    }

    else if (num == 3) {
        selected_huay = num3
    }

}
function hidetv() {
    document.getElementById("tvh").style.display = "none"
    check = 0
    document.querySelector("video").pause();
    console.log("hide")
    if (check_text == 0) {
        timedText()
        console.log("if")
    }
    
    document.querySelector(".won_number").innerHTML = selected_huay
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
var y = 5;
py = y + 'vw';
var m = 0;
character.style.setProperty('--moveset', py);

document.addEventListener('keydown', function (event) {

    mid = check_offset.offsetLeft - cha_offset.offsetLeft;
    if ((cha_offset.offsetLeft >= check_end.offsetLeft)) {
        check=1;
        document.getElementById("c1").style.animation = "example 0.3s forwards";
        setTimeout(newmap, 500);
    }
    /*D*/


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
        map1m.style.setProperty('--map1move', my)
        character.style.setProperty('--moveset', py);
        character_img.setAttribute("src", "./PNG update/Map1/character/main_cha.gif")
        console.log("3")
    }

    if (document.querySelector('.dialog').style.display == "none") {

    }


    /*A*/
    if ((event.keyCode == 65 || event.keyCode == 37) && cha_offset.offsetLeft < check_end.offsetLeft && cha_offset.offsetLeft+(window.innerWidth *0.35) >= check_end.offsetLeft && check == 0) {
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
        map1m.style.setProperty('--map1move', my)
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

    if ((yai_offset.offsetLeft - cha_offset.offsetLeft <= 50) && collision == 0) {
        document.getElementById("dia").style.display = "inline"
        check = 1
        collision = 1
    }

    if (women_offset.offsetLeft - cha_offset.offsetLeft <= 35 && tv_show == 0) {
        check = 1
        document.getElementById("tvh").style.display = "inline"
        document.querySelector("video").play();

        setTimeout(hidetv, 11000)
        tv_show = 1

    }

    if (shrine_offset.offsetLeft - cha_offset.offsetLeft <= 150) {
        document.querySelector(".shrine_talk").style.opacity = 100;
        console.log("sarn")

    }

})

function newmap() {
    location.replace("map2.html")
}

function randomnum() {

    document.getElementById("huayp1").innerHTML = num1;
    document.getElementById("huayp2").innerHTML = num2;
    document.getElementById("huayp3").innerHTML = num3;
}

let app = new Vue({
    el: '.dialog',
    data: {
        mes: ["เอ้าว่าไงไอ้หนุ่ม สนใจมาวัดดวงกับป้ามั้ย อีกไม่กี่ใบก็หมดแล้วรับรองรวย ไม่ต้องทำงานงกๆหน้าคอมไปอีกนาน อีกไม่กี่นาทีก็จะประกาศผลแล้วเด้อ"
            , "...ลองอีกรอบก็ได้วะ"],
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



            else {
                document.querySelector('.dialog').style.display = "none"
                document.querySelector(".pang_huay").style.display = "inline"

            }
        }

    }
})


setTimeout(() => { document.querySelector(".bon1").style.display = "none" }, 3000); 






function timedText() {
    var x = document.querySelector(".bon1");
    check_text = 1;
      
}

