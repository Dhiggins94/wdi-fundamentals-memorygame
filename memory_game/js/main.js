
var cards = ["queen", "queen", "king","king"];
var cardsInPlay = [];

 function checkForMatch (){


if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
  
}
 }

function flipcard (cardId){

	console.log("User flipped queen" + cards[cardId]);
	cardsInPlay.push(cards[0]);

if (cardsInPlay.length === 2){
	checkForMatch();

	
}

}
flipcard(0);
flipcard(2);
