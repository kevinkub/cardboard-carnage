function splashScene() {
	this.bg = new sprite( 'img/splashscreen.png');

	this.click = function(pos) {
		game.scene = scenes.construct;
		sound.play('sound/click.ogg');

	}

}

splashScene.prototype = new scene();