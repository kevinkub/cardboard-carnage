var parts = {
	//--------------HUMAN------------------------------------------------
	human_torso: {
		type: 'torso',
		name: 'Human, rotten',
		cost: 400,

		stats: {
			life: 80,
			speed: 40,
			att: 80,
			aggro: 40,
			def_melee: 80,
			def_ranged: 60,
			def_magic: 20
		},

		img: 'img/parts/zombie_body.png',
		anchor: new V2( 50, 80 ),
		slots: [
			{ type: 'head', anchor: new V2( 66, 16 )},
			{ type: 'arms', anchor: new V2( 35, 31 )},
			{ type: 'legs', anchor: new V2( 13, 139 )}
		]
	},
	human_head: {
		type: 'head',
		name: 'Human, kind of',
		cost: 100,

		stats: {
			life: 20,
			speed: 10,
			att: 20,
			aggro: 10,
			def_melee: 20,
			def_ranged: 15,
			def_magic: 5
		},

		img: 'img/parts/zombie_head.png',
		anchor: new V2( 43, 76 ),
		slots: []
	},
	human_arms: {
		type: 'arms',
		name: 'Human, former',
		cost: 250,

		stats: {
			life: 50,
			speed: 25,
			att: 50,
			aggro: 25,
			def_melee: 50,
			def_ranged: 37.5,
			def_magic: 37.5
		},

		img: 'img/parts/zombie_arm.png',
		dist: 50,
		anchor: new V2( 18, 20 ),
		slots: []
	},
	human_legs: {
		type: 'legs',
		name: 'Human, pair of',
		cost: 250,

		stats: {
			life: 50,
			speed: 25,
			att: 50,
			aggro: 25,
			def_melee: 50,
			def_ranged: 37.5,
			def_magic: 37.5
		},

		img: 'img/parts/zombie_leg.png',
		dist: 35,
		anchor: new V2( 38, 21 ),
		slots: []
	},
	human_heart: {
		type: 'heart',
		name: 'Human',
		cost: -1000,

		stats: {	},

		img: 'img/parts/zombie_heart.png',
		anchor: new V2( 30, 30 ),
		slots: []
	},
	
	//--------------UNICORN------------------------------------------------
	unicorn_torso: {
		type: 'torso',
		name: 'Unicorn',
		cost: 240,

		stats: {
			life: 24,
			speed: 72,
			att: 48,
			aggro: 12,
			def_melee: 24,
			def_ranged: 24,
			def_magic: 36
		},

		img: 'img/parts/unicorn_body.png',
		anchor: new V2( 50, 80 ),
		slots: [
			{ type: 'head', anchor: new V2( 76, 38 )},
			{ type: 'arms', anchor: new V2( 51, 51 )},
			{ type: 'legs', anchor: new V2( 25, 143 )}
		]
	},
	unicorn_head: {
		type: 'head',
		name: 'Unicorn',
		cost: 240,

		stats: {
			life: 24,
			speed: 72,
			att: 48,
			aggro: 12,
			def_melee: 24,
			def_ranged: 24,
			def_magic: 36
		},

		img: 'img/parts/unicorn_head.png',
		anchor: new V2( 35, 82 ),
		slots: []
	},
	unicorn_arms: {
		type: 'arms',
		name: 'Unicorn',
		cost: 240,

		stats: {
			life: 24,
			speed: 72,
			att: 48,
			aggro: 12,
			def_melee: 24,
			def_ranged: 24,
			def_magic: 36
		},

		img: 'img/parts/unicorn_arm.png',
		dist: 50,
		anchor: new V2( 25, 22 ),
		slots: []
	},
	unicorn_legs: {
		type: 'legs',
		name: 'Unicorn',
		cost: 480,

		stats: {
			life: 48,
			speed: 144,
			att: 96,
			aggro: 24,
			def_melee: 48,
			def_ranged: 48,
			def_magic: 72
		},

		img: 'img/parts/unicorn_leg.png',
		dist: 30,
		anchor: new V2( 35, 28 ),
		slots: []
	},
	unicorn_heart: {
		type: 'heart',
		name: 'Unicorn',
		cost: -1200,

		stats: {	},

		img: 'img/parts/unicorn_heart.png',
		anchor: new V2( 30, 30 ),
		slots: []
	},
	
	//--------------SPITSHARK------------------------------------------------
	spitshark_torso: {
		type: 'torso',
		name: 'Spitshark',
		cost: 420,

		stats: {
			life: 63,
			speed: 63,
			att: 105,
			aggro: 21,
			def_melee: 21,
			def_ranged: 126,
			def_magic: 21
		},

		img: 'img/parts/spuckhai_body.png',
		anchor: new V2( 50, 80 ),
		slots: [
			{ type: 'head', anchor: new V2( 70, 16 )},
			{ type: 'arms', anchor: new V2( 34, 38 )},
			{ type: 'legs', anchor: new V2( 19, 135 )}
		]
	},
	spitshark_head: {
		type: 'head',
		name: 'Spitshark',
		cost: 70,

		stats: {
			life: 10.5,
			speed: 10.5,
			att: 17.5,
			aggro: 3.5,
			def_melee: 3.5,
			def_ranged: 21,
			def_magic: 3.5
		},

		img: 'img/parts/spuckhai_head.png',
		anchor: new V2( 42, 66 ),
		slots: []
	},
	spitshark_arms: {
		type: 'arms',
		name: 'Spitshark',
		cost: 490,

		stats: {
			life: 73.5,
			speed: 73.5,
			att: 122.5,
			aggro: 24.5,
			def_melee: 24.5,
			def_ranged: 147,
			def_magic: 24.5
		},

		img: 'img/parts/spuckhai_arm.png',
		dist: 60,
		anchor: new V2( 25, 14 ),
		slots: []
	},
	spitshark_legs: {
		type: 'legs',
		name: 'Spitshark',
		cost: 420,

		stats: {
			life: 63,
			speed: 63,
			att: 105,
			aggro: 21,
			def_melee: 21,
			def_ranged: 126,
			def_magic: 21
		},

		img: 'img/parts/spuckhai_leg.png',
		dist: 36,
		anchor: new V2( 40, 20 ),
		slots: []
	},
	spitshark_heart: {
		type: 'heart',
		name: 'Spitshark',
		cost: -1400,

		stats: {	},

		img: 'img/parts/spuckhai_heart.png',
		anchor: new V2( 30, 30 ),
		slots: []
	},
	
	
	//--------------CLAWFINGER------------------------------------------------
	clawfinger_torso: {
		type: 'torso',
		name: 'Clawfinger',
		cost: 480,

		stats: {
			life: 48,
			speed: 96,
			att: 168,
			aggro: 72,
			def_melee: 24,
			def_ranged: 24,
			def_magic: 48
		},

		img: 'img/parts/clawfinger_body.png',
		anchor: new V2( 50, 100 ),
		slots: [
			{ type: 'head', anchor: new V2( 67, 25 )},
			{ type: 'arms', anchor: new V2( 36, 43 )},
			{ type: 'legs', anchor: new V2( 20, 152 )}
		]
	},
	clawfinger_head: {
		type: 'head',
		name: 'Clawfinger',
		cost: 320,

		stats: {
			life: 32,
			speed: 64,
			att: 112,
			aggro: 48,
			def_melee: 16,
			def_ranged: 16,
			def_magic: 32
		},

		img: 'img/parts/clawfinger_head.png',
		anchor: new V2( 24, 64 ),
		slots: []
	},
	clawfinger_arms: {
		type: 'arms',
		name: 'Clawfinger',
		cost: 640,

		stats: {
			life: 64,
			speed: 128,
			att: 224,
			aggro: 96,
			def_melee: 32,
			def_ranged: 32,
			def_magic: 64
		},

		img: 'img/parts/clawfinger_arm.png',
		dist: 50,
		anchor: new V2( 20, 20 ),
		slots: []
	},
	clawfinger_legs: {
		type: 'legs',
		name: 'Clawfinger',
		cost: 160,

		stats: {
			life: 16,
			speed: 32,
			att: 56,
			aggro: 24,
			def_melee: 8,
			def_ranged: 8,
			def_magic: 16
		},

		img: 'img/parts/clawfinger_leg.png',
		dist: 25,
		anchor: new V2( 48, 29 ),
		slots: []
	},
	clawfinger_heart: {
		type: 'heart',
		name: 'Clawfinger',
		cost: -1600,

		stats: {	},

		img: 'img/parts/clawfinger_heart.png',
		anchor: new V2( 30, 30 ),
		slots: []
	},
	
	
	//--------------TANKTURTLE------------------------------------------------
	tankturtle_torso: {
		type: 'torso',
		name: 'Tankturtle',
		cost: 720,

		stats: {
			life: 180,
			speed: 36,
			att: 108,
			aggro: 108,
			def_melee: 180,
			def_ranged: 72,
			def_magic: 36
		},

		img: 'img/parts/tankturtle_body.png',
		anchor: new V2( 50, 70 ),
		slots: [
			{ type: 'head', anchor: new V2( 80, 15 )},
			{ type: 'arms', anchor: new V2( 54, 45 )},
			{ type: 'legs', anchor: new V2( 40, 119 )}
		]
	},
	tankturtle_head: {
		type: 'head',
		name: 'Tankturtle',
		cost: 360,

		stats: {
			life: 90,
			speed: 18,
			att: 54,
			aggro: 54,
			def_melee: 90,
			def_ranged: 18,
			def_magic: 36
		},

		img: 'img/parts/tankturtle_head.png',
		anchor: new V2( 40, 105 ),
		slots: []
	},
	tankturtle_arms: {
		type: 'arms',
		name: 'Tankturtle',
		cost: 360,

		stats: {
			life: 90,
			speed: 18,
			att: 54,
			aggro: 54,
			def_melee: 90,
			def_ranged: 36,
			def_magic: 18
		},

		img: 'img/parts/tankturtle_arm.png',
		dist: 50,
		anchor: new V2( 28, 24 ),
		slots: []
	},
	tankturtle_legs: {
		type: 'legs',
		name: 'Tankturtle',
		cost: 360,

		stats: {
			life: 90,
			speed: 18,
			att: 54,
			aggro: 54,
			def_melee: 90,
			def_ranged: 36,
			def_magic: 18
		},

		img: 'img/parts/tankturtle_leg.png',
		dist: 25,
		anchor: new V2( 37, 22 ),
		slots: []
	},
	tankturtle_heart: {
		type: 'heart',
		name: 'Tankturtle',
		cost: -1800,

		stats: {	},

		img: 'img/parts/tankturtle_heart.png',
		anchor: new V2( 30, 30 ),
		slots: []
	},
	
	
	//--------------Elderly Dragon------------------------------------------------
	dragon_torso: {
		type: 'torso',
		name: 'Elderly Dragon',
		cost: 900,

		stats: {
			life: 180,
			speed: 13.5,
			att: 135,
			aggro: 180,
			def_melee: 90,
			def_ranged: 121.5,
			def_magic: 180
		},

		img: 'img/parts/dragon_body.png',
		anchor: new V2( 50, 70 ),
		slots: [
			{ type: 'head', anchor: new V2( 62, 17 )},
			{ type: 'arms', anchor: new V2( 37, 31 )},
			{ type: 'legs', anchor: new V2( 26, 126 )}
		]
	},
	dragon_head: {
		type: 'head',
		name: 'Elderly Dragon',
		cost: 500,

		stats: {
			life: 100,
			speed: 7.5,
			att: 75,
			aggro: 100,
			def_melee: 50,
			def_ranged: 67.5,
			def_magic: 100
		},

		img: 'img/parts/dragon_head.png',
		anchor: new V2( 37, 73 ),
		slots: []
	},
	dragon_arms: {
		type: 'arms',
		name: 'Elderly Dragon',
		cost: 200,

		stats: {
			life: 40,
			speed: 3,
			att: 30,
			aggro: 40,
			def_melee: 20,
			def_ranged: 27,
			def_magic: 40
		},

		img: 'img/parts/dragon_arm.png',
		dist: 50,
		anchor: new V2( 21, 18 ),
		slots: []
	},
	dragon_legs: {
		type: 'legs',
		name: 'Elderly Dragon',
		cost: 400,

		stats: {
			life: 80,
			speed: 6,
			att: 60,
			aggro: 80,
			def_melee: 30,
			def_ranged: 54,
			def_magic: 80
		},

		img: 'img/parts/dragon_leg.png',
		dist: 25,
		anchor: new V2( 35, 21 ),
		slots: []
	},
	dragon_heart: {
		type: 'heart',
		name: 'Elderly Dragon',
		cost: -2000,

		stats: {	},

		img: 'img/parts/dragon_heart.png',
		anchor: new V2( 30, 30 ),
		slots: []
	},
};