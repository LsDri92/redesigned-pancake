import { AnimatedSprite, Graphics, Rectangle, Texture } from "pixi.js";
import { Keyboard } from "../utils/Keyboard";
import { IHitbox } from "./IHitbox";
import { PhysicsContainer } from "./PhysicsContainer";

export class Player extends PhysicsContainer implements IHitbox {

    private static readonly GRAVITY = 600;
    private static readonly MOVE_PLAYER = 220;

    public canJump = true;


    private runningCatFlash: AnimatedSprite;
    /*private walkingCatFlash: AnimatedSprite
    private standingCatFlash: AnimatedSprite
    private jumpingCatFlash: AnimatedSprite*/
    //private physCat: PhysicsContainer;
    private hitbox: Graphics;



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
        this.runningCatFlash.anchor.set(0.5, 0.6);
        this.runningCatFlash.animationSpeed = 0.2;
        



        //animated sprite walk

        /* this.walkingCatFlash = new AnimatedSprite(
            [
                Texture.from("walkcat1"),
                Texture.from("walkcat2"),
                Texture.from("walkcat3"),
                Texture.from("walkcat4"),
                Texture.from("walkcat5"),
                Texture.from("walkcat6"),
                Texture.from("walkcat7"),
                Texture.from("walkcat8"),
            ],
            true
        );

        this.walkingCatFlash.play();
        this.walkingCatFlash.anchor.set(0.5);
        this.walkingCatFlash.animationSpeed = 0.2;
        this.walkingCatFlash.scale.set(3);
        this.walkingCatFlash.position.x = 400;
        this.walkingCatFlash.position.y = 350;

         //Animated Sprite jump

         this.jumpingCatFlash = new AnimatedSprite(
            [
                Texture.from("catjump1"),
                Texture.from("catjump2"),
                Texture.from("catjump3"),
                Texture.from("catjump4"),
                Texture.from("catjump5"),
                Texture.from("catjump6"),
                Texture.from("catjump7")

            ],
            false

        );
        this.jumpingCatFlash.play();
        this.jumpingCatFlash.anchor.set(1.2);
        this.jumpingCatFlash.animationSpeed = 0.2;
        this.jumpingCatFlash.scale.set(3);
        this.jumpingCatFlash.position.x = 45;
        this.jumpingCatFlash.position.y = 30;


         //animated sprite stand

         this.standingCatFlash = new AnimatedSprite(

            [
                Texture.from("standcat1"),
                Texture.from("standcat2"),
                Texture.from("standcat3"),
                Texture.from("standcat4"),
            ],
            true
        );

        this.standingCatFlash.play();
        this.standingCatFlash.animationSpeed = 0.2;
        this.standingCatFlash.scale.set(3);
        this.standingCatFlash.position.x = 500;
        this.standingCatFlash.position.y = 450;*/


        /*//physics cat
         this.physCat = new PhysicsContainer();
         this.physCat.speed.x = 300;
         this.physCat.speed.y = 100;
         this.physCat.acceleration.y = 10;
         this.addChild(this.physCat);*/

        //anchor point
        const auxZero = new Graphics();
        auxZero.beginFill(0xFF00FF);
        auxZero.drawCircle(0, 0, 5);
        auxZero.endFill();

        this.hitbox = new Graphics();
        this.hitbox.beginFill(0xFF00FF, 0.3);
        this.hitbox.drawRect(0, 0, 1, 1);
        this.hitbox.endFill;
     



        this.addChild(this.runningCatFlash);
        this.addChild(auxZero);
        this.runningCatFlash.addChild(this.hitbox);



        this.acceleration.y = Player.GRAVITY;

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
            this.speed.y = -300;
        }
    }

    public getHitbox(): Rectangle {
        return this.hitbox.getBounds();

    }

}