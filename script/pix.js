const app = new PIXI.Application({ transparent: true, width: 800, height: 600});
id('inner-body').appendChild(app.view);

// create a new Sprite from an image path.
const niko = PIXI.Sprite.from('asset/img/niko.gif');

// center the sprite's anchor point
niko.anchor.set(0.5);

// move the sprite to the center of the screen
niko.x = app.screen.width / 2;
niko.y = app.screen.height / 2;

app.stage.addChild(niko);

app.ticker.add(() => {
    // just for fun, let's rotate niko a little
    niko.rotation += 0.1;
});