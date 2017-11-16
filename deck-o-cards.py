from random import random

class DeckOfCards():
    def __init__(self, suits, values):
        self.cards = []
        for i in range(0, len(suits)):
            for j in range(0, len(values)):
                self.cards.append({suits[i], values[j]})
        self.quantity = len(self.cards)
        print("The deck has {} cards.".format(self.quantity))
        self.shuffle(self.cards)
        print("The top card is a {}.".format(self.cards[0]))

    def shuffle(self,list):
        counter = len(list)
        while counter > 0:
            index = int(random()*counter)
            counter-=1
            temp=list[counter]
            list[counter] = list[index]
            list[index]=temp
        return list

    def poker_hand(self):
        print("Your poker hand is: ")
        hand = self.cards[:5]
        for i in range(0,len(hand)):
            print(hand[i])
        return hand



suits = ['hearts', 'diamonds', 'clubs', 'spades']
values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']


my_deck = DeckOfCards(suits, values)
my_hand = my_deck.poker_hand()
