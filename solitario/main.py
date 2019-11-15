class Card():
    """ Class for object Card. """

    def __init__(self, num, suit):
        self.num = num
        self.suit = suit

class CardsStack():
    """ Class for a stack of cards. """
    def __init__(self, id, cards):
        self.id = id
        self.cards = cards

    def add_card(self, card):
        self.cards.append(card)

    def check_sum(self):
        s = 0
        for c in self.cards:
            if c.num < 10:
                s += c.num
        return s == 14

    def sum_points(self):
        total = 0
        sets = 0
        for c in self.cards:
            if c.num == 1:
                total += 1
            if c.num >= 10:
                total += 1
            else:
                total += c.num
        return total + sets/7

def init_deck(truco):
    deck = []
    suits = ["sword", "coin", "cup", "stick"]
    for suit in suits:
        for i in range(1,13):
            if not truco or (8 != i or i != 9):
                c = Card(i, suit)
                deck.append(c)
    return deck

def shuffle_deck(deck):
    return deck

def start_main

def main():
    print("Want 8's and 9's?", end="")
    truco = input("0 = false, 1 = true: ")
    my_deck = shuffle_deck(init_deck(truco))


main()
