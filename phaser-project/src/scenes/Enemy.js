import Phaser from '../lib/phaser.js'

export default class Enemy extends Phaser.Physics.Arcade.Sprite{

    constructor(scene, x, y, texture)
    {
        super (scene,x,y,texture)
        this.scene = scene
    }
    spawn(){
        const positionX = Phaser.Math.Between(70,410)
        this.setPosition(positionX, -50)
        this.setActive(true)
        this.setVisible(true)
        this.setDepth(0.5)
        this.setScale(0.6)
    }
    die(){
       this.destroy()
    }
    update(time){ 
        this.setVelocityY(100)
        if(this.y > 625){
            this.die()
        }
    }
}

