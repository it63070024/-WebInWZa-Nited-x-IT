const bun = document.querySelector('.clickR') //ปุ่มที่จะใช้กด
const bun1 = document.querySelector('.clickL')
var walkRight = false; //เช็คเดินขวา
var walkLeft = false; //เช็คเดินซ้าย
let timer
            var y = 0;
            var m = 0;
            const character = document.querySelector(".c1")
            const character_img = document.querySelector(".cha")
            const map2m = document.getElementById("map1")

            const cha_offset = document.getElementById("c1");
            const check_offset = document.getElementById("check");
            const check_end = document.querySelector(".hai4");
            const women1_offset = document.querySelector(".women2");
            const chinese1_offset = document.querySelector(".chinese1");
            const phanghai1_offset = document.querySelector(".phanghai1");
            const lottery_offset = document.querySelector(".lottery");
            const ong_offset = document.querySelector(".ong")

            var front_back = 1;
            var turn = 0;
            var walk = 0;

            var check = 0
            var event_trigger = 0;

            var mid = check_offset.offsetLeft - cha_offset.offsetLeft;
            
            document.addEventListener('keydown', function(event) {

                if( check_end.offsetLeft - cha_offset.offsetLeft <= 10){
                    check = 1
                    character.style.animation = "fall 0.3s forwards";
                    setTimeout(newmap, 500);
                }
                
                mid = check_offset.offsetLeft - cha_offset.offsetLeft;
                /*D*/
                if ((event.keyCode == 68 || event.keyCode == 39) && (window.innerWidth * 0.20) + (cha_offset.offsetLeft) >= check_end.offsetLeft && cha_offset.offsetLeft <= check_end.offsetLeft && check == 0) {
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
                    map2m.style.setProperty('--map2move', my)
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
                if ((event.keyCode == 65 || event.keyCode == 37) && cha_offset.offsetLeft < check_end.offsetLeft && cha_offset.offsetLeft+(window.innerWidth *0.20) >= check_end.offsetLeft && check == 0) {
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
                    map2m.style.setProperty('--map2move', my)
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

                if (chinese1_offset.offsetLeft - cha_offset.offsetLeft <= 50 && event_trigger ==0) {
                    document.getElementById("c3").style.display = "inline"
                    document.querySelector(".map_text").style.display = "none"
                    event_trigger = 1
                    check = 1
                }

                if (women1_offset.offsetLeft - cha_offset.offsetLeft <= 50 && event_trigger ==1) {
                    Popup1()
                    event_trigger = 2
                }

                if (phanghai1_offset.offsetLeft - cha_offset.offsetLeft <= 50 && event_trigger ==2) {
                    document.getElementById("c5").style.display = "inline"
                    check = 1
                    event_trigger = 3
                }

                if (lottery_offset.offsetLeft - cha_offset.offsetLeft <= 10 && event_trigger ==3) {
                    Popup3()
                    event_trigger = 4
                }

                if (ong_offset.offsetLeft - cha_offset.offsetLeft <= 10 && event_trigger == 4) {
                    Popup4()
                    event_trigger = 5
                }
                
                
    })

    function newmap() {
        location.replace("map3.html")
      }

    function next_chat1() {
        document.getElementById("c3").style.display = "none"
        document.getElementById("c4").style.display = "inline"
    }

    function next_chat2() {
        document.getElementById("c5").style.display = "none"
        document.getElementById("c6").style.display = "inline"
    }

    function close_chat() {
        document.getElementById("c4").style.display = "none"
        document.getElementById("c7").style.display = "none"
        check = 0;

    }

    function next_chat3() {
        document.getElementById("c6").style.display = "none"
        document.getElementById("c7").style.display = "inline"

    }

    function closePopup() {
        document.getElementsByClassName("popup_wrap")[0].style.display = "none"
        document.getElementsByClassName("popup_wrap")[1].style.display = "none"
        document.getElementsByClassName("popup_wrap")[2].style.display = "none"
        document.getElementsByClassName("popup_wrap")[3].style.display = "none"

        check = 0
    }

    function Popup1() {
        document.getElementById("pl1").src = "./PNG update/Map2/pop_up_HuangHuay.svg"
        document.getElementById("p1").style.display = "flex"
        check = 1
    }

    function Popup2() {
        sessionStorage.hiddenCheck1 = true;
        document.getElementById("pl2").src = "./PNG update/Map2/hdms_JeanHong.svg"
        document.getElementById("p2").style.display = "flex"
        check = 1
    }

    function Popup3() {
        document.getElementById("pl3").src = "./PNG update/Map2/pop_up_Huay_ab.svg"
        document.getElementById("p3").style.display = "flex"
        check = 1
    }

    function Popup4() {
        document.getElementById("pl4").src = "./PNG update/Map2/pop_up_hai_random.svg"
        document.getElementById("p4").style.display = "flex"
        check = 1
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
        map2m.style.setProperty('--map2move', my)
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
    if (chinese1_offset.offsetLeft - cha_offset.offsetLeft <= 50 && event_trigger ==0) {
        document.getElementById("c3").style.display = "inline"
        document.querySelector(".map_text").style.display = "none"
        event_trigger = 1
        check = 1
    }

    if (women1_offset.offsetLeft - cha_offset.offsetLeft <= 50 && event_trigger ==1) {
        Popup1()
        event_trigger = 2
    }

    if (phanghai1_offset.offsetLeft - cha_offset.offsetLeft <= 50 && event_trigger ==2) {
        document.getElementById("c5").style.display = "inline"
        check = 1
        event_trigger = 3
    }

    if (lottery_offset.offsetLeft - cha_offset.offsetLeft <= 10 && event_trigger ==3) {
        Popup3()
        event_trigger = 4
    }

    if (ong_offset.offsetLeft - cha_offset.offsetLeft <= 10 && event_trigger == 4) {
        Popup4()
        event_trigger = 5
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
        map2m.style.setProperty('--map2move', my)
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
   }
else{
    bun.style.display = "none"
    bun1.style.display = "none"
}

//phonewalk
/////////////////////////////////////////////////////////////////////////////////////////