var rs = require("readline-sync");

console.log("Hello! Welcome to my game!");

var player = rs.question("Please enter your name: ");
var welcomeMessage = `Hey! ${player} It's good to have you here!`;

console.log(welcomeMessage);

var score = 0;

function gameplay(question, correctAnswer) {
  var isAnswerCorrect;

  var answer = rs.question(question);

  if (answer === correctAnswer) {
    isAnswerCorrect = true;
    score = score + 1;
  } else {
    isAnswerCorrect = false;
    score = score - 1;
  }

  return isAnswerCorrect;
}

const questionList = [
  {
    question: "Where do I work?",
    answer: "Egain",
  },
  {
    question: "Who's my favorite superhero?",
    answer: "X-men",
  },
];

var i = 0; // initial condition

while (i < questionList.length) {
  // terminating condition
  // call function using object
  var isCorrect = gameplay(questionList[i].question, questionList[i].answer);

  console.log("is your answer correct?", isCorrect);
  console.log("your score is: ", score);
  i++; // changing the condition
}
