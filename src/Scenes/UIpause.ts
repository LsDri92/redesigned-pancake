import { Container, Sprite, Text, Texture } from "pixi.js";

export class UIpause extends Container {

    constructor() {
        super();

   
        const cartelpause = new Sprite(
            Texture.from("cartelpause"),
        )
        this.addChild(cartelpause);
            cartelpause.scale.set(0.5);
            cartelpause.height=160;
            cartelpause.position.x= 450;
            cartelpause.position.y= 250;
        
            const pausewindow = new Sprite(
                Texture.from("pausewindow"),
            )
            
            cartelpause.addChild(pausewindow);
            pausewindow.height=50;
            pausewindow.width=250;
            pausewindow.position.x=260;
            pausewindow.position.y=30;

            const pause: Text = new Text("Pause", {fontSize: 20, fill: 0x000000, fontFamily: "Tahoma" });
            pausewindow.addChild(pause);
            pause.height=90;
            pause.position.x=25;
                
            const musicOnButton = new Sprite(
                Texture.from("musicOn")
            )

            cartelpause.addChild(musicOnButton);
            musicOnButton.position.x = 150;
            musicOnButton.position.y = 90;
            musicOnButton.scale.set(2);
            musicOnButton.width= 150;

            const returnGameButton = new Sprite(
                Texture.from("play")
            )
            cartelpause.addChild(returnGameButton);
            returnGameButton.position.x = 500;
            returnGameButton.position.y = 90;
            returnGameButton.scale.set(2);
            returnGameButton.width= 150;

    }
}