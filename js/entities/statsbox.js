function statsbox( monsterbuffer ) {

	this.draw = function( ctx ) {
		var stats = monsterbuffer.m.stats;

		ctx.textAlign = 'left';
		ctx.fillStyle = 'black';
		ctx.font = '20px monospace';

		var i = 0;
		for(var stat in stats)
			if( stat != 'aggro' ) {
				var text = stat.replace("_"," ").replace("att","ATTACK");
				ctx.fillText( text.toUpperCase() + " ".repeat(11 - text.length) + stats[stat] , 38, 170 + i++ * 25 );
			}
	}
}

String.prototype.repeat = function(num) {
	return new Array(isNaN(num)? 1 : ++num).join(this);
}