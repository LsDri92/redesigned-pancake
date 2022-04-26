import { Container,  } from "pixi.js";
import { HEIGHT, WIDTH } from "..";
import { Player } from "../game/Player";
import { IUpdateable } from "../utils/IUpdateable";
//import { Keyboard } from "../utils/Keyboard";



export class TickerScene extends Container implements IUpdateable {

    private playerCat: Player;

    constructor() {
        super();

        this.playerCat = new Player();

       this.addChild(this.playerCat);

       

      

       
        
    }
    update(deltaTime: number, _deltaFrame: number): void {

        this.playerCat.update(deltaTime); //update animation


        //limit horizontal
        if (this.playerCat.x > WIDTH) {
            //limit right
            this.playerCat.x = WIDTH;
           
        }
         else if (this.playerCat.x < 0)
        {
            //limit left
            this.playerCat.x = 0;
        }

        //limit vertical
        if (this.playerCat.y > HEIGHT) {
            this.playerCat.canJump = true;
            this.playerCat.y = HEIGHT;
        }



       /* if (Keyboard.state.get("KeyD")) {
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
        }*/


    }
}
