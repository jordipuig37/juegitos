function startGame() {
	createDeck();
	shuffleDeck();
	
	createStacks();
	
	deal(2);
	
	started = true;
}

function createDeck() {
	for (var i = 0; i < NUMBERS.length; i++) {
		for (var j = 0; j < SUITS.length; j++) {
			deck.push(createCard(NUMBERS[i], SUITS[j]));
		}
	}
}

function createCard(cardNumber, cardSuit) {
	return {
		number: cardNumber,
		suit: cardSuit
	}
}

function shuffleDeck() {
	for (var i = 0; i < deck.length; i++) {
		var randomNumber = getRandomInt(1, 52);
		
		var card = deck[i];
		deck[i] = deck[randomNumber];
		deck[randomNumber] = card;
	}
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createStacks() {
	for (var i = 0; i < STACKS_AMOUNT; i++) {
		stacks.push([]);
		
		dealToStack(i);
	}
}

function dealToStack(idStack) {
	stacks[idStack].push(deck.pop());
}