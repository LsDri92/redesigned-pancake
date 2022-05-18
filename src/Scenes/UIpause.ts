import { Container, Sprite, State, Text, Texture } from "pixi.js";
import { Button } from "../ui/button";
import { ToggleButton } from "../ui/toggleButton";


export class UIpause extends Container {


    private returnGameButton: Button;
    private musicButtonToggle: ToggleButton;



    constructor() {
        super();


        const cartelpause = new Sprite(
            Texture.from("cartelpause"),
        )
        this.addChild(cartelpause);
        cartelpause.scale.set(0.5);
        cartelpause.height = 160;
        cartelpause.position.x = 450;
        cartelpause.position.y = 250;

        const pausewindow = new Sprite(
            Texture.from("pausewindow"),
        )

        cartelpause.addChild(pausewindow);
        pausewindow.height = 50;
        pausewindow.width = 250;
        pausewindow.position.x = 260;
        pausewindow.position.y = 30;

        const pause: Text = new Text("JumpingCatFlash", { fontSize: 20, fill: 0x000000, fontFamily: "Tahoma" });
        pausewindow.addChild(pause);
        pause.height = 90;
        pause.position.x = 25;


        this.musicButtonToggle = new ToggleButton(
            Texture.from("musicOn"),
            Texture.from("musicOff")
        );
        this.musicButtonToggle.position.x = 150;
        this.musicButtonToggle.position.y = 90;
        this.musicButtonToggle.scale.set(2);
        this.musicButtonToggle.width = 150;
        this.musicButtonToggle.state = true;
        this.musicButtonToggle.on("switch!", this.onButtonClick, this);
        this.musicButtonToggle.on(ToggleButton.TOGGLE_EVENT, (newState) => {
            console.log("toggle changed to:", newState)
        });



        cartelpause.addChild(this.musicButtonToggle);




        this.returnGameButton = new Button(
            Texture.from("play"),
            Texture.from("playon"),
            Texture.from("playon"),

        )


        this.returnGameButton.position.x = 500;
        this.returnGameButton.position.y = 90;
        this.returnGameButton.scale.set(2);
        this.returnGameButton.width = 150;
        this.returnGameButton.on("you click me!", this.onMouseClick, this);

        cartelpause.addChild(this.returnGameButton);

        document.addEventListener("keydown", this.onKeyDown.bind(this));

    }

    private onKeyDown(e: KeyboardEvent): void {
        console.log("key pressed!", e.code);
    }


    private onButtonClick(): void {
        this.musicButtonToggle.emit("switch!", State)
        console.log("my toggle state is", this.musicButtonToggle.state);
        this.musicButtonToggle.state = !this.musicButtonToggle.state;
        console.log("but I changed it to", this.musicButtonToggle.state);

    }


    private onMouseClick():void{
         console.log("you click me!", this);
     }







}

