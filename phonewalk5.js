const bun = document.querySelector('.click') //ปุ่มที่จะใช้กด
var walkRight = false; //เช็คเดินขวา
var walkLeft = false; //เช็คเดินซ้าย
let timer

function timeoutClearRight() {
    clearTimeout(timer);
    walkRight= false
}

function walkingRight(){
    walkRight = true
    if((walkRight && !walkLeft) && m<-41 && y<1571){
        y += 10;
        py = y+'%';
        character.style.setProperty('--moveset',py);
        character.setAttribute("src", "./PNG update/Map1/character/main_cha.gif")
    }
     

    else if((walkRight && !walkLeft) && y < 910) { 
        y += 10;
        py = y+'%';
        character.style.setProperty('--moveset',py);
        character.setAttribute("src", "./PNG update/Map1/character/main_cha.gif")
    
}       
    else if((walkRight && !walkLeft) && y >= 910 && y < 1571){
        m -= 0.3;
        my = m+'%';
        map2m.style.setProperty('--map2move', my)
        character.setAttribute("src", "./PNG update/Map1/character/main_cha.gif")
    }
    timer = setTimeout(walkingRight,33);
}

bun.addEventListener('mousedown', walkingRight) //ตั้ง eventlisttener ที่ปุ่มกด
bun.addEventListener('mouseup', timeoutClearRight);
bun.addEventListener('mouseleave', timeoutClearRight);