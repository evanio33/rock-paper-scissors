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
       
    }

    switch(outcome) {
        case 1:
            console.log("outcome = " + outcome +" You win!");
            win++
            winP.textContent = `wins: ${win}`;
            if(win == 5){
                if(win > loss)  alert("you win! score: " + win);
                  else if(loss > win)  alert("you lose! score: " + win);
                    else if(win === loss)  alert("It's a Tie! score: " +win);
                win = 0;
                tie = 0;
                loss = 0;
                winP.textContent = `wins: ${win}`;
                loseP.textContent = `losses: ${loss}`;
                tieP.textContent = `ties: ${tie}`;

            }
            break;
        case -1: 
            console.log("outcome = " + outcome +" You lose!");
            loss++;
            loseP.textContent = `Losses: ${loss}`;
            break;
    }
    return outcome;
};



//DOM script. makes buttons and general interface of html page
const container = document.querySelector('#container');
 
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

const winP = document.createElement('p');
  winP.textContent = `wins: ${win}`;
const loseP = document.createElement('p');
  loseP.textContent = `losses: ${loss}`;
const tieP = document.createElement('p');
  tieP.textContent = `ties: ${tie}`;



container.appendChild(rockbtn);
container.appendChild(paperbtn);
container.appendChild(scissorsbtn);

container.appendChild(scoresDiv);
scoresDiv.appendChild(winP);
scoresDiv.appendChild(loseP);
scoresDiv.appendChild(tieP);