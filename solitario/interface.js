function logInterface() {
	console.log("");
	for (var i = 0; i < STACKS_AMOUNT; i++) {
		console.log("Stack: " + i);
		for (var j = 0; j < stacks[i].length; j++){
			logCard(stacks[i][j]);
		}
		console.log("");
	}
	console.log("");
	console.log("Your hand:");
	for (var i = 0; i < hand.length; i++) {
		logCard(hand[i]);
	}
	
	function logCard(card) {
		console.log(card.number + " of " + card.suit);
	}
}

function playInStack(idStack, idCard) {
	stacks[idStack].push(hand[idCard]);
	
	hand.splice(idCard, 1);
	
	main();
}

function logEndGame(goodCount, badCount) {
	console.log("");
	console.log("Good Count: " + goodCount);
	console.log("");
	console.log("Bad Count: " + badCount);
	console.log("");
	console.log("To play again, refresh the page");
}