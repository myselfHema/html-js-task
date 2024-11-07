let human = 0;
let computer = 0;
let msg = document.querySelector("#msg");
let humanscore = document.querySelector("#user-score");
let computerscore = document.querySelector("#comp-score");
let final = document.querySelector("#final");

// userwin = computerchoose == "scissors" ? false : true;
let showwiner = (userwin, userchoosed, computerchoose) => {
  // Display the winner based on the value of userwin
  if (userwin == true) {
    human++;
    humanscore.innerText = human;
    console.log("you win");
    msg.innerText = `Your choose ${userchoosed} computer choose ${computerchoose}  you win`;
    msg.style.backgroundColor = "green";
  } else {
    computer++;
    computerscore.innerText = computer;
    console.log("you lose");
    msg.innerText = `Computer win ${computerchoose} human lose`;
    msg.style.backgroundColor = "red";
  }
  if(human > computer){
    console.log('congratulations You win')
    final.innerText = " congratulations You win";
  }
  else{
    final.innerText = ": Computer  win";
    console.log(' Computer win bad luck yours')
  }
};

const gencomchoose = () => {
  let options = ["rock", "paper", "scissors"];
  let randinx = Math.floor(Math.random() * 3);
  return options[randinx];
};
const computerplayer = (userchoosed) => {
  // gencomchoose();

  let computerchoose = gencomchoose();
  console.log(computer, `Clicked by computer ${computerchoose}`);

  if (userchoosed === computerchoose) {
    console.log("draw game");
    msg.innerText = "Game is draw paly again";
    msg.style.backgroundColor = "black";
  } else {
    let userwin = true;
    if (userchoosed == "rock") {
      userwin = computerchoose == "scissors" ? true : false;
    } else if (userchoosed == "paper") {
      userwin = computerchoose == "rock" ? true : false;
    } else if (userchoosed == "scissors") {
      userwin = computerchoose == "paper" ? true : false;
    }
    console.log(userwin);
    showwiner(userwin, userchoosed, computerchoose);
  }
};

let choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoosed = choice.getAttribute("id");
    console.log(`Clicked buy human ${userchoosed}`);
    computerplayer(userchoosed);
  });
});
