/* 	Steven Sober
   	07/20/2017
   	Homework-05a
   	app.js */

// This file contains the Javascript for the Trivia game.

// OBJECTS
// ===========================================================================

var game = {

	// Basic game components:
    correctAnswers: 0,    
    wrongAnswers:   0,
    blankAnswers:   0,

    // questionArray:  ["When was the first Final Fantasy game released on the NES?",
    // 				 "Which installment introduced the job system?",
    // 				 "Which installment saw lead character Cecil switch from dark knight to white paladin?",
    // 				 "Which installment featured the underwater sport Blitzball?",
    // 				 "Which installment saw the planet nearly destroyed by Sephiroth's meteor?"],

    // answerArray:    ["1990", "1993", "1987", "1985",
    // 				 "FF III", "FF V", "FF VII", "FF IX",
    // 				 "FF IV", "FF V", "FF VI", "FF VIII",
    // 				 "FF XII", "FF X", "FF VII", "FF XIII",
    // 				 "FF II", "FF IV", "FF IX", "FF VII"];

    // Figure out what answers are correct, incorrect, and unanswered
    // and display the results.
    calculateResults: function()
    {



	},




};

// VARIABLES
// ===========================================================================
var timeLeft = 30;

// MAIN EXECUTION
// ===========================================================================
$(document).ready(function() {

	// This function is run whenever the user clicks the "Start!" button.
	$("#start-button").on("click", function() {

		var timeLeft = $("#timer-text");
		//var timeLeft = $(this);


		var timerId = setInterval(countdown, 1000);

		function countdown() {

  			if (timeLeft == 0)
  			{
    			clearTimeout(timerId);

	    		game.calculateResults();
	    	}

  			else
  			{
    			$("timer-text").text("Seconds Remaining: " + timeLeft);
    	
    			timeLeft--;
    			console.log(timeLeft);
  			}
  		}
  	});
});
