const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')


c.imageSmoothingEnabled = false;

const protag = new Sprite({
    position:{
        x:scrollY,
        y:526
    },
    imageSrc:'./PNG update/Map1(ยาย)/ตัวละคร/ตัวเอก.gif',
    size:{
        width:100,
        height:100
    }
})

const background = new Sprite({
    position:{
        x:0,
        y:620
    },
    imageSrc:'./PNG update/Map1(ยาย)/ฉาก/ฉาก(แก้)/IMG_6017.PNG',
    size:{
        width:5000,
        height:200
    }
})

const city = new Sprite({
    position:{
        x:0,
        y:370
    },
    imageSrc:'./PNG update/Map1(ยาย)/ฉาก/ฉาก(แก้)/IMG_6018.PNG',
    size:{

        height:430,
        width:5000
    }
})

const sky = new Sprite({
    position:{
        x:0,
        y:150
    },
    imageSrc:'./PNG update/Map1(ยาย)/ฉาก/ฉาก(แก้)/IMG_6019.PNG',
    size:{
        width:canvas.width,
        height:180,
        width:5000
    }
})

const saifire = new Sprite({
    position:{
        x:0,
        y:420
    },
    imageSrc:'./PNG update/Map1(ยาย)/ฉาก/ฉาก(แก้)/IMG_6020.PNG',
    size:{
        width:canvas.width,
        height:200,
        width:5000
    }
})

function animated(){
    window.requestAnimationFrame(animated)
    c.fillStyle = '#CCFFFF'
    c.fillRect(0,0, canvas.width, canvas.height)
    
    city.update()

    saifire.update()
    background.update()
    sky.update()
    protag.update()


}

animated()

const scrollContainer = document.querySelector("main");
scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    console.log(scrollY)
});

window.onscroll =() => {
    console.log("the")
}