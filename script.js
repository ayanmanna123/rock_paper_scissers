let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userscorpara = document.querySelector("#user-score")
const compscorpara = document.querySelector("#comp-score")

const gencomputerchoiced = () => {
  const option = ["rock", "paper", "scissors"];
  const rendomindx = Math.floor(Math.random() * 3);
  return option[rendomindx];
};
const drowgame = () => {
  console.log("game was draw");
   msg.innerText = "Game was Drow play again."
    msg.style.backgroundColor = "#081b31"
};
const showwiner= (userwin,userchoice,comchoice) =>{
 if(userwin){
    userscore++;
    userscorpara.innerText = userscore;
    console.log("you win!")
    msg.innerText = `You Win! ${userchoice} beats computer ${comchoice}`
    msg.style.backgroundColor = "green"
 }
 else{
    compscore++;
    compscorpara.innerText = compscore;
    console.log("you lose")
     msg.innerText = `You Lose ${comchoice} beats your ${userchoice}`
      msg.style.backgroundColor = "red"
 }
}
const plygame = (userchoice) => {
  console.log("user choice =", userchoice);
  const comchoice = gencomputerchoiced();
  console.log("computure choice =", comchoice);
  if (userchoice === comchoice) {
    drowgame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = comchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = comchoice === "scissers" ? false : true;
    } else {
      userwin = comchoice === "rock" ? false : true;
    }
    showwiner(userwin, userchoice, comchoice);
  }

};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    plygame(userchoice);
  });
});
