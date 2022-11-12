var y = 6;
py = y+'%';
var m = 0;
const bun = document.querySelector('.clickR') //ปุ่มที่จะใช้กด
const bun1 = document.querySelector('.clickL')
var walkRight = false; //เช็คเดินขวา
var walkLeft = false; //เช็คเดินซ้าย
let timer
sessionStorage.isMuted = false

const character = document.querySelector(".c1")
const character_img = document.querySelector(".cha")
const left = document.querySelector(".left")
const right = document.querySelector(".right")
const map2m = document.getElementById("map1")
character.style.setProperty('--moveset',py);
const cha_offset = document.getElementById("c1");
const check_offset = document.getElementById("check");

document.addEventListener('keydown', function(event) {
    
    if((y>=88)){
      setTimeout(newmap, 3000);
      
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
    if((event.keyCode == 68 || event.keyCode == 39) && y<88){
        y += 0.7;
        py = y+'vw';
        character.style.setProperty('--moveset',py);
        character_img.setAttribute("src", "./PNG update/Map1/character/main_cha.gif")
    }
     

    else if((event.keyCode == 68 || event.keyCode == 39) && y < 88) { 
        y += 0.7;
        py = y+'vw';
        character.style.setProperty('--moveset',py);
        character_img.setAttribute("src", "./PNG update/Map1/character/main_cha.gif")
    
}       


    
    /*A*/
    if((event.keyCode == 65 || event.keyCode == 37) && y >= 930 && m<-55){
        y -= 0.7;
        py = y+'vw';
        character.style.setProperty('--moveset',py)
        character_img.setAttribute("src", "./PNG update/Map1/character/main_cha_flip.gif")
        console.log("1")
    }
 
    else if((event.keyCode == 65 || event.keyCode == 37)) {
        if (y > 1) {
            y -= 0.7;
                py = y+'vw';
                character.style.setProperty('--moveset',py);
                character_img.setAttribute("src", "./PNG update/Map1/character/main_cha_flip.gif")    
            
        }
            
    }

    if (m==0 && y==620) {
        y+=1; /* เพิ่ม y 1 เพื่อออก if นี้ */
    }

    
})

document.addEventListener('keyup', function(event){
    if((event.keyCode == 68 || event.keyCode == 39)){
        right.setAttribute("src", "./PNG update/tutorial/right.png")
        right.style.width = "3vw"
    } 
    else if((event.keyCode == 65 || event.keyCode == 37)){
        left.setAttribute("src", "./PNG update/tutorial/left.png")
        left.style.width = "3vw"
    }  
})
    function newmap() {
        location.replace("map1.html")
      }

