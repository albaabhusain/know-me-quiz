var readlineSync = require('readline-sync');
var chalk = require('chalk');
let userName = readlineSync.question('What is your name ?');
let score =0;
console.log(chalk.blue('Hello '+ userName + ' welcome to my quiz ,let me see how much you know me !'));

let questions=
[
  {
     question: 'which Weather i like the most',
    answer: 'winter'
    },
   {
     
      question: 'currently i am learning which programming language',
      answer: 'javascript'
    } ,
    { 
    question: 'where do i study ? (city)',
    answer: 'lucknow'
    }
    
    ];

    let highScores =[

      { name:'jerry',
        score:'3'
      },
      {
        name:'Tom',
        score:'2'
      }


    ]

function quiz(question,answer)
{
  
  console.log(chalk.yellow(question));
  userAns= readlineSync.question();
  
 if (answer.toUpperCase()===userAns.toUpperCase()){
   console.log(chalk.green('Correct Answer , You got a point !'));
   score +=1;
   console.log(chalk.magenta('score = ',score));
 }
else {
  console.log(chalk.red('wrong answer , you need to spend more time with me'));
  console.log(chalk.blue( 'score = ' , score));
}


}


for(let  i=0 ;i<questions.length; i++){

  quiz(questions[i].question,questions[i].answer);
 
}

 let finalscore=score;
  console.log(chalk.bgRed('Quiz finished you scored ' + chalk.bgBlack(finalscore) + ' points, ' ));

  console.log('-------------------');

  console.log(chalk.bgYellow('HighScores'));
  for(let i = 0 ;i<highScores.length;i++){
    console.log(chalk.green(highScores[i].name, ' score = ' + highScores[i].score));
  }