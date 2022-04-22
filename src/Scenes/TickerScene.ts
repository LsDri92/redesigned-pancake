import { AnimatedSprite, Container, Graphics, Texture } from "pixi.js";
import { HEIGHT, WIDTH } from "..";
import { PhysicsContainer } from "../game/PhysicsContainer";
import { IUpdateable } from "../utils/IUpdateable";
import { Keyboard } from "../utils/Keyboard";



export class TickerScene extends Container implements IUpdateable {

    private jumpingCatFlash: AnimatedSprite;
    private physCat: PhysicsContainer;
    private runningCatFlash: AnimatedSprite;
    private walkingCatFlash: AnimatedSprite;
    private standingCatFlash: AnimatedSprite;


    constructor() {
        super();

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
        this.standingCatFlash.position.y = 450;

        //animated sprite walk

        this.walkingCatFlash = new AnimatedSprite(
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
            true

        );

        this.runningCatFlash.play();
        this.runningCatFlash.animationSpeed = 0.2;
        this.runningCatFlash.scale.set(3);
        this.runningCatFlash.position.x = 300;
        this.runningCatFlash.position.y = 250;



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

       

        this.physCat = new PhysicsContainer();
        this.physCat.speed.x = 300;
        this.physCat.speed.y = 100;
        this.physCat.acceleration.y = 10;
        this.addChild(this.physCat);

        const auxZero = new Graphics();
        auxZero.beginFill(0xFF00FF);
        auxZero.drawCircle(0, 0, 10);
        auxZero.endFill();

        this.addChild(this.runningCatFlash);
        this.addChild(this.standingCatFlash);
        this.addChild(this.walkingCatFlash);

        this.physCat.addChild(this.jumpingCatFlash);
        this.physCat.addChild(auxZero);
        
    }
    update(deltaTime: number, deltaFrame: number): void {
        this.jumpingCatFlash.update(deltaFrame); //update animation

        //craft deltatime in seconds
        const dt = deltaTime / 1000

        // update physics

        this.physCat.update(dt);

        //limit horizontal
        if (this.physCat.x > WIDTH) {
            //limit rigth
            this.physCat.x = WIDTH;
            this.physCat.speed.x = Math.abs(this.physCat.speed.x) * -1;
            this.physCat.scale.x = -1;
        }
         else if (this.physCat.x < 0)
        {
            //limit left
            this.physCat.x = 0;
            this.physCat.speed.x = Math.abs(this.physCat.speed.x);
            this.physCat.scale.x = 1;
        }

        //limit vertical
        if (this.physCat.y > HEIGHT) {
            this.physCat.y = HEIGHT;
            this.physCat.speed.y = -500 * Math.random();

        }



        if (Keyboard.state.get("KeyD")) {
            this.walkingCatFlash.x++;
            this.walkingCatFlash.scale.x= +3;
        } 


        if (Keyboard.state.get("KeyA")) {
            this.walkingCatFlash.x--;
            this.walkingCatFlash.scale.x = -3;
        }
        if (Keyboard.state.get("KeyS")) {
            this.runningCatFlash.y++;
        }
        if (Keyboard.state.get("KeyW")) {
            this.runningCatFlash.y--;
        }


    }
}
