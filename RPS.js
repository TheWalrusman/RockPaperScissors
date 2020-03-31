


function computerRandomSelection() {

  return Math.floor((Math.random() * (2 - 0 + 1)));

}


function playRound() {
  let outcomeArray= [[0,1,2],[2,0,1],[1,2,0]];
  let choiceConversionToInt = ["rock","paper","scissors"];
  //let lowerCaseUserInput = playerSelection.toLowerCase();
  //let lowerCaseComputerInput = computerSelection.toLowerCase();
  console.log("Player: " + document.getElementById("userHandChoice").value +"  ,  " + "Computer: " + computerRandomSelection());
  return 0;




}

function inputVerifier(){
  let userValue = document.getElementById("userHandChoice").value;
    if(userValue ==="rock" || userValue ==="paper" || userValue === "scissors")
    {
      return playRound();
    }

  return;
}

document.getElementById("playButton").addEventListener("click",inputVerifier);
