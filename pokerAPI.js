/* Los diferentes tipos de mano que puede haber, incluido un BUST */
var manos = [
	/*twoOfKind = [
		{"rank":"two", "suit":"spades"},
		{"rank":"three", "suit":"hearts"},
		{"rank":"two", "suit":"clubs"},
		{"rank":"eight", "suit":"diamonds"},
		{"rank":"king", "suit":"clubs"}
	],/*

	twoPair = [
		{"rank":"two", "suit":"spades"},
		{"rank":"three", "suit":"hearts"},
		{"rank":"two", "suit":"clubs"},
		{"rank":"three", "suit":"diamonds"},
		{"rank":"king", "suit":"clubs"}
	],
*/
	threeOfKind = [
		{"rank":"two", "suit":"spades"},
		{"rank":"two", "suit":"hearts"},
		{"rank":"two", "suit":"clubs"},
		{"rank":"eight", "suit":"diamonds"},
		{"rank":"king", "suit":"clubs"}
	]/*,

	straight = [
		{"rank":"two", "suit":"spades"},
		{"rank":"three", "suit":"hearts"},
		{"rank":"four", "suit":"clubs"},
		{"rank":"five", "suit":"diamonds"},
		{"rank":"ace", "suit":"clubs"}
	],

	flush = [
		{"rank":"two", "suit":"hearts"},
		{"rank":"four", "suit":"hearts"},
		{"rank":"queen", "suit":"hearts"},
		{"rank":"eight", "suit":"hearts"},
		{"rank":"king", "suit":"hearts"}
	],

	fullHouse = [
		{"rank":"two", "suit":"spades"},
		{"rank":"two", "suit":"hearts"},
		{"rank":"three", "suit":"clubs"},
		{"rank":"three", "suit":"diamonds"},
		{"rank":"three", "suit":"spades"}
	],

	fourOfKind = [
		{"rank":"five", "suit":"spades"},
		{"rank":"five", "suit":"hearts"},
		{"rank":"five", "suit":"clubs"},
		{"rank":"five", "suit":"diamonds"},
		{"rank":"three", "suit":"spades"}
	],

	straightFlush = [
		{"rank":"four", "suit":"hearts"},
		{"rank":"five", "suit":"hearts"},
		{"rank":"six", "suit":"hearts"},
		{"rank":"seven", "suit":"hearts"},
		{"rank":"eight", "suit":"hearts"}
	],

	royalFlush = [
		{"rank":"ten", "suit":"hearts"},
		{"rank":"joker", "suit":"hearts"},
		{"rank":"queen", "suit":"hearts"},
		{"rank":"king", "suit":"hearts"},
		{"rank":"ace", "suit":"hearts"}
	],

	bust = [
		{"rank":"two", "suit":"hearts"},
		{"rank":"six", "suit":"spades"},
		{"rank":"ace", "suit":"clubs"},
		{"rank":"king", "suit":"diamonds"},
		{"rank":"five", "suit":"hearts"}
	]*/
];

/* Obtiene los ranks de una mano dada*/
var getRanks = function (hand) {
	ranks = hand.map(function (card) {
		return card.rank;
	});
	return ranks;
}


/* Checa si hay n items en un array */
var hasNitems = function(arr, find, n){
	var count = 0, found = false;

	for (var i = 0; i < arr.length ; i++) {
		if(arr[i] == find){ count+= 1; }

		if(count == n){
			found = true;
		}
	}

	return found;
}

/* Punto de entrada */
var main = function (toDoObjects) {
	var ranks = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];// "joker", "queen", "king"];
	var poker = ["Two of a Kind", "Three of a Kind", "Four of a kind"];

	var hasTwoOfKind = false;
	var hasThreeOfKind = false;
	var hasFourOfKind = false;
	var resultados = [];

	manos.forEach(function (hand) {
		hand_ranks = getRanks(hand);


		ranks.forEach(function (rank) {
			hasTwoOfKind = hasNitems(hand_ranks, rank, 2);
			hasThreeOfKind = hasNitems(hand_ranks, rank, 3);
			hasFourOfKind = hasNitems(hand_ranks, rank, 4);

			resultados.push([hand_ranks, hasTwoOfKind, hasThreeOfKind, hasFourOfKind]);
			/*
			if(hasNitems(getRanks(hand), rank, posOffset)){
				console.log("This hand: [" + getRanks(hand) + "] has a " + posOffset + " of a kind");
				console.log("---------------------\n\n");
			}else{
				//console.log("This hand: [" + getRanks(hand) + "] has nothing for " + rank);
			}*/
		});
	});

	for (var i = 0; i < ranks.length; i++) {
		if(resultados[i].includes(true)){
			for (var j = 0; j < poker.length; j++) {
				if(resultados[i][j+1]){
					console.log("This hand: " + resultados[i][0]);
					console.log("Has: " + poker[j] + "\n\n");
				}
			}
		}
	}
}

$(document).ready(main);
