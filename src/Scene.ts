import { AnimatedSprite, Container, Graphics, Texture, Text, NineSlicePlane, Sprite } from "pixi.js";
import { Colission } from "./Colission";

export class Scene extends Container {

    //Racing cars
    constructor() {

        super();

        const inminentColission: Colission = new Colission();	

	inminentColission.scale.set(0.3);
	inminentColission.position.set(640, 320);



	//this.addChild(inminentColission);

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
    jumpingCatFlash.scale.set(5)
    

    this.addChild(jumpingCatFlash);

    //Graphics

    const myGraph: Graphics = new Graphics();

        myGraph.lineStyle({color: 0x069728, width: 8, alpha:1});
        myGraph.beginFill(0x734501,1);
        myGraph.drawRect(0,0,200,100);
        

        myGraph.position.set(0, 115);

        this.addChild(myGraph);

        // Text

        const myText: Text = new Text("Jumping Cat Flash", {fontSize: 30, fill: 0xFF0000, fontFamily: "Lucida Console"});
        this.addChild(myText);

        // nine-slice plane
        //const panel:Sprite = Sprite.from("panel");

        const panel = new NineSlicePlane(
            Texture.from("panel"),
            35,35,35,35
            );
        this.addChild(panel);
        panel.width = 350;
        panel.height = 400;
        panel.position.x = 470;
        panel.position.y = 80;

        const finishText: Text = new Text("Level complete", {fontSize: 20, fill: 0xFF0000, fontFamily: "Tahoma"});
        this.addChild(finishText);
        finishText.position.x = 485;
        finishText.position.y = 82;

        const completeBar: Sprite = new Sprite(
            Texture.from("completebar")
        )

        completeBar.width = 250;
        completeBar.height = 30;
        completeBar.position.x = 520;
        completeBar.position.y = 350;
        

        this.addChild(completeBar);

        const nextButton: Sprite = new Sprite(
            Texture.from("greenbutton")
        )
        nextButton.scale.set(1.5);
        nextButton.position.x = 760;
        nextButton.position.y = 420;

            this.addChild(nextButton);
        




    }
}