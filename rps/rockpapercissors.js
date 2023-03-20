function getComptuterChoice(){
    let choices=['rock','paper','scissors'];
    return choices[Math.floor(Math.random()*3)];
}
//console.log(getComptuterChoice());

function playRound(playerSelection,computerSelection){
    let winner = 0;
    computerSelection=='rock'&&playerSelection.toUpperCase()=='SCISSORS' ? winner-=1 : computerSelection=='rock'&&playerSelection.toUpperCase()=='PAPER' ? winner+=1 : winner += 0;
    computerSelection=='paper'&&playerSelection.toUpperCase()=='SCISSORS' ? winner+=1 : computerSelection=='paper'&&playerSelection.toUpperCase()=='ROCK' ? winner-=1 : winner += 0;
    computerSelection=='scissors'&&playerSelection.toUpperCase()=='ROCK' ? winner+=1 : computerSelection=='scissors'&&playerSelection.toUpperCase()=='PAPER' ? winner-=1 : winner += 0;
    return winner == 1 ? `You won! ${playerSelection} beats ${computerSelection}!` :
     winner==-1 ? `You lost :( ${computerSelection} beats ${playerSelection}`:
      `Draw! ${playerSelection} is the same as ${computerSelection}`;
}
//console.log(playRound('ROCK','scissors'));

function game(){
    for(let i=0;i<5;i++){
        let p = prompt('Rock, paper, or scissors?');
        console.log(playRound(p,getComptuterChoice()));
    }
}