function monsterbar( x, y ) {
	var offset = 0;
	var listsize = 4;

	var top = new V2( x, y );
	var area = new Rect( top, top.sum( new V2( 85+listsize*105, 100 )));
	var box = new sprite( 'img/constructor/monster_item_element.png' );

	var arrLeft = new Rect( top, top.sum( new V2( 40, 100 )));
	arrLeft.img = new sprite( 'img/constructor/monster_select_left.jpg' );
	arrLeft.hover = new sprite( 'img/constructor/monster_select_left_hl.jpg' );

	var arrRight = new Rect( top.sum( new V2( 45+listsize*105, 0 )), top.sum( new V2( 85+listsize*105, 100 )));
	arrRight.img = new sprite( 'img/constructor/monster_select_right.jpg' );
	arrRight.hover = new sprite( 'img/constructor/monster_select_right_hl.jpg' );

	function checkMonsters( callback, hit ) {
		for( var i = 0; i < listsize; i++ ) {
			var pos = top.sum( new V2( 45+i*105, 0 ));
			var rect = new Rect( pos, pos.sum( new V2(100, 100)));

			if( rect.inside( hit ) && game.monsters[i+offset] )
				callback( game.monsters[i+offset], rect );
		}
	}

	this.draw = function( ctx ) {
		if( arrLeft.inside( mouse )) arrLeft.hover.draw( ctx, arrLeft.p1.x, arrLeft.p1.y );
		else arrLeft.img.draw( ctx, arrLeft.p1.x, arrLeft.p1.y );

		if( arrRight.inside( mouse )) arrRight.hover.draw( ctx, arrRight.p1.x, arrRight.p1.y );
		else arrRight.img.draw( ctx, arrRight.p1.x, arrRight.p1.y );

		for( var i = 0; i < listsize; i++ ) {
			var pos = top.sum( new V2( 45+i*105, 0 ));
			box.draw( ctx, pos.x, pos.y );

			if( game.monsters[i+offset] ) {
				var monster = game.monsters[i+offset];
				monster.scaled( ctx, pos.x+12, pos.y, 75, 100 );

				if( this.overlay )
					this.overlay.draw( ctx, pos.x+70, pos.y+70 );
			}
		}
	}

	this.click = function( pos ) {
		if( !area.inside( pos )) return;
		else if( arrRight.inside( pos )) {
			if( offset < game.monsters.length - listsize ) {
				sound.play('sound/click.ogg');
				offset++;
			} else {
				sound.play('sound/click_fail.ogg');
			}
		} else if( arrLeft.inside( pos )) {
			if( offset > 0 ) {
				sound.play('sound/click.ogg');
				offset--;
			} else {
				sound.play('sound/click_fail.ogg');
			}
		} else if( this.clickcallback ) checkMonsters(this.clickcallback, pos);
	}

	this.mousedown = function( pos ) {
		if( this.downcallback ) checkMonsters(this.downcallback, pos);
	}
}
