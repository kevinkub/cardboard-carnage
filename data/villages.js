//x: slot 0-3,  y: lane 0-4
var villages = {
	holzhausen: {
		name: 'Woodcutter Lake',
		img: 'img/map/villages/village01.png',
		difficulty: "not existent",
		position: new V2( 205, 312 ),

		enemies: [
			{ type: 'farmer', position: new V2( 0, 0 )},
			{ type: 'farmer', position: new V2( 1, 1 )},
			{ type: 'cow', position: new V2( 2, 3 )},
			{ type: 'farmer', position: new V2( 1, 4 )}
		],

		buildings: [
			{ type: 'farm', position: new V2( 2, 0 )},
			{ type: 'house', position: new V2( 3, 3 )},
			{ type: 'farm', position: new V2( 2, 4 )}
		]
	},

	timbercrick: {
		name: 'Timbercrick',
		img: 'img/map/villages/village02.png',
		difficulty: "way too easy",
		position: new V2( 122, 380 ),

		enemies: [
			{ type: 'farmer', position: new V2( 3, 0 )},
			{ type: 'cow', position: new V2( 1, 1 )},
			{ type: 'farmer', position: new V2( 0, 2 )},
			{ type: 'boy', position: new V2( 2, 3 )},
			{ type: 'farmer', position: new V2( 1, 4 )}
		],

		buildings: [
			{ type: 'farm', position: new V2( 2, 0 )},
			{ type: 'house', position: new V2( 3, 1 )},
			{ type: 'farm', position: new V2( 1, 2 )},
			{ type: 'house', position: new V2( 2, 3 )}
		]
	},

	gloryhills: {
		name: 'Glory Hills',
		img: 'img/map/villages/village03.png',
		difficulty: "easy",
		position: new V2( 180, 470 ),

		enemies: [
			{ type: 'farmer', position: new V2( 0, 0 )},
			{ type: 'boy', position: new V2( 1, 1 )},
			{ type: 'farmer', position: new V2( 2, 2 )},
			{ type: 'cow', position: new V2( 3, 3 )},
			{ type: 'novice', position: new V2( 2, 4 )}
		],

		buildings: [
			{ type: 'farm', position: new V2( 0, 0 )},
			{ type: 'house', position: new V2( 1, 1 )},
			{ type: 'farm', position: new V2( 0, 2 )},
			{ type: 'house', position: new V2( 2, 3 )},
			{ type: 'villa', position: new V2( 3, 4 )}
		]
	},

	goldburn: {
		name: 'Goldburn',
		img: 'img/map/villages/village04.png',
		difficulty: "small amounts of challenge",
		position: new V2( 340, 495 ),

		enemies: [
			{ type: 'cow', position: new V2( 1, 0 )},
			{ type: 'cow', position: new V2( 3, 1 )},
			{ type: 'farmer', position: new V2( 0, 2 )},
			{ type: 'archer', position: new V2( 2, 3 )},
			{ type: 'farmer', position: new V2( 1, 4 )}
		],

		buildings: [
			{ type: 'house', position: new V2( 1, 0 )},
			{ type: 'farm', position: new V2( 0, 1 )},
			{ type: 'house', position: new V2( 2, 2 )},
			{ type: 'villa', position: new V2( 1, 3 )},
			{ type: 'farm', position: new V2( 3, 4 )}
		]
	},

	camp: {
		name: 'Camp Appleshaw',
		img: 'img/map/villages/village05.png',
		difficulty: "interesting",
		position: new V2( 512, 480 ),

		enemies: [
			{ type: 'farmer', position: new V2( 1, 0 )},
			{ type: 'boy', position: new V2( 1, 1 )},
			{ type: 'wizard', position: new V2( 1, 2 )},
			{ type: 'boy', position: new V2( 1, 3 )},
			{ type: 'wizard', position: new V2( 3, 2 )}
		],

		buildings: [
			{ type: 'farm', position: new V2( 3, 0 )},
			{ type: 'house', position: new V2( 1, 1 )},
			{ type: 'tower', position: new V2( 0, 2 )},
			{ type: 'villa', position: new V2( 2, 3 )},
			{ type: 'farm', position: new V2( 3, 4 )}
		]
	},

	hotvale: {
		name: 'Hotvale',
		img: 'img/map/villages/village06.png',
		difficulty: "getting harder here",
		position: new V2( 590, 390 ),

		enemies: [
			{ type: 'archer', position: new V2( 2, 0 )},
			{ type: 'novice', position: new V2( 1, 0 )},
			{ type: 'farmer', position: new V2( 2, 2 )},
			{ type: 'knight', position: new V2( 3, 3 )},
			{ type: 'cow', position: new V2( 0, 4 )}
		],

		buildings: [
			{ type: 'tower', position: new V2( 2, 0 )},
			{ type: 'farm', position: new V2( 1, 1 )},
			{ type: 'farm', position: new V2( 0, 2 )},
			{ type: 'castle', position: new V2( 2, 3 )},
			{ type: 'villa', position: new V2( 1, 4 )}
		]
	},

	pinehood: {
		name: 'Pinehood',
		img: 'img/map/villages/village07.png',
		difficulty: "grow some balls",
		position: new V2( 500, 330 ),

		enemies: [
			{ type: 'farmer', position: new V2( 0, 0 )},
			{ type: 'farmer', position: new V2( 1, 1 )},
			{ type: 'boy', position: new V2( 0, 2 )},
			{ type: 'novice', position: new V2( 1, 3 )},
			{ type: 'farmer', position: new V2( 0, 4 )},
			{ type: 'farmer', position: new V2( 1, 0 )},
			{ type: 'wizard', position: new V2( 2, 1 )},
			{ type: 'knight', position: new V2( 3, 2 )},
			{ type: 'wizard', position: new V2( 2, 3 )},
			{ type: 'farmer', position: new V2( 1, 4 )}
		],

		buildings: [
			{ type: 'house', position: new V2( 2, 0 )},
			{ type: 'tower', position: new V2( 1, 1 )},
			{ type: 'castle', position: new V2( 0, 2 )},
			{ type: 'tower', position: new V2( 2, 3 )},
			{ type: 'house', position: new V2( 3, 4 )}
		]
	},

	pittgrove: {
		name: 'Pittgrove',
		img: 'img/map/villages/village08.png',
		difficulty: "you will fail",
		position: new V2( 405, 280 ),

		enemies: [
			{ type: 'farmer', position: new V2( 1, 0 )},
			{ type: 'archer', position: new V2( 3, 0 )},
			{ type: 'cow', position: new V2( 2, 1 )},
			{ type: 'cow', position: new V2( 3, 1 )},
			{ type: 'knight', position: new V2( 0, 2 )},
			{ type: 'wizard', position: new V2( 2, 2 )},
			{ type: 'boy', position: new V2( 1, 3 )},
			{ type: 'knight', position: new V2( 3, 3 )},
			{ type: 'boy', position: new V2( 0, 4 )},
			{ type: 'wizard', position: new V2( 1, 4 )},
			{ type: 'archer', position: new V2( 3, 4 )}
		],

		buildings: [
			{ type: 'villa', position: new V2( 1, 0 )},
			{ type: 'villa', position: new V2( 1, 1 )},
			{ type: 'farm', position: new V2( 1, 2 )},
			{ type: 'house', position: new V2( 2, 2 )},
			{ type: 'tower', position: new V2( 3, 2 )},
			{ type: 'tower', position: new V2( 1, 3 )},
			{ type: 'castle', position: new V2( 1, 4 )}
		]
	},

	hammerport: {
		name: 'Hammerport',
		img: 'img/map/villages/village09.png',
		difficulty: "no chance without cheating",
		position: new V2( 310, 285 ),

		enemies: [
			{ type: 'farmer', position: new V2( 0, 0 )},
			{ type: 'farmer', position: new V2( 0, 1 )},
			{ type: 'farmer', position: new V2( 0, 2 )},
			{ type: 'farmer', position: new V2( 0, 3 )},
			{ type: 'farmer', position: new V2( 0, 4 )},
			{ type: 'boy', position: new V2( 1, 0 )},
			{ type: 'novice', position: new V2( 1, 1 )},
			{ type: 'cow', position: new V2( 1, 2 )},
			{ type: 'boy', position: new V2( 1, 3 )},
			{ type: 'cow', position: new V2( 1, 4 )},
			{ type: 'archer', position: new V2( 2, 0 )},
			{ type: 'knight', position: new V2( 3, 1 )},
			{ type: 'knight', position: new V2( 2, 2 )},
			{ type: 'wizard', position: new V2( 3, 3 )},
			{ type: 'farmer', position: new V2( 2, 4 )}
		],

		buildings: [
			{ type: 'tower', position: new V2( 3, 0 )},
			{ type: 'villa', position: new V2( 1, 0 )},
			{ type: 'house', position: new V2( 2, 1 )},
			{ type: 'tower', position: new V2( 0, 1 )},
			{ type: 'castle', position: new V2( 1, 2 )},
			{ type: 'castle', position: new V2( 2, 3 )},
			{ type: 'farm', position: new V2( 0, 4 )},
			{ type: 'farm', position: new V2( 1, 4 )},
			{ type: 'farm', position: new V2( 3, 4 )}
		]
	},

	castle: {
		name: 'Princess Castle',
		img: 'img/map/villages/village10.png',
		difficulty: "lol, serious?",
		position: new V2( 340, 375 ),

		enemies: [
			{ type: 'boy', position: new V2( 0, 0 )},
			{ type: 'knight', position: new V2( 1, 0 )},
			{ type: 'knight', position: new V2( 2, 0 )},
			{ type: 'wizard', position: new V2( 3, 0 )},
			{ type: 'farmer', position: new V2( 0, 1 )},
			{ type: 'novice', position: new V2( 0, 2 )},
			{ type: 'cow', position: new V2( 0, 3 )},
			{ type: 'novice', position: new V2( 0, 4 )},
			
			{ type: 'farmer', position: new V2( 1, 1 )},
			{ type: 'archer', position: new V2( 1, 2 )},
			{ type: 'wizard', position: new V2( 1, 3 )},
			{ type: 'wizard', position: new V2( 1, 4 )},
			
			{ type: 'cow', position: new V2( 2, 1 )},
			{ type: 'archer', position: new V2( 2, 2 )},
			{ type: 'archer', position: new V2( 2, 3 )},
			{ type: 'farmer', position: new V2( 2, 4 )},
			
			{ type: 'knight', position: new V2( 3, 1 )},
			{ type: 'knight', position: new V2( 3, 2 )},
			{ type: 'knight', position: new V2( 3, 3 )},
			{ type: 'archer', position: new V2( 3, 4 )}
		],

		buildings: [
			{ type: 'castle', position: new V2( 0, 0 )},
			{ type: 'castle', position: new V2( 1, 0 )},
			{ type: 'castle', position: new V2( 1, 1 )},
			{ type: 'castle', position: new V2( 2, 1 )},
			{ type: 'castle', position: new V2( 2, 2 )},
			{ type: 'castle', position: new V2( 3, 2 )},
			{ type: 'castle', position: new V2( 1, 3 )},
			{ type: 'castle', position: new V2( 2, 3 )},
			{ type: 'castle', position: new V2( 0, 4 )},
			{ type: 'castle', position: new V2( 1, 4 )},
			{ type: 'tower', position: new V2( 0, 2 )}
		]
	}
}