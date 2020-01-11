console.log("Up and running!");

console.log("User flipped " + cardOne);

console.log("User flipped " + cardTwo);

cardsInPlay = [];
cards = ["queen", "queen", "king","king"];

let cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

let cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

if (cardsInPlay.length ===2){
	if (cardsInPlay[0]) === cardsInPlay[1]{
		alert("You found a match!");
cardsInPlay.length = 0;
	} else{
	alert("You Did NOT find match!");
cardsInPlay.length = 0;
}
}