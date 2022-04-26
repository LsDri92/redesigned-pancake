import { Container, Graphics, Sprite } from "pixi.js";

export class Platform extends Container {

    private hitbox: Graphics;

    constructor() {
        super();

        //plataforma
        const spr = Sprite.from("longplatform");
        this.addChild(spr);

        this.hitbox = new Graphics();
        this.hitbox.beginFill(0xFF0000, 0.3);
        this.hitbox.drawRect(0, 0, 32, 16);
        this.hitbox.endFill;

        this.addChild(this.hitbox);
       


    }
}