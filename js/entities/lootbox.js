function lootbox( loot ) {
	var listsize = 4;
	var offset = 0;

	this.loot = loot;

	var top = new V2( 180, 50 );

	var bg = new sprite( 'img/gui/lootbag.png' );

	var arrUp = top.sum( new V2( 127, 200 ) );
	arrUp.area = new Rect( arrUp, arrUp.sum( new V2( 212, 34 ) ));
	arrUp.img = new sprite( 'img/constructor/item_list_up.jpg' );
	arrUp.hover = new sprite( 'img/constructor/item_list_up_hl.jpg' );

	var arrDown = new V2( arrUp.x, arrUp.y + listsize * 40 + 50 );
	arrDown.area = new Rect( arrDown, arrDown.sum( new V2( 212, 34 ) ));
	arrDown.img = new sprite( 'img/constructor/item_list_down.jpg' );
	arrDown.hover = new sprite( 'img/constructor/item_list_down_hl.jpg' );
	
	itemImg = {
		heart: new sprite("img/constructor/joint_heart.png"),
		torso: new sprite("img/constructor/joint_body.png"),
		arms: new sprite("img/constructor/joint_arm.png"),
		legs: new sprite("img/constructor/joint_leg.png"),
		head: new sprite("img/constructor/joint_head.png")
	}
	
	var item = new sprite("img/constructor/item_element.png");

	this.click = function( pos ) {
		if( arrUp.area.inside( pos ) ) if( offset > 0 ) offset--;
		if( arrDown.area.inside( pos ) ) if( loot.length > listsize + offset ) offset++;
	}

	this.draw = function( ctx ) {
		ctx.font = '20px monospace';
		ctx.fillStyle = 'black';
		ctx.textAlign = 'left';	

		bg.draw( ctx, top.x, top.y );
		
		if( !arrUp.area.inside( mouse ) && (offset > 0) ) arrUp.img.draw( ctx, arrUp.x, arrUp.y );
		else arrUp.hover.draw( ctx, arrUp.x, arrUp.y );
		
		for(var i = 0; i < listsize; i++) {
			if(loot[i+offset]) {
				item.draw(ctx, arrUp.x, arrUp.y + 43 + 40 * i);
				ctx.fillText(loot[i+offset].name, arrUp.x + 25, arrUp.y + 65 + 40 * i);
				itemImg[loot[i+offset].type].draw( ctx, arrUp.x - 6, arrUp.y + 48 + 40 * i);
			}

		}
		
		if( !arrDown.area.inside( mouse ) && ( loot.length > listsize + offset ) ) arrDown.img.draw( ctx, arrDown.x, arrDown.y );
		else arrDown.hover.draw( ctx, arrDown.x, arrDown.y );
	}
}

