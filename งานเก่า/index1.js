const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')


c.imageSmoothingEnabled = false;


const protag = new Sprite({
    position:{
        x:0,
        y:94
    },
    imageSrc:'./PNG update/Map1(ยาย)/ตัวละคร/ตัวเอก.gif',
    size:{
        width:32,
        height:32
    }
})


const map2 = new Sprite({
    position:{
        x:0,
        y:-15
    },
    imageSrc:'./PNG update/ฉากสำหรับ Ae/2.png',
    size:{

        width:783,
        height:204
    }
})

const popup1 = new Sprite({
    position:{
        x:0,
        y:-50
    },
    imageSrc:'./PNG update/Pop up _ effect/chat.png',
    size:{

        width:0,
        height:0
    }
})

function animated(){
    window.requestAnimationFrame(animated)
    c.fillStyle = '#CCFFFF'
    c.fillRect(0,0, canvas.width, canvas.height)
    map2.update()
    popup1.update()
    protag.update()

   


}

animated()

var x = 0
var cancel = 0
canvas.addEventListener('click', clickcancelpop, false);
function clickcancelpop() {
    popup1.size.width = 0
    popup1.size.height = 0
    cancel = 1
}



document.addEventListener('keydown', function(event) {
    if(protag.position.x==126 && map2.position.x ==-87){
        cancel = 0
        console.log("test")
    }

    if(protag.position.x==126 && map2.position.x==-90 && cancel != 1){
        popup1.size.width = 267
        popup1.size.height = 167
        console.log("pop")
        
    }

    else if(event.keyCode == 68) { /*D*/
        if(protag.position.x <= 125){
            protag.position.x = protag.position.x += 3;
            console.log("1")
        }
        else if(map2.position.x <= -483 && protag.position.x <= 255){
            protag.position.x = protag.position.x += 3;
            console.log("2")
        }
        else if(map2.position.x > -483){
            map2.position.x = map2.position.x -= 3;
            console.log("3")
            x += 1

        }

    }
    else if(event.keyCode == 65) { /*A*/
    
        if(map2.position.x == 0 && protag.position.x != 0){
            protag.position.x = protag.position.x -= 3;
            console.log("5")
        }
        
        else if(protag.position.x >= 126){
            protag.position.x = protag.position.x -= 3;
            console.log("4")
   
        }
       
        else if(protag.position.x <= 126 && protag.position.x != 0){
            map2.position.x = map2.position.x += 3;
            console.log("6")
   
        }
        
        
    }
});
