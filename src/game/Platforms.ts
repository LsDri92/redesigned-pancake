import { Container, Graphics, Rectangle, Sprite, Texture } from "pixi.js";
import { IHitbox } from "./IHitbox";

export class Platform extends Container implements IHitbox {

    private hitbox: Graphics;
    private platform: Sprite;

    constructor() {
        super();

        //anchor point
        const auxZero = new Graphics();
        auxZero.beginFill(0xFF00FF);
        auxZero.drawCircle(0, 0, 10);
        auxZero.endFill();
        auxZero.visible = false;

        //plataforma
        this.platform =new Sprite (
        Texture.from("longplatform")
        );
       

        this.hitbox = new Graphics();
        this.hitbox.beginFill(0xFF0000, 0.3);
        this.hitbox.drawRect(0, 0, this.platform.width,  this.platform.height);
        this.hitbox.endFill;
        this.hitbox.visible = false;


        this.addChild(this.platform);
        this.addChild(auxZero);
        this.platform.addChild(this.hitbox);
    }

    public getHitbox():Rectangle{
        return   this.hitbox.getBounds();
   
       }
   
}