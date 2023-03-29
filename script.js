var question = [
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        options: ['Javascript', 'terminal/bash', 'for loops', 'condole.log']
    },
    {
        question:'commonly used data types DO Not Include:',
        options:['strings', 'booleans', 'alerts', 'numbers']
    },
    {
        question:'Arrays in JavaScript can be used to store________.',
        options:['numbers and strongs','other arrays','booleans','all of the above']
    },
];


var current = 0; 
var points = 0;

var questionEl = document.querySelector('#question-content');
var optionsEl = document.querySelector('#answer1','#answer2','#answer3','#answer4');

var chooseOption = function(){

var correctOptionIndex = data[current].answer;

    current++;
    optionsEl.innerHTML = '';
    putQuestion(current);
    putOptions(current);
};

var putQuestion = function (index){
    questionEl.textContent = data[index].question;
}

var putOptions = function (index){
    var options = data[index].options;
    for (var i = 0; i < options.length; i++){
        var options = options[i];
        var buttonEl = document.createElement('button');
        buttonEl.textContent = options;
        optionsEl.appendChild(buttonEl);
    }
}

//above code not rendering onto page ? debug

// timer declaration
var timerContainerElem = document.getElementById("timer-container");
var timerEl = document.getElementById("timer");
var timeLeft = 60;
var endGame = false;
var currentScore = 0;
var highscore = JSON.parse(localStorage.getItem('highscores')) || {};

// create the timer

var startTime = () => {
    timeLeft = 60;
    var timeDecrease = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if(endGame === true){
            clearInterval(timeDecrease);
        }
        else(timeLeft < 0) {
            clearInterval(timeDecrease);
            alert('You are out of time! Your score is: '+currentScore);
            return;
        }
    }, 6000); //60 seconds ?
}


//removing 15 seconds on timer

var subtractTime = function(){ {
    if (timeLeft > 15) {
        timeLeft -= 15;
    } else {
        timeLeft = 0;
    }
}

// question and answer variables:



var questionTitleEl = document.getElementById("question-title");
var questionContentEl = document.getElementById("question-content");
var questionFooterEl = document.getElementById("question-footer");

var answer1El = document.getElementById("answer1");
var answer2El = document.getElementById("answer2");
var answer3El = document.getElementById("answer3");
var answer4El = document.getElementById("answer4");


var highscoresEl = document.getElementById("highscores");
var mainButtonEl = document.getElementById("main-button");
var instructionEl = document.getElementById("instruction");


var questionOne = function(){
    questionTitleEl.textContent = "How do you write \"Hello World\" in an alert box?";//question from w3schools
    answer1El.textContent = "msgBox('Hello World');";
    answer2El.textContent = "alert('Hello World');";
    answer3El.textContent = "msg('Hello World');";
    answer4El.textContent = "alertBox('Hello World');";

    //adds onclick events to the options
    answer1El.onclick = function(){
        questionFooterEl.textContent = "Incorrect";
        subtractTime();
        timerEl.textContent = timeLeft;
        showQuestion5();
    }
    answer2El.onclick = function(){
        questionFooterEl.textContent = "Correct";
        currentScore++;
        showQuestion5();
    }
    answer3El.onclick = function(){
        questionFooterEl.textContent = "Incorrect";
        subtractTime();
        timerEl.textContent = timeLeft;
        showQuestion5();
    }
    answer4El.onclick = function(){
        questionFooterEl.textContent = "Incorrect";
        subtractTime();
        timerEl.textContent = timeLeft;
        showQuestion5();
    }
}

}