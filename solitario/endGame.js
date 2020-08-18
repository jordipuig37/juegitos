function endGame() {
	var goodCount = countScore(good);
	var badCount = countScore(bad);
	
	logEndGame(goodCount, badCount);
}

function countScore(cards) {
	var totalScore = 0;
	var currentAdd = 0;
	
	for (var i = 0; i < cards.length; i++) {
		var card = cards[i];
		
		if (card.number == "J" 
		|| card.number == "Q"
		|| card.number == "K") {
			totalScore++;
		} else {
			currentAdd += getCardValue(cards[i]);
		}
	}
	
	return Math.floor(totalScore + (currentAdd / (MAX_STACK_VALUE / 2)));
}

