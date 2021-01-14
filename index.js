var readLineSync = require("readline-sync")
const chalk = require('chalk');
var userName = readLineSync.question(chalk.red("What should I call you ? "));
console.log("Hello " +userName+ " Welcome to the Code quiz...\n");
var score = 0;
//array of objects
var questions =[{
  que:"\nHow many heading tags are there in HTML5\n?",
  ans:"6"
  }, {
  que:"\nWhich attribute is used to open Hyperlink in new tab?\n",
  ans:"target"
  }, {
  que:"\nWhich CSS property is used to change text color of an element\n",
  ans:"color"
  },
]
//loop
for(var i=0 ; i<questions.length ; i++){
  play(questions[i].que,questions[i].ans)
}
//play function
function play(question,answer){
  var userAnswer = readLineSync.question(question)

  if (userAnswer === answer){
    console.log("Right!!!");
    score++;
  }
  else{
    console.log("Wrong!!! The answer is: "+ answer )
  }
  
}
console.log("Your score is " + score);

