import { AnimatedSprite, Container, Graphics, Texture, Text, NineSlicePlane, Sprite } from "pixi.js";


export class Scene extends Container {

    constructor() {

        super();

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

        const finishText: Text = new Text("Level complete", {fontSize: 20, fill: 0x000000, fontFamily: "Tahoma"});
        this.addChild(finishText);
        finishText.position.x = 485;
        finishText.position.y = 82;

        const completeCat: AnimatedSprite = new AnimatedSprite(
            [
                Texture.from("lvlcompletecat1"),
                Texture.from("lvlcompletecat2"),
                Texture.from("lvlcompletecat3"),
                Texture.from("lvlcompletecat4")
                
            ], 
            true
    
        );
        completeCat.play();
        completeCat.animationSpeed = 0.09;
        completeCat.scale.set(6);
        
        completeCat.position.x = 655;
        completeCat.position.y = 140;

        this.addChild(completeCat);
      

        const time: Sprite = new Sprite(
            Texture.from("textbox")
        )

        time.width = 150;
        time.height = 50;
        time.position.x = 520;
        time.position.y = 150;

        this.addChild(time);

        const timeText: Text = new Text("Time:", {fontSize: 22, fill: 0x000000, fontFamily: "Calibri"});
        this.addChild(timeText);
        timeText.position.x = 525;
        timeText.position.y = 153;

        const points: Sprite = new Sprite(
            Texture.from("textbox")
        )

        points.width = 150;
        points.height = 50;
        points.position.x = 520;
        points.position.y = 250;

        this.addChild(points);

        const pointsText: Text = new Text("Points:", {fontSize: 22, fill: 0x000000, fontFamily: "Calibri"});
        this.addChild(pointsText);
        pointsText.position.x = 525;
        pointsText.position.y = 253;




        const completeBar: Sprite = new Sprite(
            Texture.from("completebar")
        )

        completeBar.width = 250;
        completeBar.height = 30;
        completeBar.position.x = 520;
        completeBar.position.y = 350;
        

        this.addChild(completeBar);

        const progressText: Text = new Text ("Progress", {fontSize: 17, fill: 0x404040, fontFamily: "Segoe UI Historic"});
        this.addChild(progressText);
        progressText.position.x = 610; 
        progressText.position.y = 355;   


        const nextButton: Sprite = new Sprite(
            Texture.from("greenbutton")
        )
        nextButton.scale.set(0.2);
        nextButton.position.x = 760;
        nextButton.position.y = 420;

            this.addChild(nextButton);

            const exitButton: Sprite = new Sprite(
                Texture.from("exitbutton")
            )
            exitButton.scale.set(0.2);
            exitButton.position.x = 500;
            exitButton.position.y = 420;
    
                this.addChild(exitButton);
        




    }
}