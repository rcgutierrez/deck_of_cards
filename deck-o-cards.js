
function deck_o_cards() {
  var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  var cards = []; // deck
  var shuffledCards = []; // deck shuffled
  var pokerHand = []; // poker hand
  var objIndex = 0; //card counter
  var pokerStatement = "Your poker hand is a(n)"; //string to tell you your poker hand

  // Makes 52 card objects and store them in the "cards" array
  for (i=0; i < suits.length; i++){
    for (p=0; p < values.length; p++){
      cards[objIndex] = {suit: suits[i], value: values[p]};
      objIndex += 1;
    };
  };

  // Shuffles the cards
  function shuffle(array) {
      var counter = array.length, temp, index;
      // While there are elements in the array
      while (counter > 0) {
          // Pick a random index
          index = Math.floor(Math.random() * counter);
          // Decrease counter by 1
          counter--;
          // And swap the last element with it
          temp = array[counter];
          array[counter] = array[index];
          array[index] = temp;
      }
      return array;
  };

  shuffledCards = shuffle(cards);

  //Makes poker hand
  for (i=0; i < 5; i++){
    pokerHand[i] = shuffledCards[i];
  };

  for(i=0; i < pokerHand.length; i++){
    if (i == pokerHand.length-1){
      pokerStatement += "and a(n) " + pokerHand[i].value + " of " + pokerHand[i].suit + ". ";
      break;
    }
    pokerStatement += " " + pokerHand[i].value + " of " + pokerHand[i].suit + ",";
  }

  // Pull the top card from the newly shuffledCards

  var topCard = shuffledCards[0];

  // 3. Print the results:
  // "The deck has {n} cards"
  // "The top card is the {value} of {suit}"

  console.log("The deck has " + objIndex + " cards");
  console.log("The top card is the " + topCard.value + " of " + topCard.suit);
  console.log();
  console.log(pokerStatement);

};
