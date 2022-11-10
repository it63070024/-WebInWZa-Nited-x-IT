let num1 = Math.floor(100000 + Math.random() * 900000);
let num2 = Math.floor(100000 + Math.random() * 900000);
let num3 = Math.floor(100000 + Math.random() * 900000);
randomnum()
var check = 0;
function hidehuay() {
    document.getElementById("pang_h").style.display = "none"
    check = 0
}
function hidetv() {
    document.getElementById("tvh").style.display = "none"
    check = 0
    document.querySelector("video").pause();

}


var tv_show = 0;
const bg = document.querySelector(".floor");

const character = document.querySelector(".cha")
const map1m = document.getElementById("map1")
const cha_offset = document.getElementById("cha");
const check_offset = document.getElementById("check");
const collision = document.getElementById("collision");

var mid =check_offset.offsetLeft - cha_offset.offsetLeft;
var y = 0;
var m = 0;

document.addEventListener('keydown', function (event) {

    mid = check_offset.offsetLeft - cha_offset.offsetLeft;
    if ((y == 1601 && m < -45.20)) {
        document.getElementById("cha").style.animation = "example 0.5s";
        setTimeout(newmap, 500);
    }
    /*D*/
    


    if ((event.keyCode == 68 || event.keyCode == 39) && mid > check_offset.offsetLeft/2 && check == 0) {
        y += 0.8;
        py = y + 'vw';
        character.style.setProperty('--moveset', py);
        collision.style.setProperty('--moveset', py)
        character.setAttribute("src", "./PNG update/Map1/character/main_cha.gif")
        console.log("2")

    }
    else if ((event.keyCode == 68 || event.keyCode == 39) && mid <= (check_offset.offsetLeft / 2) && check == 0) {
        y += 1;
        py = y + 'vw';
        m -= 1;
        my = m + 'vw';
        map1m.style.setProperty('--map1move', my)
        collision.style.setProperty('--moveset', py)
        character.setAttribute("src", "./PNG update/Map1/character/main_cha.gif")
        console.log("3")
    }
    else if ((event.keyCode == 68 || event.keyCode == 39) && check == 0) {
        y += 0.8;
        py = y + 'vw';
        character.style.setProperty('--moveset', py);
        collision.style.setProperty('--moveset', py);
        character.setAttribute("src", "./PNG update/Map1/character/main_cha.gif");
        console.log("1");

    }
    if (document.querySelector('.dialog').style.display == "none") {

    }


    /*A*/
    if ((event.keyCode == 65 || event.keyCode == 37) && y >= 930 && m < -45 && check == 0) {
        y -= 0.8;
        py = y + 'vw';
        
        character.style.setProperty('--moveset', py)
        collision.style.setProperty('--moveset', py)
        character.setAttribute("src", "./PNG update/Map1/character/main_cha_flip.gif")
    }

    else if ((event.keyCode == 65 || event.keyCode == 37) && y >= 0 && m < -1 && check == 0) {
        y -= 1;
        py = y + 'vw';
        m += 1;
        my = m + 'vw';
        map1m.style.setProperty('--map1move', my)
        collision.style.setProperty('--moveset', py);
        character.setAttribute("src", "./PNG update/Map1/character/main_cha_flip.gif")
    }
    else if ((event.keyCode == 65 || event.keyCode == 37) && check == 0) {
        if (y > 1) {
            y -= 0.8;
            py = y + 'vw';
            character.style.setProperty('--moveset', py);
            collision.style.setProperty('--moveset', py);

        }
        character.setAttribute("src", "./PNG update/Map1/character/main_cha_flip.gif")
    }

    if (m == 0 && y == 620) {
        document.getElementById("dia").style.display = "inline"
        check = 1
     
    }

    if (m < -17 && m > -17.6 && y == 911 && tv_show == 0) {
        check = 1
        document.getElementById("tvh").style.display = "inline"
        document.querySelector("video").play();

        setTimeout(hidetv, 11000)
        tv_show = 1

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
                document.querySelector(".pang_huay").style.display = "inline"

            }
        }

    }
})