import { Container, Sprite, Text, Texture } from "pixi.js";
import { Button } from "../ui/button";

export class UIpause extends Container {

    private musicButton: Button

    private returnGameButton: Button

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
                
            this.musicButton = new Button(
                Texture.from("musicOn"), 
                Texture.from("musicOff"),
                Texture.from("musicOn"),
                
                );
            

           this.musicButton.on("buttonclick!", this.onButtonClick, this);
            this.musicButton.position.x = 150;
            this.musicButton.position.y = 90;
            this.musicButton.scale.set(2);
            this.musicButton.width= 150;
            
            
            cartelpause.addChild(this.musicButton);


            this.returnGameButton = new Button(
                Texture.from("play"),
                Texture.from("playon"),
                Texture.from("play"),
                
            )

            this.returnGameButton.on("buttonclick!", this.onButtonClick, this);
            this.returnGameButton.position.x = 500;
            this.returnGameButton.position.y = 90;
            this.returnGameButton.scale.set(2);
            this.returnGameButton.width= 150;

            cartelpause.addChild(this.returnGameButton);

            document.addEventListener("keydown", this.onKeyDown.bind(this));

    }

    private onKeyDown(e:KeyboardEvent):void {
        console.log("key pressed!", e.code);
    }

    private onButtonClick():void{
    console.log("you click me!", this);
    }

  
}