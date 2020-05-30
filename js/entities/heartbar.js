function heartbar( monsterbuffer ) {
	this.monsterbuffer = monsterbuffer;
	this.parts = 0;
	this.heart = -1;

	this.calc = function() {
		var anchors = this.monsterbuffer.m.anchors;
		this.parts = 0;
		this.heart = -1;

		for(var i = 0; i < anchors.length; i++)
			if( anchors[i].part )
				if( anchors[i].part.type == "heart" )
					this.heart = anchors[i].part.cost;
				else
					this.parts += anchors[i].part.cost;
		}

	this.draw = function( ctx ) {
		this.calc();

		var factor = -this.parts/this.heart;

		ctx.font = '20px monospace';
		if( factor <= 1 )
		{
			ctx.fillStyle = 'rgba(25,128,13,.35)';
			ctx.fillRect( 73, 92, 165 * factor, 22 );
		} else {
			ctx.fillStyle = 'rgba(255,0,0,.75)';
			ctx.fillRect( 73, 92, 165, 22 );
		}

		ctx.textAlign = 'center';
		ctx.fillStyle = 'rgba(0,0,0,.85)';

		ctx.fillText( this.parts + "/" + ((this.heart == -1) ? "0":-this.heart), 155, 110);

	}
}
