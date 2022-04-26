import {  Container, Texture, Text, Sprite } from "pixi.js";
import { HEIGHT, WIDTH } from "..";
import { Platform } from "../game/Platforms";



export class Scene extends Container {

  private platform1: Platform;
  private platform2: Platform;

    constructor() {

      

        super();
        
        //background
        const bgroundimg: Sprite = new Sprite(
            Texture.from("backgroundimg")
        )
        bgroundimg.width = WIDTH,
        bgroundimg.height = HEIGHT

        
        this.addChild(bgroundimg);

        //platform
        this.platform1 = new Platform;
        this.platform1.scale.set(3);
        this.platform1.x = 250;
        this.platform1.y = 650;
        
        this.platform2 = new Platform;
        this.platform2.scale.set(3);
        this.platform2.x = 550;
        this.platform2.y = 300;


        this.addChild(this.platform1);
        this.addChild(this.platform2);

        
        // Text

        const myText: Text = new Text("Jumping Cat Flash", { fontSize: 25, fill: 0xFF0000, fontFamily: "Lucida Console" });
        this.addChild(myText);

            



    }

}