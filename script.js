let player = "Partner,";
player ? console.log("Howdy " + player + " Ask Me Anything!") : console.log("Howdy");
let playerQuestion = "Can you answer my question?";
console.log(" You Asked " + playerQuestion);
let randomNumber = Math.floor(Math.random() * 10);
let eightBall = " ";

switch (randomNumber) {
  case 0:
    eightBall = "Yes";
    break;
  case 1:
    eightBall = "No";
    break;
  case 2:
    eightBall = "Perhaps";
    break;
  case 3:
    eightBall = "Cannot tell";
    break;
  case 4:
    eightBall = "I Would not Count On It";
    break;
  case 5:
    eightBall = "My Sources Say No";
    break;
  case 6:
    eightBall = "Your Future Looks Grim";
    break;
  case 7:
    eightBall = "Good News My Sources Say Yes";
    break;
  case 8:
    eightBall = "Absolutley Positive";
    break;
  case 9:
    eightBall = "Cold";
    break;
}

console.log(eightBall);
