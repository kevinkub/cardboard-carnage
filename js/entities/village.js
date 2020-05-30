function village( data ) {
	var self = this;
	var img = new sprite( data.img );
	var destroyedImg = new sprite( 'img/map/village01_destroyed.png' );

	for( var i in data ) this[i] = data[i];

	var factor = this.position.y/1400;
	var area = new Rect( this.position.clone(), this.position.sum( new V2( 300, 300 ).mul(factor) ));

	var tippos = this.position.sum( new V2( 150 * factor, 0 ));
	var tip = new tooltip( this.name, this.difficulty.toUpperCase(), tippos.x, tippos.y )

	var size = new V2( 480, 417 ).mul(factor)
	this.position.sub((new V2( 90, 60 )).mul( factor ));
	this.position.y += size.y;

	this.lanes = new lanes( this.enemies, this.buildings );
	this.destroyed = false;

	this.click = function( pos ) {
		if(area.inside( pos )) {
			sound.play('sound/click.ogg');
			scenes.fight.setVillage( self );
			game.scene = scenes.fight;
		}
	}

	this.draw = function( ctx ) {
		if( !this.destroyed ) img.scale( ctx, this.position.x, this.position.y, factor );
		else destroyedImg.scale( ctx, this.position.x, this.position.y, factor );
		if(area.inside( mouse )) tip.draw( ctx );

//		ctx.strokeStyle = 'red'
//		ctx.strokeRect( this.position.x, this.position.y-size.y, size.x, size.y )
//		ctx.strokeStyle = 'blue'
//		ctx.strokeRect( area.p1.x, area.p1.y, area.p2.x-area.p1.x, area.p2.y-area.p1.y );

	}
}
