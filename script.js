function computerPlay() {
    let randomNumber = Math.floor(Math.random()*3 + 1);
    if (randomNumber === 1) {
        return 'Rock';
    } else if (randomNumber === 2) {
        return 'Paper';
    } else if (randomNumber === 3) {
        return 'Scissors';
    } else {
        return console.error('randomNumber invalid');
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    /*
    Rock + Paper
    Rock + Scissors

    Paper + Rock
    Paper + Scissors

    Scissors + Rock
    Scissors + Paper

    1. Inicialmente avalia-se a escolha do jogador;
    2. O algoritmo entrará em umas das tres condições;
    3. Agora avalia-se a escolha do computador;
    4. O computador avaliará uma das três codições.

    */

    if (playerSelection === 'ROCK') 
    {
        if (computerSelection == 'ROCK')
        {
            return "It's a tie! Rock ties with Rock";
        } 
        else if (computerSelection === 'PAPER') 
        {
            return "You lost! Paper beats Rock";
        } 
        else if (computerSelection === 'SCISSORS') 
        {
            return "You won! Rock beats Scissors";
        } 
        else 
        {
            return 'Invalid input!';
        }
    } 
    else if (playerSelection === 'PAPER')
    {
        if (computerSelection == 'ROCK')
        {
            return "You won! Paper beats Rock";
        }
        else if (computerSelection === 'PAPER')
        {
            return "It's a tie! Paper ties with Paper";
        }
        else if (computerSelection === 'SCISSORS')
        {
            return "You lost! Scissors beats Paper";
        }
        else
        {
            return 'Invalid input!';
        }
    } 
    else if (playerSelection === 'SCISSORS')
    {
        if (computerSelection == 'ROCK')
        {
            return "You lost! Rock beats Scissors";
        }
        else if (computerSelection === 'PAPER')
        {
            return "You won! Scissors beats Paper";
        }
        else if (computerSelection === 'SCISSORS')
        {
            return "It's a tie! Scissors ties with Scissors";
        } 
        else
        {
            return 'Invalid input!';
        }
    } 
    else
    {
        return 'Invalid input!';
    }
}


const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
