function getComputerChoice(){
    let arr=["Rock","Scissors","Paper"];
    const random = Math.floor(Math.random() * arr.length);
    return arr[random];
} 

function round(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "'It's a tie!";
      }
    else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock')
      ) {
        return 'You win! ' + playerSelection + ' beats ' + computerSelection + '!';
      }
      else {
        return 'You lose! ' + computerSelection + ' beats ' + playerSelection + '!';
      };

    }

  function playGame(n){
    for (let i = 0; i < n; i++) {
        let computerSelection=getComputerChoice();
        let playerSelection=(prompt("Enter Choice: "));
        console.log(round(playerSelection, computerSelection));

    }
}
let n=parseInt(prompt("Enter Number of Rounds: "));
playGame(n);
