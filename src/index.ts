import { Application, Loader, Ticker } from 'pixi.js'
import { assets } from './assets';
import { Scene } from './Scenes/Scene';
import { TickerScene } from './Scenes/TickerScene';
//import { UIlvlcomplete }  from './Scenes/UIlvlcomplete';
//import { UIpause } from './Scenes/UIpause';
import { Keyboard } from './utils/Keyboard';

export const WIDTH = 1280;

export const HEIGHT = 720;

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0xFA9595,
	width: WIDTH,
	height: HEIGHT
});

Keyboard.initialize();

window.addEventListener("resize", ()=>{
	console.log("resized!");
	const scaleX = window.innerWidth / app.screen.width;
	const scaleY = window.innerHeight / app.screen.height;
	const scale = Math.min(scaleX, scaleY);

	const gameWidth = Math.round(app.screen.width * scale);
	const gameHeight = Math.round(app.screen.height * scale);

	const marginHorizontal = Math.floor((window.innerWidth - gameWidth) / 2); 
	const marginVertical = Math.floor((window.innerHeight - gameHeight) / 2); 
	
	app.view.style.width = gameWidth + "px";
	app.view.style.height = gameHeight + "px";

	app.view.style.marginLeft = marginHorizontal + "px";
	app.view.style.marginRight = marginHorizontal + "px";

	app.view.style.marginTop = marginVertical + "px";
	app.view.style.marginBottom = marginVertical + "px";

})

window.dispatchEvent(new Event("resize"));


Loader.shared.add(assets);


Loader.shared.onComplete.add(() => {

	const myScene = new Scene();
	app.stage.addChild(myScene);
	

	const myScene1 = new TickerScene();
	app.stage.addChild(myScene1);
	Ticker.shared.add(function (deltaFrame){
		myScene1.update(Ticker.shared.deltaMS, deltaFrame);
	})


	/*const lvlcomplete = new UIlvlcomplete();
	app.stage.addChild(lvlcomplete);*/

	/*const pause = new UIpause();
	app.stage.addChild(pause);*/
	
	
	
});

Loader.shared.load();

