import { Container,  Sprite } from "pixi.js";



export class Bushes extends Container  {

    

    constructor() {
        super();

        //bushes
        const spr = Sprite.from("bush");
        this.addChild(spr);

        

    }

    


}
