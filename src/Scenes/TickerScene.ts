import { AnimatedSprite, Container, Graphics, Texture } from "pixi.js";
import { HEIGHT, WIDTH } from "..";
import { PhysicsContainer } from "../game/PhysicsContainer";
import { IUpdateable } from "../utils/IUpdateable";
//import { Keyboard } from "../utils/Keyboard";



export class TickerScene extends Container implements IUpdateable {

    private jumpingCatFlash: AnimatedSprite; 
    private physCat: PhysicsContainer;


  constructor()
  {
      super();

      //Animated Sprite
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
    this.jumpingCatFlash.position.x = 40;
    this.jumpingCatFlash.position.y = 33;


    

    this.physCat = new PhysicsContainer();
    this.physCat.speed.x = 150;
    this.physCat.speed.y = 0;
    this.physCat.acceleration.y = 250;
    this.addChild(this.physCat);

    const auxZero = new Graphics();
    auxZero.beginFill(0xFF00FF);
    auxZero.drawCircle(0,0,10);
    auxZero.endFill();


    this.physCat.addChild(this.jumpingCatFlash);
    this.physCat.addChild(auxZero);
  }
    update(deltaTime: number, deltaFrame: number): void {
        this.jumpingCatFlash.update(deltaFrame); //update animation

        //craft deltatime in seconds
        const dt = deltaTime /1000

        // update physics

        this.physCat.update(dt);

        //limit horizontal
        if (this.physCat.x  > WIDTH)
        {
            //limit rigth
            this.physCat.x = WIDTH;
            this.physCat.speed.x = Math.abs(this.physCat.speed.x)*-1;
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
        if (this.physCat.y > HEIGHT)
        {
            this.physCat.y = HEIGHT;
            this.physCat.speed.y = -500 * Math.random();

        }

      

        /*
        if (Keyboard.state.get("KeyD")){
            this.jumpingCatFlash.x++;
        }
        if (Keyboard.state.get("KeyA")){
            this.jumpingCatFlash.x--;
        }
        if (Keyboard.state.get("KeyS")){
            this.jumpingCatFlash.y++;
        }
        if (Keyboard.state.get("KeyW")){
            this.jumpingCatFlash.y--;
        }*/
        

    }

}