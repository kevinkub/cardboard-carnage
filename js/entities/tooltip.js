function tooltip( text, subtext, x, y ) {
	this.x = x;
	this.y = y;
	this.text = text;
	this.subtext = subtext;
}

tooltip.prototype.draw = function( ctx ) {
	ctx.font = '20px monospace';
	var dimension = ctx.measureText(this.text);
	ctx.font = '10px monospace';
	dimension = Math.max(ctx.measureText(this.subtext).width, dimension.width);
	ctx.font = '20px monospace';

	ctx.fillStyle = 'rgba(0,0,0,.6)';
	ctx.fillRect( this.x-(dimension/2)-10, this.y-45, dimension+20, 55 );
	ctx.textAlign = 'center';
	ctx.fillStyle = 'white';
	ctx.fillText( this.text, this.x, this.y-20 );
	ctx.font = '10px monospace';
	ctx.fillText( this.subtext, this.x, this.y-5 );
	ctx.font = '20px monospace';
}


