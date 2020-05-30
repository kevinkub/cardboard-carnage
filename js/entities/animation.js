function meeleAttack() {
	var maxframe = 9;
	var sprite = new animationSprite( 'img/fight/fighcloud_line.png', maxframe );
	var counter = new framecounter( 40 );

	this.running = function() {
		return counter.frame < maxframe;
	}

	this.stop = function() {
		counter.frame = maxframe;
	}

	this.start = function() {
		counter.reset();
		sound.play( 'sound/fight'+Math.ceil( Math.random() * 6 )+'.ogg');
	}

	this.update = function( delta ) {
		if( this.running()) counter.update( delta );
	}

	this.draw = function( ctx, x, y ) {
		if( this.running()) {
			sprite.draw( ctx, x, y, counter.frame );
		}
	}

	this.stop();
}

function dieAnimation( x ) {
	this.type = 'decoration';

	var maxframe = 16;
	var sprite = new animationSprite( 'img/death/deathcloud_stripe.png', maxframe );
	var counter = new framecounter( 50 );

	this.update = function( delta ) {
		if( counter.frame < maxframe-1 ) counter.update( delta );
	}

	this.draw = function( ctx, y, viewport, scale ) {
		sprite.draw( ctx, x-viewport, y-200, counter.frame );
	}
}

function blitz( parent, callback ) {
	var maxframe = 6;
	var sprite = new animationSprite( 'img/constructor/animation_lightning.png', maxframe );
	var counter = new framecounter( 80 );
	var wait = 0;

	sound.play( 'sound/activate.ogg' );

	this.update = function( delta ) {
		if( counter.frame < maxframe ) {
			counter.update( delta );
		} else if( wait < 3000 ) {
			wait += delta;
		} else {
			arrayRemove( parent, this );
			callback();
		}
	}

	this.draw = function( ctx, y, viewport, scale ) {
		sprite.draw( ctx, 300, 40, counter.frame );
	}

}