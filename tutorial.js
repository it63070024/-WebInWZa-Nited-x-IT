var y = 18;
py = y + 'vw';
var m = 0;

const bun = document.querySelector('.clickR') //ปุ่มที่จะใช้กด
const bun1 = document.querySelector('.clickL')
var walkRight = false; //เช็คเดินขวา
var walkLeft = false; //เช็คเดินซ้าย
let timer
sessionStorage.isMuted = false

var front_back = 1;
var turn = 0;
var walk = 0;


var check = 0;
var collision = 0;
var check_text = 0;



const character = document.querySelector(".c1")
const character_img = document.querySelector(".cha")
const left = document.querySelector(".left")
const right = document.querySelector(".right")
const map1m = document.getElementById("map1")
character.style.setProperty('--moveset',py);

const cha_offset = document.getElementById("c1");
const check_offset = document.getElementById("check");
const check_end = document.querySelector(".door");

const cat_offset = document.querySelector(".cat");
const tv_offset = document.querySelector(".tv");

var mid = check_offset.offsetLeft - cha_offset.offsetLeft;

function closePopup() {
    document.getElementById("p1").style.display = "none"
    check = 0
}
document.addEventListener('keydown', function(event) {
    
    
    mid = check_offset.offsetLeft - cha_offset.offsetLeft;

    if ((cha_offset.offsetLeft >= check_end.offsetLeft)) {
        check=1;
        setTimeout(newmap, 500);
    }

    if((event.keyCode == 68 || event.keyCode == 39)){
        right.setAttribute("src", "./PNG update/tutorial/right press.png")
        right.style.width = "2.7vw"
    }
    if((event.keyCode == 65 || event.keyCode == 37)){
        left.setAttribute("src", "./PNG update/tutorial/left press.png")
        left.style.width = "2.7vw"
    }
    /*D*/
    if ((event.keyCode == 68 || event.keyCode == 39) && (window.innerWidth * 0.50) + (cha_offset.offsetLeft) >= check_end.offsetLeft && cha_offset.offsetLeft <= check_end.offsetLeft && check == 0) {
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
    if ((event.keyCode == 65 || event.keyCode == 37) && cha_offset.offsetLeft < check_end.offsetLeft && cha_offset.offsetLeft+(window.innerWidth *0.50) >= check_end.offsetLeft && check == 0) {
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

    if(cat_offset.offsetLeft - cha_offset.offsetLeft <= 150 && cha_offset.offsetLeft - cat_offset.offsetLeft <= 100){
        document.querySelector(".meow").style.opacity = 100;
    }
    else{
        document.querySelector(".meow").style.opacity = 0;
    }
    
    if(tv_offset.offsetLeft - cha_offset.offsetLeft <= -150 && tv_offset.offsetLeft - cha_offset.offsetLeft >= -160){
        document.getElementById("p1").style.display = "flex"
        check = 1
    }
    
})

document.addEventListener('keyup', function(event){
    if((event.keyCode == 68 || event.keyCode == 39)){
        right.setAttribute("src", "./PNG update/tutorial/right.png")
        right.style.width = "3vw"
        character_img.setAttribute("src", "./PNG update/Map1/character/main_cha.gif")
    } 
    else if((event.keyCode == 65 || event.keyCode == 37)){
        left.setAttribute("src", "./PNG update/tutorial/left.png")
        left.style.width = "3vw"
        character_img.setAttribute("src", "./PNG update/Map1/character/main_cha_flip.gif")
    }  

})
    function newmap() {
        location.replace("map1.html")
      }

    document.addEventListener('contextmenu', event => event.preventDefault()); //Right Click Disabled