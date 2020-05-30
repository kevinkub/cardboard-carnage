function bodypart( type ) {
	for( var i in parts[type] ) this[i] = parts[type][i];
	this.sprite = new sprite( 'img/constructor/item_element.png' );
	this.img = new sprite( this.img );

	if( this.slots ) {
	this.slots = [];
		for( var i in parts[type].slots ) {
			var slot = parts[type].slots[i];
			this.slots.push( { type: slot.type, anchor: slot.anchor.clone() } );
		}
	}
}

bodypart.prototype.draw = function( ctx, x, y ) {
	this.sprite.draw( ctx, x, y );
	ctx.textAlign = 'left';
	ctx.fillText( this.name, x+10, y+23 );
}

bodypart.prototype.getRect = function( x, y ) {
	return new Rect( new V2( x, y ), new V2( x+200, y+30 ));
}