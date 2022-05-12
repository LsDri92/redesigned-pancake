import {  Container, Texture, Sprite } from "pixi.js";
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

        
        

      
        
        // Text

        /*const myText: Text = new Text("Jumping Cat Flash", { fontSize: 25, fill: 0xFF0000, fontFamily: "Lucida Console" });
        */

            



    }

}