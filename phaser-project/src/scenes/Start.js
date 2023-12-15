import Phaser from '../lib/phaser.js'

export default class Start extends Phaser.Scene{

    constructor()
	{
		super('start')
        this.playButton=undefined
    }
    
    preload()
    {
        this.load.image('bg', 'assets/background_sky.png')
        this.load.image('player', 'assets/player_4.png')
        this.load.image('btn', 'assets/start-button2.png')
        this.load.image('title', 'assets/title2.png')
    }

    create()
    {
        this.add.image(240,320,'bg')
        this.player = this.physics.add.sprite(240,200,'player')
        this.title = this.physics.add.sprite(240,300,'title').setDepth(1).setScale(0.5)
        this.add.text(120,350, "Created by Ms Balqis").setDepth(1)
        this.startBtn = this.add.image(240,420, 'btn').setInteractive().setDepth(1)
        this.startBtn.on('pointerdown', () => {
            this.scene.start('shooter-space')
        }, this)
    }
    

}
