var readlineSync = require("readline-sync");
var score = 0;
var userName = ".";
var repeatAns;
//data of highscore
var highScores = [
  {
    name: "Prince",
    score: "16",
  },
  {
    name: "Raj",
    score: "12",
  },
]
// array of object which content questions and answers
var questions = [
  {
    question: "01. How many planets are there in our Solar System? (answer in text)\n",
    answer: "Eight",
  },
  {
    question: "02. Which planet is closest to Sun?\n",
    answer: "Mercury",
  },
  {
    question: "03. Which planet has the beautiful ring surrounding it?\n",
    answer: "Saturn",
  },
  {
    question: "04. Which planet is famous for its Red spot?\n",
    answer: "Jupiter",
  },
  {
    question: "05. What is the name of the first Satellite sent into Space?\n",
    answer: "Sputnik",
  },
  {
    question: "06. Which is the hottest planet in our Solar System?\n",
    answer: "Venus",
  },
  {
    question: "07. Which planet is known as the Red Planet?\n",
    answer: "Mars",
  },
  {
    question: "08. Is Sun a planet or a star?\n",
    answer: "Star",
  },
  {
    question: "09. Name the largest natural satellite in out Solar System?\n",
    answer: "Ganymede",
  },
  {
    question: "10. Name the only natural satellite which has dense atmosphere?\n",
    answer: "Titan",
  },
]

function welcome() {
  userName = readlineSync.question("What is your name? \nName :  ");
  console.log("\nWelcome "+ userName + " to the fun quiz on our Solar System. :) \nThis 10 question Space quiz\nRewards +3 Point for Correct answer \nDeducts -1 Point for Wrong answer\n\nBest of Luck \n");
}

function play (question,answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right!");
    score = score + 3;
    
  }
  else {
    console.log("Wrong!");
    score = score -1;
  }
  console.log("\nCurrent score: ", score);
  console.log("\n----------------------------------\n")
}

function gameplay() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! Your Final SCORE is : ", score);
  console.log("Check out the High Scores, your score will added to the table soon\n\n");
  highScores.push({name: userName, score: score});
  highScores.map(score => console.log(score.name, " : ", score.score));
  score = 0;
}
function repeat() {
  do {
    welcome();
    gameplay();
    showScores();
    repeatAns = readlineSync.question("\n do you want to play again? (Y/N)\n Answer : ");    
  console.log("\n----------------------------------\n----------------------------------\n");
  } while (repeatAns.toUpperCase() === "Y");  
}

repeat();