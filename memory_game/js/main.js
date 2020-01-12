
var cards = [
{
rank: 'queen',
suit: 'hearts',
cardImage:"images/queen-of-hearts.png",

},

{
rank: 'queen',
suit: 'diamonds',
cardImage:"images/queen-of-diamonds.png",

},
{

rank: 'queen',
suit: 'hearts',
cardImage:"images/king-of-hearts.png",

}
{


rank: 'queen',
suit: 'hearts',
cardImage:"images/king-of-diamonds.png",


}
];

var cardsInPlay = [];

 function checkForMatch (){


if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
  
}
 }

function flipcard (cardId){


	console.log("User flipped" + cards[cardId].rank);
	cardsInPlay.push(cards[0]);

if (cardsInPlay.length === 2){

    cardsInPlay.push(cards[cardId].rank);
	checkForMatch();

	console.log(cards[cardId].suit);
		console.log(cards[cardId].cardImage);

}

}
flipcard(0);
flipcard(2);
