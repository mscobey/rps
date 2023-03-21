function getComputerChoice(){
    let choices=['rock','paper','scissors'];
    return choices[Math.floor(Math.random()*3)];
}

let playerWins=0;
let computerWins=0;


function playRound(event){
    let playerSelection=event.target.id;
    let computerSelection=getComputerChoice();
    let winner = '';
    document.getElementById("winner").innerHTML='';

    if(computerSelection=='rock'){
        playerSelection=='rock'?winner='draw':playerSelection=='paper'?winner='Player':winner='Computer';
    }
    else if(computerSelection=='paper'){
        playerSelection=='rock'?winner='Computer':playerSelection=='paper'?winner='draw':winner='Player';
    }
    else{
        playerSelection=='rock'?winner='Player':playerSelection=='paper'?winner='Computer':winner='draw';
    }

    if(winner!='draw'){
        document.getElementById('gameResults').innerHTML=`Player picks ${playerSelection} : Computer picks ${computerSelection} <br> ${winner} wins the round!`;

    }
    else{
        document.getElementById('gameResults').innerHTML=`Player picks ${playerSelection} : Computer picks ${computerSelection} <br> Draw!`;

    }

    winner == 'Player' ? playerWins++ : winner=='Computer' ? computerWins++ : winner='draw';
    document.getElementById("playerScore").innerHTML=`${playerWins}`;
    document.getElementById("compScore").innerHTML=`${computerWins}`;
    
    if(playerWins==5||computerWins==5){
        endGame(winner);
    }
}

function endGame(winner){
    document.getElementById("winner").innerHTML=`${winner} was the first to 5 wins!`;
    playerWins=0;
    computerWins=0;
}

document.getElementById("rock").addEventListener('click',playRound);
document.getElementById("paper").addEventListener('click',playRound);
document.getElementById("scissors").addEventListener('click',playRound);




