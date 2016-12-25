function handleInstructionsModal() {
	// when users click on the element with
	// `.js-what` class, we'll fade in
	// the instructions modal
	$('.js-what').click(function() {
		$('.overlay').fadeIn(1000);
	});

	// when users click on the element with the
	// `.js-close` class, we'll fade out
	// the instructions modal
	$('.js-close').click(function(){
  		$(".overlay").fadeOut(1000);
  	});
}


// `$(document).ready` lets you specify a
// function that should execute when all the
// resources required by your web page have loaded.
// This code says, when the document is ready, run the
// `handleInstructionsModal` function.
$(document).ready(function(){
	handleInstructionsModal();
	//When a new game starts, a secret number between
	//1 and 100 is generated
	var startGame = Math.floor((Math.random() * 100)+1);

	$('#js-guess-submit').click(function(){
		console.log($('#js-guess-submit'));
		var enteredNum = parseInt($('#js-user-guess').val());
		//Check that input is between 1 and 100 else alert user.
		if (enteredNum >=1 && enteredNum <= 100){
		//Record each guess as 'li' in 'ul #guessList'
		$('.guessBox').prepend(
			$('<li>'+ $('.text').val()+ '</li>'));
		//Track number of user guesses in 'span #count'
		var guessNum = $('.guessBox li').length;
		$('.count').text(guessNum);
		} else {
			alert("Please enter number between 1 and 100.");
		}
	});
});

//'.js-new-game' class will create a new game

//When a new game starts, a secret number between
//1 and 100 is generated

//Add guess feedback to 'h2 #feedback'
//If guess is more than 50 away from number it's Ice Cold
//If guess is between 30 - 50 away from the number it's Cold
//If guess is between 20 - 30 away from number it's Warm
//If guess is between 1 - 10 away from number it's Very Hot

//Track number of user guesses in 'span #count'

//Record each guess as 'li' in 'ul #guessList'

//If the input is not a number between 1 and 100
//tell user the entry is invalid.