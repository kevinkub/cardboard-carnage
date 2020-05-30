function fightScene() {
	var self = this;
	var phase = 'intro';
	var lanes = null;
	var maxport = 10000;
	var wait = 0;

	this.loot = [];
	this.viewport = maxport;
	this.oldupdate = this.update;
	this.bg = new sprite( 'img/backgrounds/stars.jpg' );

	var dragging = null;
	var dragoffset = new V2(0,0);

	var backward = new sprite("img/fight/btn_scoll_back.png");
	backward.area = new Rect( new V2(20, 542), new V2(65, 580) );
	var forward = new sprite("img/fight/btn_scoll_forward.png");
	forward.area = new Rect( new V2(80, 542), new V2(125, 580) );

	var bgs = [
		{ y: 0, img: new sprite( 'img/backgrounds/mountain2.png' ), speed: .015 },
		{ y: 30, img: new sprite( 'img/backgrounds/mountain1.png' ), speed: .02 },
		{ y: 20, img: new sprite( 'img/backgrounds/trees1.png' ), speed: .06 },

		{ y: 188, img: new sprite( 'img/backgrounds/lane5.jpg' ), speed: .092 },
		{ y: 259, img: new sprite( 'img/backgrounds/lane4.jpg' ), speed: .094 },
		{ y: 335, img: new sprite( 'img/backgrounds/lane3.jpg' ), speed: .096 },
		{ y: 417, img: new sprite( 'img/backgrounds/lane2.jpg' ), speed: .098 },
		{ y: 505, img: new sprite( 'img/backgrounds/lane1.jpg' ), speed: .10 },

		{ y: 160, img: new sprite( 'img/backgrounds/lane_border.png' ), speed: .09 },
	];

	var mbar = new monsterbar( 150, 20 );
	mbar.downcallback = function( monster, rect ) {
		dragging = monster;
		dragoffset = mouse.dif( rect.p1 );
	}

	function attack() {
		phase = 'fight';
		self.entities = [];
	}

	function back() {
		lanes.clear();
		game.scene = scenes.map;
	}

	this.setVillage = function( village ) {
		this.viewport = maxport;
		this.entities = [];
		this.loot = [];

		lanes = village.lanes;
		phase = 'intro';
		wait = 0;
	}

	this.mouseup = function( pos ) {
		if( dragging ) {
			var monster = dragging;
			var top = mouse.dif( dragoffset );
			var check = new Rect( top, top.sum( new V2( 100, 100 )));
			dragging = null;

			for( var i = 0; i < 5; i++ )
				for( var j = 0; j < 3; j++ ) {
					var rect = lanes[i].grid[j];
					if( rect.collision( check ) && !rect.monster ) {
						arrayRemove( game.monsters, monster );
						rect.monster = new fighter( lanes[i], j*120, monster );
						lanes[i].entities.push( rect.monster );
						return;
					}
				}
		}
	}

	this.update = function( delta ) {
		if( wait < 800 ) {
			wait += delta;
		} else if( phase == 'intro' ) {
			if( this.viewport <= 0 ) {
				this.entities.push( mbar );
				this.entities.push( new button( 'img/constructor/btn_switch_to_map.png', 'img/constructor/btn_switch_to_map_hl.png', 20, 20, back ));
				this.entities.push( new button( 'img/constructor/btn_attack.png', 'img/constructor/btn_attack_hl.png', 680, 20, attack ));
				phase = 'setup';
			} else this.viewport -= Math.min( delta*2, this.viewport );
		} else if( phase == 'fight' ) {
			var alive = false;
			var slowestPos = null;
			for( var i = 0; i < 5; i++ )
				for( var j = 0; j < lanes[i].entities.length; j++)
					if(lanes[i].entities[j] instanceof fighter )
					{
						alive = true;
						if(slowestPos == null || lanes[i].entities[j].x < slowestPos) slowestPos = lanes[i].entities[j].x;
					}
			
			if( !alive ) this.viewport += delta * .5;
			
			if( backward.area.inside( mouse ) && alive && slowestPos < (maxport * .1 + 800) ) {
				this.viewport -= delta*2.5;
				if( this.viewport<=0 ) this.viewport = -delta;
			} 
			if( forward.area.inside( mouse ) && maxport > this.viewport + delta*1.5 ) this.viewport += delta*1.5;

			if( wait < 2000 ) { 
				wait += delta;
			}
			else if( this.viewport < maxport ) { 
				this.viewport += delta;				
			}
			else if( slowestPos > (maxport * .1 + 800) || !alive ) {
				phase = 'after';
				this.entities.push( new lootbox( this.loot ));
				this.entities.push( new button( 'img/constructor/btn_switch_to_map.png', 'img/constructor/btn_switch_to_map_hl.png', 20, 20, back ));
			};

			lanes.update( delta );
		}
	}

	this.draw = function( ctx ) {
		this.bg.draw( ctx, 0, 0 );

		for( var i = 0; i < bgs.length; i++ ) {
			var bg = bgs[i];
			var x = ( this.viewport * bg.speed * -1 ) % 800;

			bg.img.draw( ctx, x+800, bg.y );
			bg.img.draw( ctx, x, bg.y );
		}

		if( phase == 'setup' ) {
			lanes.grid( ctx );
		}

		lanes.draw( ctx, this.viewport  * .1 );

		for( var i = 0; i < this.entities.length; i++ )
			if( this.entities[i].draw )
				this.entities[i].draw( ctx );

		if( dragging ) {
			var pos = mouse.dif( dragoffset );
			dragging.scaled( ctx, pos.x+12, pos.y, 75, 100 );
		}

		if( phase == 'fight' ) {
			backward.draw( ctx, backward.area.p1.x, backward.area.p1.y );
			forward.draw( ctx, forward.area.p1.x, forward.area.p1.y );
		}

	}
}

fightScene.prototype = new scene();