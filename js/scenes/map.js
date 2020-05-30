function mapScene() {
	this.bg = new sprite( 'img/map/bg.png');
	this.entities.push( new button( 'img/constructor/btn_switch_to_lab.png', 'img/constructor/btn_switch_to_lab_hl.png', 20, 510, function() { game.scene = scenes.construct } ));
		
	for(var id in villages) {
		this.entities.push( new village( villages[id] ) );	
	}
	
	this.entities.sort(function(a,b){ 
		if( !a.position ) return 1;
		if( !b.position ) return -1;
		return a.position.y - b.position.y 
	});

}

mapScene.prototype = new scene();