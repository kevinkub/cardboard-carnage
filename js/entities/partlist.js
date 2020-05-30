function partlist( monsterbuffer ) {
	var listsize = 6;
	var top = new V2( 567, 97 );
	var area = new Rect( top, top.sum( new V2( 220, 363 )));
	//var bg = new sprite( 'img/construct/partbox.png' );

	var arrUp = new Rect( top.sum( new V2( 6, 49 )), top.sum( new V2( 210, 80 )));
	arrUp.img = new sprite( 'img/constructor/item_list_up.jpg' );
	arrUp.hover = new sprite( 'img/constructor/item_list_up_hl.jpg' );

	var arrDown = new Rect( top.sum( new V2( 6, 317 )), top.sum( new V2( 210, 348 )));
	arrDown.img = new sprite( 'img/constructor/item_list_down.jpg' );
	arrDown.hover = new sprite( 'img/constructor/item_list_down_hl.jpg' );

	var options = [];
	var offset = 0;
	var current = 'heart';

	var dragoffset = new V2( 0, 0 );
	var dragging = null;

	var tabs =  [
		{ type: 'heart', inactive: new sprite( 'img/constructor/tab_heart.jpg' ), active: new sprite( 'img/constructor/tab_heart_hl.jpg' )},
		{ type: 'torso', inactive: new sprite( 'img/constructor/tab_body.jpg' ), active: new sprite( 'img/constructor/tab_body_hl.jpg' )},
		{ type: 'head', inactive: new sprite( 'img/constructor/tab_head.jpg' ), active: new sprite( 'img/constructor/tab_head_hl.jpg' )},
		{ type: 'arms', inactive: new sprite( 'img/constructor/tab_arms.jpg' ), active: new sprite( 'img/constructor/tab_arms_hl.jpg' )},
		{ type: 'legs', inactive: new sprite( 'img/constructor/tab_feet.jpg' ), active: new sprite( 'img/constructor/tab_feet_hl.jpg' )},
	]

	for( var i = 0; i < tabs.length; i++ )
		tabs[i].area = new Rect( new V2( top.x+i*42, top.y ), top.sum( new V2( 40+i*42, 40 )));

	this.setTab = function( type ) {
		options = [];
		offset = 0;
		current = type;

		for( var i = 0; i < game.inventory.length; i++ )
			if( game.inventory[i].type == type )
				options.push( game.inventory[i] );
	}

	this.click = function( pos ) {
		if( !area.inside( pos )) return;
		else if( arrDown.inside( pos )) {
			if( offset < options.length - listsize ) {
				sound.play('sound/click.ogg');
				offset++;
			} else {
				sound.play('sound/click_fail.ogg');
			}
		} else if( arrUp.inside( pos )) {
			if( offset > 0 ) {
				sound.play('sound/click.ogg');
				offset--;
			} else {
				sound.play('sound/click_fail.ogg');
			}
		} else for( var i = 0; i < tabs.length; i++ )
			if( tabs[i].area.inside( pos )) {
				sound.play('sound/click.ogg');
				this.setTab( tabs[i].type );
			}
	}

	this.mousedown = function( pos ) {
		if( !area.inside( pos )) return;
		var max = Math.min( listsize, options.length );

		for( var o = 0; o < max; o++ ) {
			var rect = options[o+offset].getRect( top.x+10, top.y+88+o*38 );
			if( rect.inside( pos )) {
				dragging = options[o+offset];
				dragoffset = mouse.dif( rect.p1 );
			}
		}
	}

	this.mouseup = function( pos ) {
		if( dragging ) {
			var part = dragging;
			var pos = mouse.dif( dragoffset );
			var rect = part.getRect( pos.x, pos.y );
			dragging = null;

			for( var i = 0; i < monsterbuffer.m.anchors.length; i++ ) {
				var anchor = monsterbuffer.m.anchors[i];
				var abchrect = anchor.rect.moved( monsterbuffer.m.root );

				if( abchrect.collision( rect ) && anchor.type == part.type ) {
					sound.play('sound/die1.ogg');
					monsterbuffer.m.removePart( anchor );
					anchor.part = part;
					arrayRemove( game.inventory, part );

					this.refresh();
					monsterbuffer.m.reload();
				}
			}
		}
	}

	this.draw = function( ctx ) {
		ctx.font = '20px monospace';
		ctx.fillStyle = 'black';
		//bg.draw( ctx, area.p1.x, area.p1.y+40 );

		for( var i = 0; i < tabs.length; i++ )
			if( tabs[i].type == current ) tabs[i].active.draw( ctx, tabs[i].area.p1.x, tabs[i].area.p1.y );
			else tabs[i].inactive.draw( ctx, tabs[i].area.p1.x, tabs[i].area.p1.y );

		var max = Math.min( listsize, options.length )
		for( var o = 0; o < max; o++ )
			options[o+offset].draw(ctx, top.x+10, top.y+88+o*38 );

		if( arrUp.inside( mouse )) arrUp.hover.draw( ctx, arrUp.p1.x, arrUp.p1.y );
		else arrUp.img.draw( ctx, arrUp.p1.x, arrUp.p1.y );

		if( arrDown.inside( mouse )) arrDown.hover.draw( ctx, arrDown.p1.x, arrDown.p1.y );
		else arrDown.img.draw( ctx, arrDown.p1.x, arrDown.p1.y );

		if( dragging ) {
			var pos = mouse.dif( dragoffset );
			ctx.globalAlpha = .7;
			dragging.draw( ctx, pos.x, pos.y );
			ctx.globalAlpha = 1;
		}
	}

	this.refresh = function() {
		this.setTab( current );
	}

	this.refresh();
}

