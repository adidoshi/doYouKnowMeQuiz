var readlineSync = require("readline-sync");
var userName = readlineSync.question("What is your name? ");
console.log("Welcome " + userName);
console.log("DO YOU KNOW about Aditya? ")
console.log("--------------------------");
var score = 0;

var questions = [{
    question: "Where do I live? ",
    answer: "Pune"
  },
  {
    question: "What is my profession? ",
    answer: "Coder"
  },
  {
    question: "My favorite color? ",
    answer: "Orange"
  },
  {
    question: "What is my birthday month? ",
    answer: "August"
  },
  {
    question: "Sport I play? ",
    answer: "Table Tennis",
  },
  {
    question: "My dream car? ",
    answer: "Audi",
  },
  {
    question: "Song I like the most? ",
    answer: "memories",
  }
]

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You are correct");
    score += 1;
    console.log("Your score is: ", score);
    console.log("-----------------------");
  } else {
    console.log("You are wrong");
    console.log("-----------------------");
  }
};

for (i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer);
}

var highScore = [{
    name: "Aditya",
    score: 7,
  },
  {
    name: "Chinmay",
    score: 6,
  }
]
console.log("Your final score is: ", score);
console.log("-----------------------");
console.log("High score so far:");

for (i = 0; i < highScore.length; i++) {
  console.log(highScore[i].name + " : ", highScore[i].score);
}
console.log("------------------")
console.log("If you beat the score, you will get the congratulations message below");
console.log("------------------")

function check() {
  for (i = 0; i < highScore.length; i++) {
    if (highScore[i].score === score) {
      console.log('Congratulations ' + userName + " you have beaten the score, send me a screenshot & I'll update it...");
    }
  }
}
check();