
function constructScene() {
	new sprite('img/constructor/animation_lightning.png');

	var busy = false;
	var self = this;
	var help = true;

	var overlay = new sprite( 'img/constructor/tutorial_overly.png' );
	var helpbutton =  new sprite( 'img/constructor/help.png' );

	var monsterbuffer = {
		m: new monster( [] ),
		draw: function( ctx ) { this.m.preview( ctx ); }
	};

	function save() {
		if( monsterbuffer.m.valid() && !busy ) {
			busy = true;
			self.entities.push( new blitz( self.entities, function() {
				if( monsterbuffer.m.valid()) {
					game.addmonster( monsterbuffer.m );
					monsterbuffer.m.reload();
					monsterbuffer.m = new monster( [] );
				}

				busy = false;
			}));
		} else {
			sound.play( 'sound/fail.ogg' );
		}
	}

	var mbar = new monsterbar( 150, 490 );
	var plist = new partlist( monsterbuffer );

	mbar.overlay = new sprite( 'img/constructor/btn_trash.png' );
	mbar.clickcallback = function( m ) {
		arrayRemove(game.monsters, m);
		m.destroy();
		plist.refresh();
	};

	this.bg = new sprite( 'img/constructor/creation_bg.jpg' );


	this.entities.push( {
		click: function( pos ) { if( pos.y < 20 && pos.x > 760 ) help = true; },
		draw: function( ctx ) { helpbutton.draw( ctx, 760, 5 ); }
	} );

	this.entities.push( plist );
	this.entities.push( mbar );
	this.entities.push( new button( 'img/constructor/btn_save.jpg', 'img/constructor/btn_save_hl.jpg', 675, 504, save ));
	this.entities.push( new button( 'img/constructor/btn_new.jpg', 'img/constructor/btn_new_hl.jpg', 677, 547, function() { monsterbuffer.m.destroy(); plist.refresh(); } ));
	this.entities.push( new button( 'img/constructor/btn_map.jpg', 'img/constructor/btn_map_hl.jpg', 17, 509, function() { game.scene = scenes.map } ));
	this.entities.push( monsterbuffer );
	this.entities.push( new heartbar( monsterbuffer ) );
	this.entities.push( new statsbox( monsterbuffer ) );

	this.entities.push( {
		mousedown: function() { help = false; },
		draw: function( ctx ) { if( help ) overlay.draw( ctx, 0, 0 ); }
	} );
}

constructScene.prototype = new scene();