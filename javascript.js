function getComputerChoice(){
  let arr=["Rock","Scissors","Paper"];
  const random = Math.floor(Math.random() * arr.length);
  return arr[random];
}


function round(playerSelection, computerSelection){



  
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  const res=document.querySelector("#Result");
  const text=document.createElement("p");
  text.classList.add("text");
  const nump=document.createElement("div");
  const numc=document.createElement("div");
  const counter=document.querySelector(".count");
  nump.classList.add("nump");
  numc.classList.add("numc");
  
  if (playerSelection === computerSelection) {
    text.textContent="'It's a tie!";
    
    }
  else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'scissors' && computerSelection === 'paper') ||
      (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
      playerCount=playerCount+1;

      text.textContent='You win! ' + playerSelection + ' beats ' + computerSelection + '!';

      }
    else {
      computerCount=computerCount+1;

      text.textContent= 'You lose! ' + computerSelection + ' beats ' + playerSelection + '!';
      
    };
   
    res.setAttribute("style", "color:#003153; font-size:22px; font-weight:bold; display:flex ; flex-flow:column wrap; align-items:center; background-color:#94e5ff; margin:0px 700px; border-radius:50px");
    res.appendChild(text);
    counter.textContent = '';
    counter.textContent= `Player: ${playerCount}               |              Computer: ${computerCount}`;
   
    let r=checkWinner();
    if(r===true){
      playerCount = 0;
      computerCount = 0;
      const counter = document.querySelector(".count");
      counter.textContent = `Player: 0              |              Computer: 0`;
   
      setTimeout(function () {
        const res= document.querySelector("#Result");
        res.textContent="New Game";
      
      }, 1000);
      
      
    }
    
    
  }


function playGame(){

  let computerSelection=null;
  let playerSelection='';
  
  
 
  const con= document.querySelectorAll("button");

    con.forEach((button) => {
      button.addEventListener("click", (event) => {
        playerSelection = event.target.id;
        computerSelection=getComputerChoice();
        
        round(playerSelection, computerSelection);
        
  });
});
}

function checkWinner() {
  if (playerCount === 5 || computerCount === 5) {
    const winner =
      playerCount === 5
        ? "You win the game! Congratulations!"
        : "Computer wins the game! Try again next time!";
    alert(winner);

    return true;
  }
  return false;
}
let playerCount=0;
let computerCount=0;

playGame();


