function computerPlay()
{
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

function playRound(playerSelection, computerSelection='rock')
{
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    if (playerSelection === 'ROCK') 
    {
        if (computerSelection == 'ROCK')
        {
            return ["It's a tie! Rock ties with Rock", 0];
        } 
        else if (computerSelection === 'PAPER') 
        {
            return ["You lost! Paper beats Rock", "computer"];
        } 
        else if (computerSelection === 'SCISSORS') 
        {
             return ["You won! Rock beats Scissors", "player"];
        } 
        else 
        {
            return undefined;
        }
    } 
    else if (playerSelection === 'PAPER')
    {
        if (computerSelection == 'ROCK')
        {
             return ["You won! Paper beats Rock", "player"];
        }
        else if (computerSelection === 'PAPER')
        {
             return ["It's a tie! Paper ties with Paper", 0];
        }
        else if (computerSelection === 'SCISSORS')
        {
             return ["You lost! Scissors beats Paper", "computer"];
        }
        else
        {
            return undefined;
        }
    } 
    else if (playerSelection === 'SCISSORS')
    {
        if (computerSelection == 'ROCK')
        {
             return ["You lost! Rock beats Scissors", "computer"];
        }
        else if (computerSelection === 'PAPER')
        {
             return ["You won! Scissors beats Paper", "player"];
        }
        else if (computerSelection === 'SCISSORS')
        {
             return ["It's a tie! Scissors ties with Scissors", 0];
        } 
        else
        {
            return undefined;
        }
    } 
    else
    {
        return undefined;
    }
}

function clickPlayRound(playerSelection)
{
    result = playRound(playerSelection, computerPlay());
    if (scorePlayer >= 5 || scoreComputer >= 5)
    {
        if (scorePlayer > scoreComputer)
        {
            resultShow.textContent = '🏆 Winner: Player 🏆';   
            return;
        }
        else
        {
            resultShow.textContent = '🏆 Winner: Computer 🏆';
            return;
        }
    }
    else
    {
        if (result[1] == 'player')
        {
            scorePlayer++;
        }
        else if (result[1] == 'computer')
        {
            scoreComputer++;
        }
        
        resultShow.textContent = result[0];
        scorePlayerShow.textContent = scorePlayer;
        scoreComputerShow.textContent = scoreComputer;
    }
}

// BOTTONS
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

// RESULT
const resultShow = document.querySelector('div');
const scorePlayerShow = document.querySelector('#scorePlayer');
const scoreComputerShow = document.querySelector('#scoreComputer');

let result;

let scorePlayer = 0;
let scoreComputer = 0;

rock.addEventListener('click', () => clickPlayRound('rock'));
paper.addEventListener('click', () => clickPlayRound('paper'));
scissors.addEventListener('click', () => clickPlayRound('scissors'));

