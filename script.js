let win = 0, loss = 0, tie = 0;


const comPlay = () => {
    let pc = Math.floor(Math.random() *3) +1;
    switch(pc) {
        case 1: 
            pc = 'rock';
            break;
        case 2:
            pc = 'paper';
            break;
        case 3:
            pc = 'scissors';
            break;
    }
    return pc;
};

const gameOver = (string) => {
    alert(`You ${string}! score: ` + win);
            win = 0;
            tie = 0;
            loss = 0;
            winP.textContent = `wins: ${win}`;
            loseP.textContent = `losses: ${loss}`;
            tieP.textContent = `ties: ${tie}`;
};

const playRound = (user, pc) => {
    let outcome = 0;
    switch(user) {
        case 'rock':
            if(pc === 'scissors') {
                outcome=1;
                break;
            }else if(pc === 'paper') {
                outcome= -1;
                break;
            }
        case 'paper': 
            if(pc=== 'rock') {
                outcome=1;
                break;
            }else if(pc==='scissors') {
                outcome=-1;
                break;
            }
        case 'scissors':
            if(pc==='paper') {
                outcome=1;
                break;
            }else if(pc=== 'rock') {
                outcome =-1;
                break;
            }
        
    }
    console.log("you chose " + user + ", PC chose " +pc + ".");

    if(pc=== user) {
        outcome = 0;
        console.log("outcome = " + outcome +" It's a tie!");
        tie++
        tieP.textContent = `ties: ${tie}`;
        if(tie == 5){
            gameOver('tied');
        }
       
    }

    switch(outcome) {
        case 1:
            console.log("outcome = " + outcome +" You win!");
            win++
            winP.textContent = `wins: ${win}`;
            if(win == 5){
                gameOver('win');
            }
            break;
        case -1: 
            console.log("outcome = " + outcome +" You lose!");
            loss++;
            loseP.textContent = `Losses: ${loss}`;
            if(loss == 5){
                gameOver('lose');
            }
            break;
    }
    return outcome;
};



//DOM script. makes buttons and general interface of html page
const container = document.querySelector('#container');

const btnDiv = document.createElement('div');
 
const rockbtn = document.createElement('button');
  rockbtn.textContent = "Rock";
  rockbtn.addEventListener('click', () => {
    playRound('rock', comPlay());
});
 
const paperbtn = document.createElement('button');
  paperbtn.textContent = "Paper";
  paperbtn.addEventListener('click', () => {
    playRound('paper', comPlay());
});

const scissorsbtn = document.createElement('button');
  scissorsbtn.textContent = "Scissors";
  scissorsbtn.addEventListener('click', () => {
    playRound('scissors', comPlay());
});

const scoresDiv = document.createElement('div');

const winP = document.createElement('span');
  winP.textContent = `wins: ${win}`;
const loseP = document.createElement('span');
  loseP.textContent = `losses: ${loss}`;
const tieP = document.createElement('span');
  tieP.textContent = `ties: ${tie}`;



container.appendChild(btnDiv);
btnDiv.appendChild(rockbtn);
btnDiv.appendChild(paperbtn);
btnDiv.appendChild(scissorsbtn);

container.appendChild(scoresDiv);
scoresDiv.appendChild(winP);
scoresDiv.appendChild(loseP);
scoresDiv.appendChild(tieP);

btnDiv.classList.add("gameDiv");
scoresDiv.classList.add("scoresDiv");

rockbtn.classList.add("gameBtn");
paperbtn.classList.add("gameBtn");
scissorsbtn.classList.add("gameBtn");

winP.classList.add("score");
loseP.classList.add("score");
tieP.classList.add("score");