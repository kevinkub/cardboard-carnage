function fighter( parent, x, monster ) {
	this.counter = new framecounter( 100 );
	this.parent = parent;
	this.monster = monster;
	this.x = x;

	for( var i in monster.stats )
		this[i] = monster.stats[i];

	this.hp = this.life;
	this.faction = 0;
	this.type = 'none';
	this.range = 1;

	this.animation = new meeleAttack();

	this.draw = function( ctx, y, viewport, scale ) {
		scale *= .5;
		var w = 300 * scale;
		var h = 400 * scale;

		this.monster.scaled( ctx, this.x-viewport, y-h+10, w, h, this.counter.frame % 5 );
		this.animation.draw( ctx, this.x-viewport+70, y-h+30 );
		this.hpbar( ctx, y, viewport );
	}

	this.move = function( delta ) {
		this.x += delta * this.speed * .001;

		for( var i = 0; i < this.parent.entities.length; i++ ) {
			var cmp = this.parent.entities[i];
			var dist = cmp.x - this.x;
			if( dist > 0 && dist < 110 && cmp.type != 'decoration' )
				this.x = cmp.x-110;
		}
	}

	this.update = function( delta ) {
		this.animation.update( delta );
		this.counter.update( delta );
		this.move( delta );
		this.attack( delta );
	}

	this.harm = function( damage, damagetype ) {
		this.hp -= Math.min( this.hp, damage );
		if( this.hp <= 0 ) this.destroy();
	}
}

function building( parent, x, data ) {
	this.init( parent, x, data, 10 );

	this.destroy = function() {
		arrayRemove(parent.entities, this);

		for( var i = 0; i < this.loot.length; i++ )
			if( Math.random() < this.loot[i].chance ) {
				var loot = new bodypart( this.loot[i].item );
				scenes.fight.loot.push( loot );
				game.inventory.push( loot );
			}
	}
}

function enemy( parent, x, data ) {
	this.init( parent, x, data, 5 );

	this.update = function( delta ) {
		this.attack( delta );
	}
}

fighter.prototype.destroy =
enemy.prototype.destroy = function() {
	this.parent.entities.unshift( new dieAnimation( this.x-30 ));
	arrayRemove(this.parent.entities, this);
}

fighter.prototype.attack =
enemy.prototype.attack = function( delta ) {
	var closest = null;
	var mindist = this.range * 120;

	for( var i = 0; i < this.parent.entities.length; i++ ) {
		var target = this.parent.entities[i];

		if( target.faction != this.faction && target.type != 'decoration' ) {
			var dist = Math.abs( this.x - target.x );

			if( dist < mindist ) {
				closest = target;
				mindist = dist;
			}
		}
	}

	if( closest ) {
		var damage = this.att;

		if( closest['def_'+this.type] )
			damage -= closest['def_'+this.type];
		if( damage < 1 )
			damage = 1;

		closest.harm( damage*delta*.0004 , this.type );

		if( this.animation && !this.animation.running())
			this.animation.start();
	} else {
		if( this.animation && this.animation.running())
			this.animation.stop();
	}
}


enemy.prototype.harm =
building.prototype.harm = function( damage ) {
	this.hp -= Math.min( this.hp, damage );
	if( this.hp <= 0 ) this.destroy();
}

enemy.prototype.init =
building.prototype.init = function( parent, x, data, offset ) {
	this.parent = parent;
	for( var i in data ) this[i] = data[i];
	this.img = new sprite( this.img );
	this.x = ( x + offset ) * 120;
	this.faction = 1;
	this.hp = this.life;
}

enemy.prototype.draw =
building.prototype.draw = function( ctx, y, viewport, scale ) {
	this.img.scale( ctx, this.x-viewport, y, scale );
	this.hpbar( ctx, y, viewport );
}


fighter.prototype.hpbar =
enemy.prototype.hpbar =
building.prototype.hpbar = function( ctx, y, viewport ) {
	if( this.hp != this.life) {
		var len = 100 * this.hp / this.life;
		ctx.fillRect( this.x-viewport, y, len, 10 );
		ctx.strokeRect( this.x-viewport, y, 100, 10 );
	}
}