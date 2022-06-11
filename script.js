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

function playRound(playerSelection, computerSelection)
{
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
             console.log("It's a tie! Rock ties with Rock");
             return 0;
        } 
        else if (computerSelection === 'PAPER') 
        {
             console.log("You lost! Paper beats Rock");
             return false;
        } 
        else if (computerSelection === 'SCISSORS') 
        {
             console.log("You won! Rock beats Scissors");
             return true;
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
             console.log("You won! Paper beats Rock");
             return true;
        }
        else if (computerSelection === 'PAPER')
        {
             console.log("It's a tie! Paper ties with Paper");
             return 0;
        }
        else if (computerSelection === 'SCISSORS')
        {
             console.log("You lost! Scissors beats Paper");
             return false;
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
             console.log("You lost! Rock beats Scissors");
             return false;
        }
        else if (computerSelection === 'PAPER')
        {
             console.log("You won! Scissors beats Paper");
             return true;
        }
        else if (computerSelection === 'SCISSORS')
        {
             console.log("It's a tie! Scissors ties with Scissors");
             return 0;
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

function game()
{
    let scorePlayer = 0;
    let scoreComputer = 0;
    let playerSelection;
    let computerSelection;
    let result;

    for (i = 0; i < 5; i++)
    {
        console.log(`Round: ${i+1}`);
        playerSelection = prompt('Rock, Paper or Scissors?');
        computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);
        if (result === undefined)
        {
            console.log('Invalid. Try again:');
            i--;
        }
        else if (result === true)
        {
            ++scorePlayer;
            console.log(`Score:\n Player: ${scorePlayer}\n Computer: ${scoreComputer}`);
        }
        else if (result === false)
        {
            ++scoreComputer;
            console.log(`Score:\n Player: ${scorePlayer}\n Computer: ${scoreComputer}`);
        }
        else if (result === 0)
        {
            console.log(`Score:\n Player: ${scorePlayer}\n Computer: ${scoreComputer}`);
        }
        else
        {
            console.error('Error');
        }
    }

    if (scorePlayer > scoreComputer) 
    {
        console.log("You Won!");
    }
    else if (scorePlayer < scoreComputer)
    {
        console.log("You Lost");
    }
    else
    {
        console.log("It's a tie!");
    }
}