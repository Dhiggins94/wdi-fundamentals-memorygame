
let cards = [
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

},
{


	rank: 'queen',
	suit: 'hearts',
	cardImage:"images/king-of-diamonds.png",


}
];

let cardsInPlay = [];
function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}
function createBoard(){
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}
function flipCard(){
	let cardId = this.getAttribute('data-id');
	console.log('User flipped ' + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log('Card img path: ' + cards[cardId].cardImage + " and suit: " + cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2){
		checkForMatch();
	}
}
createBoard();