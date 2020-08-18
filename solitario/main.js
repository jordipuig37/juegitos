
var started = false;

// array of type card = {
	// number: 3,
	// suit: "spades"
// };
hand = []; // max amount of cards, 2 or 3
deck = [];
good = [];
bad = [];

// array of type stack = {
	// array of cards - max amount, 5
// }
stacks = []; // max amount of stacks, 3

MAX_STACK_VALUE = 20;
MAX_STACK_AMOUNT = 5;
STACKS_AMOUNT = 3;
HAND_AMOUNT = 2;
NUMBERS = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];
SUITS = ["Pic", "Trevol", "Corazon", "Rombo"];

function main() {
	if (!started) startGame();
	
	checkMove();
	dealToHand();
	
	if (hand.length) logInterface();
	else endGame();
}

function checkMove() {
	for (var i = 0; i < stacks.length; i++) {
		var stack = stacks[i];
		var value = addCardsValue(stack);
		var amountOfCards = stack.length;
		
		if (value == MAX_STACK_VALUE 
			&& amountOfCards <= MAX_STACK_AMOUNT) {
			addToGood(stack);
		
		} else if (value > MAX_STACK_VALUE 
			|| amountOfCards >= MAX_STACK_AMOUNT) {	
			addToBad(stack);
		}
	}
}

function dealToHand() {
	while (hand.length < HAND_AMOUNT && deck.length) {
		deal(1);
	}
}

function deal(cardsToDeal) {
	for (var i = 0; i < cardsToDeal; i++){
		hand.push(deck.pop());
	}
}

function addCardsValue(cards) {
	var totalValue = 0;
	
	for (var i = 0; i < cards.length; i++) {
		totalValue += getCardValue(cards[i]);
	}
	return totalValue;
}

function addToGood(stack) {
	var stackLength = stack.length;
	for (var i = 0; i < stackLength; i++) {
		good.push(stack.pop());
	}
}

function addToBad(stack) {
	var stackLength = stack.length;
	for (var i = 0; i < stackLength; i++) {
		bad.push(stack.pop());
	}
}

function getCardValue(card) {
	if (card.number == "A") {
		return 1;
	} else if (card.number == "J" 
		|| card.number == "Q"
		|| card.number == "K") {
		return 0;
	} else {
		return card.number;
	}
}