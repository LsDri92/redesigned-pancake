import { AnimatedSprite, Container, Texture, Text, Sprite } from "pixi.js";


export class Scene extends Container {

    constructor() {

        super();
        
        //background
        const bgroundimg: Sprite = new Sprite(
            Texture.from("backgroundimg")
        )
        bgroundimg.width = 1280,
        bgroundimg.height = 720

        
        this.addChild(bgroundimg);
        
        //jumpingCatFlash

        const jumpingCatFlash: AnimatedSprite = new AnimatedSprite(
            [
                Texture.from("catjump1"),
                Texture.from("catjump2"),
                Texture.from("catjump3"),
                Texture.from("catjump4"),
                Texture.from("catjump5"),
                Texture.from("catjump6"),
                Texture.from("catjump7")

            ],
            true

        );
        jumpingCatFlash.play();
        jumpingCatFlash.animationSpeed = 0.2;
        jumpingCatFlash.scale.set(3);
        jumpingCatFlash.position.x = 40;
        jumpingCatFlash.position.y = 33;


        this.addChild(jumpingCatFlash);

            //plataforma
        const platform: Sprite = new Sprite(
            Texture.from("longplatform")
        )

            platform.scale.set(4);
            platform.position.x=30,
            platform.position.y=98,

            this.addChild(platform);
        // Text

        const myText: Text = new Text("Jumping Cat Flash", { fontSize: 25, fill: 0xFF0000, fontFamily: "Lucida Console" });
        this.addChild(myText);





    }
}