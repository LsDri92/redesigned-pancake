import { Container, Sprite } from "pixi.js";

export class Colission extends Container {

    constructor() {
        super();
        const rbf1: Sprite = Sprite.from("RBF1");
        const mclaren: Sprite = Sprite.from("Mclaren");

        mclaren.x = 400;
        mclaren.y = 600;
        mclaren.angle = -35;

        this.addChild(rbf1);
        this.addChild(mclaren);

    }

}