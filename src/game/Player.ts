import { AnimatedSprite, Graphics, Rectangle, Texture } from "pixi.js";
import { Keyboard } from "../utils/Keyboard";
import { IHitbox } from "./IHitbox";
import { PhysicsContainer } from "./PhysicsContainer";

export class Player extends PhysicsContainer implements IHitbox {

   // private static readonly GRAVITY = 600;
    private static readonly MOVE_PLAYER = 220;


    public canJump = true;
    public life = 100;


    private runningCatFlash: AnimatedSprite;
    private physCat: PhysicsContainer;
    private hitbox: Graphics;
    /* private idleCat: AnimatedSprite;*/




    constructor() {
        super();

        

        //animated sprite run

        this.runningCatFlash = new AnimatedSprite(
            [
                Texture.from("runcat1"),
                Texture.from("runcat2"),
                Texture.from("runcat3"),
                Texture.from("runcat4"),
                Texture.from("runcat5"),
                Texture.from("runcat6"),
                Texture.from("runcat7"),
                Texture.from("runcat8"),
            ],
            false

        );

        this.runningCatFlash.play();
        this.runningCatFlash.anchor.set(0.5, 0.5);
        this.runningCatFlash.animationSpeed = 0.2;


        //physics cat
        this.physCat = new PhysicsContainer();
        this.physCat.speed.x = 300;
        this.physCat.speed.y = 100;
        this.physCat.acceleration.y = 10;
        this.addChild(this.physCat);

        //anchor point
        const auxZero = new Graphics();
        auxZero.beginFill(0xFF00FF);
        auxZero.drawCircle(0, 0, 5);
        auxZero.endFill();
        auxZero.visible = false;

        this.hitbox = new Graphics();
        this.hitbox.beginFill(0xFF00FF, 0.3);
        this.hitbox.drawRect(-20, -20, this.runningCatFlash.width, this.runningCatFlash.height);
        this.hitbox.endFill;
        this.hitbox.visible = false;




        this.addChild(this.runningCatFlash);
        this.runningCatFlash.addChild(auxZero);
        this.runningCatFlash.addChild(this.hitbox);



        //

        Keyboard.down.on("ArrowUp", this.jump, this);
    }

    public override destroy(options: any) {
        super.destroy(options);
        Keyboard.down.off("ArrowUp", this.jump);
    }




    public override update(deltaMS: number) {
        super.update(deltaMS / 1000);
        this.runningCatFlash.update(deltaMS / (1000 / 60));





        if (Keyboard.state.get("ArrowRight")) {
            this.speed.x = Player.MOVE_PLAYER;
            this.runningCatFlash.scale.x = 1;

        } else if (Keyboard.state.get("ArrowLeft")) {
            this.speed.x = -Player.MOVE_PLAYER;
            this.runningCatFlash.scale.x = -1;

        } else {
            this.speed.x = 0;
        }


        if (Keyboard.state.get("ArrowUp")) {
            this.jump();

        }
    }

    private jump() {
        if (this.canJump) {
            this.canJump = false;


            this.speed.y = -400;
        }
    }



    public getDamage() {
        this.life -= 1;
    }





    public getHitbox(): Rectangle {
        return this.hitbox.getBounds();

    }

}