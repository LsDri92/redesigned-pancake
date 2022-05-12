import { Container, Graphics, Rectangle, Sprite } from "pixi.js";
import { IHitbox } from "./IHitbox";


export class Bushes extends Container implements IHitbox {

    private hitbox: Graphics;

    constructor() {
        super();

        //bushes
        const spr = Sprite.from("bush");
        this.addChild(spr);

        this.hitbox = new Graphics();
        this.hitbox.beginFill(0xFF0000, 0.3);
        this.hitbox.drawRect(0, 0, 250, 132);
        this.hitbox.endFill;

        this.addChild(this.hitbox);

    }

    public getHitbox():Rectangle{
        return   this.hitbox.getBounds();
   
       }
   


}
