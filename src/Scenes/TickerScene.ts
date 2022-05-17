import { Container, Sprite, Texture, TilingSprite, } from "pixi.js";
import { HEIGHT, WIDTH } from "..";
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
    private floor: TilingSprite;
    private middle: Sprite;
    private middle1: Sprite;
    



    constructor() {
        super();

        this.world = new Container();
        this.bground = new TilingSprite(Texture.from("backgroundimg"), WIDTH * 2, HEIGHT);
        this.floor = new TilingSprite(Texture.from("floor"), WIDTH * 6)
        this.floor.y = 705;

        this.middle = new Sprite(Texture.from("middle"));
        this.middle.position.set(-330, 450);
        this.middle1 = new Sprite(Texture.from("middle"));
        this.middle1.position.set(-630, 450);

        this.addChild(this.bground);

        const house: Sprite = new Sprite
            (Texture.from("house"))
        house.position.y = 275;
        house.scale.set(0.8);
        this.world.addChild(house);

        const tree: Sprite = new Sprite(
            Texture.from("tree")
        )
        tree.position.x = 900;
        tree.position.y = 420;
        this.world.addChild(tree);



        this.playerCat = new Player();
        this.playerCat.position.set(150, 705);


        //platform



        this.platforms = [];


        let plat = new Platform;
        plat.x = 1250;
        plat.y = 650;
        this.world.addChild(plat);
        this.platforms.push(plat);

        plat = new Platform;
        plat.x = 1450;
        plat.y = 520;
        this.world.addChild(plat);
        this.platforms.push(plat);

        plat = new Platform;
        plat.x = 1850;
        plat.y = 620;
        this.world.addChild(plat);
        this.platforms.push(plat);


        this.world.addChild(this.middle);
        this.world.addChild(this.middle1);

        this.world.addChild(this.floor);
        this.world.addChild(this.playerCat);
        this.addChild(this.world);


    }
    update(deltaTime: number, _deltaFrame: number): void {



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
                    if (this.playerCat.y < platform.y) {
                        this.playerCat.y -= overlap.height;
                        this.playerCat.speed.y = 0;
                        this.playerCat.canJump = true;

                    } else if ((this.playerCat.y > platform.y)) {
                        this.playerCat.y += overlap.height;
                    }
                }
            }




        }



        //limit vertical
        if (this.playerCat.y > 690) {
            this.playerCat.canJump = true;
            this.playerCat.y = 690;
        }





        this.world.x = -this.playerCat.x * this.worldTransform.d + WIDTH / 3;
        this.bground.tilePosition.x = this.world.x * 0.2;
       
        if (this.playerCat.x < 0)
            this.playerCat.x = 0;

    }


}
