//Question bank
var questionBank= [
    {
        question : 'What is C++?',
        option : ['C++ is an object oriented programming language','C++ is a procedural programming language',' C++ supports both procedural and object oriented programming language','C++ is a functional programming language'],
        answer : 'C++ supports both procedural and object oriented programming language'
    },
    {
        question : 'Which of the following user-defined header file extension used in c++?',
        option : ['hg','cpp','h','hf'],
        answer : 'h'
    },
    {
        question : 'The correct sequence of HTML tags for starting a webpage is -',
        option : ['Head, Title, HTML, body','HTML, Body, Title, Head','HTML, Head, Title, Body','HTML, Head, Title, Body'],
        answer : 'HTML, Head, Title, Body'
    },
    {
        question : ' Which of the following HTML tag is used to display the text with scrolling effect?',
        option : ['marquee','scroll','div','None of the above'],
        answer : 'marquee'
    },
    {
        question : 'An HTML program is saved by using the ____ extension.',
        option : ['.ht','.html','.hml','None of the above'],
        answer : '.html'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();