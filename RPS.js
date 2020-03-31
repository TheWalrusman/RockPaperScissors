


function computerRandomSelection() {

  return Math.floor((Math.random() * (2 - 0 + 1)));

}


function playRound() {
  let outcomeArray= [[0,1,2],[2,0,1],[1,2,0]];
  let choiceConversion = ["rock","paper","scissors"];
  let lowerCaseUserLetterInput = document.getElementById("userHandChoice").value.toLowerCase();
  let lowerCaseComputerLetterInput = choiceConversion[computerRandomSelection()] ;
  let userNumericInput = choiceConversion.findIndex((element) =>element === lowerCaseUserLetterInput);
  let computerNumericInput = choiceConversion.findIndex((element) =>element ===lowerCaseComputerLetterInput);

  console.log("Player: " + userNumericInput +"  ,  " + "Computer: " + computerNumericInput);
  document.getElementById("computerChoiceDisplay").innerText = lowerCaseComputerLetterInput;
  let outcomeWinLoseTie = "";
  let outcomeWinningLosingTies = "";
  switch (outcomeArray[computerNumericInput][userNumericInput]) {
    case 0:
      outcomeWinLoseTie = "Tie";
      outcomeWinningLosingTies = "Ties";
      break;
    case 1:
      outcomeWinLoseTie = "Win";
      outcomeWinningLosingTies = "Beats";
      break;
    case 2:
      outcomeWinLoseTie = "Got Beat";
      outcomeWinningLosingTies = "Gets Beaten By";
      break;


  }

  document.getElementById("outcomeDisplay").innerText = "You " + outcomeWinLoseTie + ": " + "Your "
    +lowerCaseUserLetterInput.toUpperCase() + " "+ outcomeWinningLosingTies + " The Opponent's "+
    lowerCaseComputerLetterInput.toUpperCase();

  let logNode = document.createElement("LI");
  let textNode = document.createTextNode("You " + outcomeWinLoseTie + ": " + "Your "
    +lowerCaseUserLetterInput.toUpperCase() + " "+ outcomeWinningLosingTies + " The Opponent's "+
    lowerCaseComputerLetterInput.toUpperCase());
  logNode.appendChild(textNode);
  document.getElementById("outcomeLogList").appendChild(logNode);


  return 0;




}

function inputVerifier(){
  let userValue = document.getElementById("userHandChoice").value;
    if(userValue ==="rock" || userValue ==="paper" || userValue === "scissors")
    {
      return playRound();
    }


}

document.getElementById("playButton").addEventListener("click",inputVerifier);
