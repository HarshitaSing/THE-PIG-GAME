var scores,activePlayer,roundScore, dice;

initialise(); // calling the initialise func. at the beginning.

// Adding click event to the roll dice button using DOM 
document.querySelector('.btn-roll').addEventListener('click', function()  // creation of ANONYMOUS function. 
	{
		var dice;

		/* floor func to get the floor value of a decimal no.,
		random func to generate random nos. from 0 to 1 multiplied by 6 to get nos. 
		from 0 to 5 & plus 1 to get final values of 0 to 6(dice numbers) . */
		dice = Math.floor(Math.random() * 6) + 1;

		var DOMmanipulation = document.querySelector('.dice');  
		DOMmanipulation.style.display = 'block';
		DOMmanipulation.src = 'dice-' + dice + '.png';   // using 'src' tag to change the dice images


		if(dice !== 1)  
		{
			roundScore += dice;
			document.getElementById('current-' + activePlayer).textContent = roundScore;
		}
		else
		{
			nextPlayer(); //calling the function if dice value equals '1'
		}

	});


	// creation of ANONYMOUS function.
	// anonymous func cannot be called from anywhere.
	document.querySelector('.btn-hold').addEventListener('click', function()    
	{
		scores[activePlayer] += roundScore; 
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
		
		if(scores[activePlayer] >= 80)
		{
			document.getElementById('name-' + activePlayer).textContent = 'WINNER WINNER CHICKEN DINNER';
			document.querySelector('.dice').style.display = 'none';	
			document.querySelector('.btn-roll').style.display = 'none';	
			document.querySelector('.btn-hold').style.display = 'none';	
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');

		}
		else
			nextPlayer();
	})

	
	//when the dice value is equal to '1'
	function nextPlayer()
	{
			roundScore = 0;
			activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

			document.querySelector('#current-0').textContent = 0;
			document.querySelector('#current-1').textContent = 0;

			document.querySelector('.player-0-panel').classList.toggle('active');
			document.querySelector('.player-1-panel').classList.toggle('active');

			document.querySelector('.dice').style.display = 'none';

	}

	// passing the initialise func as a parameter without the braces, inside the event function.
	document.querySelector('.btn-new').addEventListener('click',initialise);

	// creation of initialise function when the player clicks 'New Game' option.
	function initialise()     
	{

		scores = [0,0];
		activePlayer = 0;
		roundScore = 0;

		/*new method to get an element using its ID ,
		  works faster than querySelector,
		  no use of '.' or '#' while using this method.*/
		document.getElementById('score-0').textContent = 0;
		document.getElementById('score-1').textContent = 0;
		document.getElementById('current-0').textContent = 0;
		document.getElementById('current-1').textContent = 0;
		document.getElementById('name-0').textContent = 'Player 0';
		document.getElementById('name-1').textContent = 'Player 1';

		document.querySelector('.btn-roll').style.display = 'block';	
		document.querySelector('.btn-hold').style.display = 'block';	
		
		//remove the winner CSS class from both the panels
		document.querySelector('.player-0-panel').classList.remove('winner');
		document.querySelector('.player-1-panel').classList.remove('winner');

		//add the active CSS class in the player panel.
		document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');

		//style tag for changing the display pattern of dice image 
		//remove the dice image when new game is started.
		document.querySelector('.dice').style.display = 'none';

	}


