function sprite( url ) {
	var self = this;

	g.add( url );
	g.load( function() {
		self.img = g[url];
	});
}

sprite.prototype.draw = function( ctx, x, y ) {
	if( this.img ) {
		ctx.drawImage( this.img, x, y );
	}
};

sprite.prototype.center = function( ctx, x, y ) {
	if( this.img ) {
		ctx.drawImage( this.img, x-this.img.width/2, y-this.img.height/2 );
	}
};

sprite.prototype.scale = function( ctx, x, y, factor ) {
	if( this.img ) {
		var w = this.img.width * factor;
		var h = this.img.height * factor;
		ctx.drawImage( this.img, 0, 0, this.img.width, this.img.height, x, y-h, w, h );
	}
}

function animationSprite( url, frames ) {
	var self = this;

	g.add( url );
	g.load( function() {
		self.img = g[url];
		self.h = g[url].height;
		self.w = g[url].width / frames;
		self.f = frames;
	});
}

animationSprite.prototype.draw = function( ctx, x, y, f ) {
	if( this.img ) {
		ctx.drawImage( this.img, f*this.w, 0, this.w, this.h, x, y, this.w, this.h );
	}
};

animationSprite.prototype.center = function( ctx, x, y, f ) {
	if( this.img ) {
		ctx.drawImage( this.img, f*this.w, 0, this.w, this.h, x-this.w/2, y-this.h/2, this.w, this.h );
	}
};