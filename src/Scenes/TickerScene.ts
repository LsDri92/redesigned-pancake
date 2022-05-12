import { Container, Sprite, Texture, TilingSprite, } from "pixi.js";
import { HEIGHT, WIDTH } from "..";
import { Bushes } from "../game/Bushes";
import { checkColission } from "../game/IHitbox";
import { Platform } from "../game/Platforms";
import { Player } from "../game/Player";
import { IUpdateable } from "../utils/IUpdateable";
//import { Keyboard } from "../utils/Keyboard";



export class TickerScene extends Container implements IUpdateable {

    private playerCat: Player;
    private platforms: Platform[];
    private world: Container;
    private bground: TilingSprite;
    private bushes: Bushes[];


    private timePasser: number = 0;



    constructor() {
        super();

        this.world = new Container();
        this.bground = new TilingSprite(Texture.from("backgroundimg"), WIDTH * 2, HEIGHT);


        this.addChild(this.bground);

        const house: Sprite = new Sprite
        (Texture.from("house"))
        house.position.y=280;
        house.scale.set(0.8);
        this.addChild(house);

        const tree: Sprite = new Sprite(
            Texture.from("tree")
        )
        tree.position.x=900;
        tree.position.y=420;
        this.addChild(tree);

        this.playerCat = new Player();
        this.playerCat.position.set(150, 200);
        this.world.addChild(this.playerCat);

        //platform

        this.bushes = []

        let bush = new Bushes;
        bush.position.set(150, 650);
        bush.scale.set(0.5);
        this.addChild(bush);
        this.bushes.push(bush);

        
        bush = new Bushes;
        bush.position.set(650, 650);
        bush.scale.set(0.5);
        this.addChild(bush);
        this.bushes.push(bush);

        this.platforms = [];


        let plat = new Platform;
        plat.x = 250;
        plat.y = 650;
        this.world.addChild(plat);
        this.platforms.push(plat);

        
        this.addChild(this.world);


    }
    update(deltaTime: number, _deltaFrame: number): void {
        this.timePasser += deltaTime;

        if (this.timePasser > 2000) {
            this.timePasser = 0;
            const plat = new Platform;
            plat.position.set(Math.random()*600, Math.random()*720)
            this.world.addChild(plat);
            this.platforms.push(plat);
        }

        

        this.playerCat.update(deltaTime); //update animation

        for (let platform of this.platforms) {

            const overlap = checkColission(this.playerCat, platform);
            if (overlap != null) {
                if (overlap.width < overlap.height) {
                    if (this.playerCat.x > platform.x) {
                        this.playerCat.x += overlap.width;
                    } else if ((this.playerCat.x < platform.x)) {
                        this.playerCat.x -= overlap.width;
                    }
                } else {
                    if (this.playerCat.y > platform.y) {
                        this.playerCat.y -= overlap.height;
                        this.playerCat.speed.y = 0;
                        this.playerCat.canJump = true;

                    } else if ((this.playerCat.y < platform.y)) {
                        this.playerCat.y += overlap.height;
                    }
                }
            }

            for (let bush of this.bushes) {
            const overlap1 = checkColission(this.playerCat, bush);
            if (overlap1 != null) {
                if (overlap1.width < overlap1.height) {
                    if (this.playerCat.x > bush.x) {
                        this.playerCat.x += overlap1.width;
                    } else if ((this.playerCat.x < bush.x)) {
                        this.playerCat.x -= overlap1.width;
                    }
                } else {
                    if (this.playerCat.y > bush.y) {
                        this.playerCat.y -= overlap1.height;
                        this.playerCat.speed.y = 0;
                        this.playerCat.canJump = true;

                    } else if ((this.playerCat.y < bush.y)) {
                        this.playerCat.y += overlap1.height;
                    }
                }
            }
        }
            if (this.platforms.length > 8){
                platform.destroy();
            }
        }

        this.platforms = this.platforms.filter((elem) => !elem.destroyed);
        console.log(this.platforms.length)
        

       


        /*   //limit horizontal
           if(this.playerCat.x > WIDTH) {
           //limit right
           this.playerCat.x = WIDTH;
       
       }
                else if (this.playerCat.x < 0) {
           //limit left
           this.playerCat.x = 0;
       }
       
       //limit vertical
       if (this.playerCat.y > HEIGHT) {
           this.playerCat.canJump = true;
           this.playerCat.y = HEIGHT;
       }*/



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

       // this.world.x = -this.playerCat.x * this.worldTransform.d + WIDTH / 3;
        this.bground.tilePosition.x = this.world.x * 0.2;
    }


}
