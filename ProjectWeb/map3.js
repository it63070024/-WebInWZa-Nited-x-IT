
var y = 18;
py = y + 'vw';
var m = 0;
const character = document.querySelector(".c1")
const character_img = document.querySelector(".cha")
const map3m = document.getElementById("map3")
character.style.setProperty('--moveset', py);
const cha_offset = document.getElementById("c1");
const check_offset = document.getElementById("check");
const check_end = document.querySelector(".train");
var mid = check_offset.offsetLeft - cha_offset.offsetLeft;
var check = 0
document.addEventListener('keydown', function (event) {

    if ((check_end.offsetLeft - cha_offset.offsetLeft <= -15)) {
        newmap();
    }

    /*D*/

    mid = check_offset.offsetLeft - cha_offset.offsetLeft;

    if ((event.keyCode == 68 || event.keyCode == 39) && (window.innerWidth * 0.27) + (cha_offset.offsetLeft) >= check_end.offsetLeft && cha_offset.offsetLeft <= check_end.offsetLeft && check == 0) {
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
        map3m.style.setProperty('--map3move', my)
        character.style.setProperty('--moveset', py);
        character_img.setAttribute("src", "./PNG update/Map1/character/main_cha.gif")
        console.log("3")
    }




    /*A*/
    if ((event.keyCode == 65 || event.keyCode == 37) && cha_offset.offsetLeft < check_end.offsetLeft && cha_offset.offsetLeft + (window.innerWidth * 0.27) >= check_end.offsetLeft && check == 0) {
        y -= 0.8;
        py = y + 'vw';

        character.style.setProperty('--moveset', py)
        character_img.setAttribute("src", "./PNG update/Map1/character/main_cha_flip.gif")
        console.log("4")
    }

    else if ((event.keyCode == 65 || event.keyCode == 37) && y >= 18 && m < -1 && check == 0) {
        y -= 0.8;
        py = y + 'vw';
        m += 0.8;
        my = m + 'vw';
        map3m.style.setProperty('--map3move', my)
        character.style.setProperty('--moveset', py);
        character_img.setAttribute("src", "./PNG update/Map1/character/main_cha_flip.gif")
        console.log("5")
    }
    else if ((event.keyCode == 65 || event.keyCode == 37) && y > 19 && check == 0) {

        y -= 0.8;
        py = y + 'vw';
        character.style.setProperty('--moveset', py);


        character_img.setAttribute("src", "./PNG update/Map1/character/main_cha_flip.gif")
        console.log("6")
    }


})


function newmap() {
    location.replace("map4.html")
}

