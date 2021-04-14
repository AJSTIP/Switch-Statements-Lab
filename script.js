var answers = [
  "Indeed",
  "No",
  "Perhaps",
  "Inaudibly",
  "MaYbE",
  "One Day... One Day",
  "I say No",
  "Survey Says *buzzer noise*",
  "Yes",
  "Signs point to absolutley not",
  "Not in your favor",
  "Not happening",
  "Zoinks thats not good",
  "Yooo Lets go you win",
  "Very doubtful",
  "😂😂😂",
  "Ask again later",
  "Please wait until after the beep",
  "Cannot say right now come back in 6-10 business days",
  "110%",
];

window.onload = function () {
  var eight = document.getElementById("eight");
  var answer = document.getElementById("answer");
  var eightball = document.getElementById("magicEightBall");
  var question = document.getElementById("question");

  eightball.addEventListener("click", function () {
    if (question.value.length < 1) {
      alert("Enter a question!");
    } else {
      eight.innerText = "";
      var num = Math.floor(Math.random() * Math.floor(answers.length));
      answer.innerText = answers[num];
    }
  });
};
