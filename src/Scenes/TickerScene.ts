import { AnimatedSprite, Container, Texture } from "pixi.js";
import { IUpdateable } from "../utils/IUpdateable";
import { Keyboard } from "../utils/Keyboard";



export class TickerScene extends Container implements IUpdateable {

  private jumpingCatFlash: AnimatedSprite; 

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
    this.jumpingCatFlash.animationSpeed = 0.2;
    this.jumpingCatFlash.scale.set(3);
    this.jumpingCatFlash.position.x = 40;
    this.jumpingCatFlash.position.y = 33;


    this.addChild(this.jumpingCatFlash);
  }
    update(_deltaTime: number, deltaFrame: number): void {
        this.jumpingCatFlash.update(deltaFrame);
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
        }
        

    }

}