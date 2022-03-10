import { Application, Loader, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

Loader.shared.add({ url: "./ezio.png", name: "ezioauditore" });
Loader.shared.add({ url: "./clampy.png", name: "Clampy" });

Loader.shared.onComplete.add(() => {

	const clampy: Sprite = Sprite.from("ezioauditore");

	console.log("Hola Mundo", clampy.width, clampy.height );

	// clampy.anchor.set(0);

	clampy.x = 0;
	clampy.y = 0;

	app.stage.addChild(clampy);

});

Loader.shared.load();

