import {  Container, Texture, Text, Sprite } from "pixi.js";
import { HEIGHT, WIDTH } from "..";



export class Scene extends Container {

  

    constructor() {

      

        super();
        
        //background
        const bgroundimg: Sprite = new Sprite(
            Texture.from("backgroundimg")
        )
        bgroundimg.width = WIDTH,
        bgroundimg.height = HEIGHT

        
        this.addChild(bgroundimg);


            //plataforma
        const platform: Sprite = new Sprite(
            Texture.from("longplatform")
        )

            platform.scale.set(4);
            platform.position.x=30,
            platform.position.y=98,

            this.addChild(platform);
        // Text

        const myText: Text = new Text("Jumping Cat Flash", { fontSize: 25, fill: 0xFF0000, fontFamily: "Lucida Console" });
        this.addChild(myText);

            



    }

}