
function decoration( x, url ) {
	this.type = 'decoration';
	var img = new sprite( url );

	this.update = function( delta ) {}

	this.draw = function( ctx, y, viewport, scale ) {
		img.draw( ctx, x-viewport, y-100 );
	}
}


function lanes( enems, builds ) {
	var self = this;
	this[0] = { top: 505, entities: [] };
	this[1] = { top: 417, entities: [] };
	this[2] = { top: 335, entities: [] };
	this[3] = { top: 259, entities: [] };
	this[4] = { top: 188, entities: [] };

/*
	var decorations = [
		'img/backgrounds/separator_arrows.png',
		'img/backgrounds/separator_plant01.png',
		'img/backgrounds/separator_plant02.png',
		'img/backgrounds/separator_skull.png',
		'img/backgrounds/separator_stone1.png',
		'img/backgrounds/separator_stone2.png'
	];

	for( var i = 0; i < 5; i++ ) {
		var num = 4 + Math.random() * 4;
		for( var j = 0; j < num; j++ ) {
			var deco = new decoration(
				400+Math.random()*800,
				decorations[(Math.random()*6)|0]
			);

			this[i].entities.push( deco );
		}
	}
	*/


	for( var i = 0; i < enems.length; i++ ) {
		var item = enems[i];
		var obj = new enemy( this[item.position.y], item.position.x, enemies[item.type] );
		this[item.position.y].entities.push( obj );
	}

	for( var i = 0; i < builds.length; i++ ) {
		var item = builds[i];
		var obj = new building( this[item.position.y], item.position.x, buildings[item.type] );
		this[item.position.y].entities.push( obj );
	}
	var last = 600;
	for( var i = 0; i < 5; i++ ) {
		var lane = this[i];

		lane.height = last - lane.top;
		lane.grid = [
			new Rect( new V2(  20, lane.top + 20 ), new V2( 100, last - 20 )),
			new Rect( new V2( 140, lane.top + 20 ), new V2( 200, last - 20 )),
			new Rect( new V2( 260, lane.top + 20 ), new V2( 300, last - 20 )),
		]

		last = lane.top;
	}

	function clear_grid() {
		for( var i = 0; i < 5; i++ ) {
			self[i].grid[0].monster = null;
			self[i].grid[1].monster = null;
			self[i].grid[2].monster = null;
		}
	}

	clear_grid();

	this.clear = function() {
		clear_grid();

		for( var i = 0; i < 5; i++ ) {
			var ents = this[i].entities;
			var remove = [];

			for( var j = 0; j < ents.length; j++ ) {
				if( ents[j] instanceof fighter ) {
					game.addmonster( ents[j].monster );
					remove.push( ents[j] );
				} else {
					ents[j].hp = ents[j].life;
				}
			}

			for( var j = 0; j < remove.length; j++ )
				arrayRemove( ents, remove[j] );
		}
	}

	this.update = function( delta ) {
		for( var i = 4; i >= 0; i-- ) {
			var lane = this[i];
			for( var j = 0; j < lane.entities.length; j++ ) {
				var obj = lane.entities[j];
				if( obj.update ) obj.update( delta );
			}
		}
	}

	this.draw = function( ctx, viewport ) {
		ctx.fillStyle = "rgb( 144, 44, 17 )";
		ctx.strokeStyle = "rgb( 108, 24, 0 )";

		for( var i = 4; i >= 0; i-- ) {
			var lane = this[i];
			for( var j = 0; j < lane.entities.length; j++ ) {
				var obj = lane.entities[j];
				if( obj.draw ) obj.draw( ctx, lane.top+lane.height-20, viewport, 1-.05*i );
			}
		}
	}

	this.grid = function( ctx ) {
		ctx.fillStyle = "rgba( 0,0,0,0.4 )";
		ctx.strokeStyle = "rgba( 0,0,0,0.4 )";
		ctx.lineWidth = 2;

		for( var i = 0; i < 5; i++ ) {
			var lane = this[i];
			for( var j = 0; j < 3; j++ ) {
				var rect = lane.grid[j];
				ctx.fillRect( rect.p1.x, rect.p1.y, 80, lane.height - 40 );
				ctx.strokeRect( rect.p1.x, rect.p1.y, 80, lane.height - 40 );
			}
		}
	}
}