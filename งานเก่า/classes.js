class Sprite{
    constructor({position, imageSrc, size}){
        this.position = position
        this.size = size
        this.image = new Image()
        this.image.src = imageSrc
    }

    draw(){
        c.drawImage(this.image, this.position.x, this.position.y, this.size.width, this.size.height)
    }

    update(){
        this.draw()
    }
}
