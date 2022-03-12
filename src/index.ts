import { Application, Container, Loader, Point, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720
});

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


Loader.shared.add({ url: "./RBR SS.PNG", name: "RBF1" });
Loader.shared.add({ url: "./MclarenSS.PNG", name: "Mclaren" });

Loader.shared.onComplete.add(() => {

	const rbf1: Sprite = Sprite.from("RBF1");
	const mclaren: Sprite = Sprite.from("Mclaren");
	
	mclaren.x = 400;
	mclaren.y = 600; 
	mclaren.angle = -35; 

	const inminentColission: Container = new Container();	

	inminentColission.addChild(rbf1);
	inminentColission.addChild(mclaren);
	

	inminentColission.scale.set(0.3);
	inminentColission.position.set(640,320);
	
console.log(mclaren.toGlobal(new Point()));
console.log(mclaren.parent.toGlobal(mclaren.position));

const crash = mclaren.parent.toLocal(new Point(640,360));
mclaren.position.copyFrom (crash);

	app.stage.addChild(inminentColission);
});

Loader.shared.load();

