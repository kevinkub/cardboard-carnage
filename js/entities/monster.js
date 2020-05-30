function monster( parts ) {
	this.root = new V2( 250, 100 );
	var changed = true;
	var self = this;

	var buffer = document.createElement('canvas');
	var btx = buffer.getContext('2d');

	anchorImg = {
		heart: new sprite("img/constructor/joint_heart.png"),
		torso: new sprite("img/constructor/joint_body.png"),
		arms: new sprite("img/constructor/joint_arm.png"),
		legs: new sprite("img/constructor/joint_leg.png"),
		head: new sprite("img/constructor/joint_head.png")
	}

	this.stats = {
		life: 0,
		speed: 0,
		att: 0,
		def_melee: 0,
		def_ranged: 0,
		def_magic: 0
	};

	buffer.width = 1500;
	buffer.height = 400;

	btx.strokeStyle = '#F88';
	btx.fillStyle = '#500';
	btx.lineWidth = 2;
	btx.textAlign = 'center';
	btx.font = '16px monospace';

	var anchors = [
		{ type: 'heart', anchor: new V2( 50,  50 )},
		{ type: 'torso', anchor: new V2( 150, 170 )},
	]

	this.anchors = [];

	function setParts( slots ) {
		for( var i=0; i < slots.length; i++ ) {
			if( !parts.length ) return;
			slots[i].part = parts.shift;
			if( slots[i].part.slots ) setParts( slots[i].part.slots );
		}
	}

	function getAnchors( result, slots, frametop ) {
		for( var i=0; i < slots.length; i++ ) {
			var slot = slots[i];
			slot.pos = slot.anchor.sum( frametop );
			slot.rect = new Rect(
				slot.pos.dif( new V2( 10, 10 )),
				slot.pos.sum( new V2( 10, 10 )))
			result.push( slot );

			if(slot.part) {
				for(var attr in slot.part.stats)
					self.stats[attr] += slot.part.stats[attr];

				if( slot.part.slots )
					getAnchors( result, slot.part.slots, slot.pos.dif( slot.part.anchor ));
			}
		}
	}

	function createBuffer( showAnchors ) {
		buffer.width = buffer.width;
		var operations = [];

		for( var i = 0; i < self.anchors.length; i++ ) (function () {
			var anchor = self.anchors[i];
			var offset = i;

			if( anchor.type != 'heart' || showAnchors )
				if( anchor.part ) {
					operations.push( { z: i, f: function() {
						var pos = anchor.pos.dif( anchor.part.anchor );

						for( var j = 0; j < 5; j++ ) {
							var wackel = Math.sin( Math.PI * .4 * ( j+offset )) * 5;
							anchor.part.img.draw( btx, pos.x+j*300, pos.y + wackel );
						}
					}});

					if( anchor.part.dist )
						operations.push( { z: -i, f: function() {
							var pos = anchor.pos.dif( anchor.part.anchor );

							for( var j = 0; j < 5; j++ ) {
								var wackel = Math.sin( Math.PI * .4 * ( j+offset+2 )) * 5;
								anchor.part.img.draw( btx, pos.x + anchor.part.dist + j*300, pos.y+wackel );
							}
						}})
				} else if( showAnchors ) {
					operations.push( { z: 50, f: function() {
						anchorImg[anchor.type].draw( btx, anchor.rect.p1.x-8, anchor.rect.p1.y-8 );
					}})
				}
		})();

		operations.sort( function( a, b ) {
			return a.z-b.z;
		});

		for( var i = 0; i < operations.length; i++ )
			operations[i].f();
	}

	this.removePart = function( anchor ) {
		if( anchor.part ) {
			game.inventory.push( anchor.part );
			if( anchor.part.slots )
				for( var i = 0; i < anchor.part.slots.length; i++ )
					this.removePart( anchor.part.slots[i] );
			anchor.part = null;
		}
	}

	this.destroy = function() {
		for( var i = 0; i < anchors.length; i++ )
			this.removePart( anchors[i] );
		this.reload();
	}

	this.preview = function( ctx ) {
		if( changed ) createBuffer( 1 );
		ctx.drawImage( buffer, 0, 0, 300, 400, this.root.x, this.root.y, 300, 400 );
	}

	this.scaled = function( ctx, x, y, w, h, f ) {
		if( typeof f == 'undefined' ) f = 0;
		if( changed ) createBuffer( 0 );
		ctx.drawImage( buffer, f*300, 0, 300, 400, x, y, w, h );
	}

	this.reload = function() {
		this.stats = {
			life: 0,
			speed: 0,
			att: 0,
			def_melee: 0,
			def_ranged: 0,
			def_magic: 0
		};

		this.anchors = [];
		getAnchors( this.anchors, anchors, new V2( 0, 0 ));
		changed = true;
	}

	this.valid = function() {
		var cost = 0;
		for( var i = 0; i < this.anchors.length; i++ )
		{
			if( typeof this.anchors[i].part == 'undefinded' || !this.anchors[i].part )
				return false;
			cost += this.anchors[i].part.cost;
		}
		if( cost > 0 ) return false;

		return true;
	}

	setParts( anchors );
	getAnchors( this.anchors, anchors, new V2( 0, 0 ));
}


