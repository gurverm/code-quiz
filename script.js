//above code not rendering onto page ? debug

// timer declaration
var timerContainerElem = document.getElementById("timer-container");
var timerEl = document.getElementById("timer");
var timeLeft = 60;
var endGame = false;
var currentScore = 0;
var highscore = JSON.parse(localStorage.getItem('highscores')) || {};

// create the timer

var startTime = function() {
    timeLeft = 60;
    var timeDecrease = setInterval(function() {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if(endGame === true){
            clearInterval(timeDecrease);
        }
        else(timeLeft < 0); {
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
    questionTitleEl.textContent = 'A very useful tool used during development and debugging for printing content to the debugger is:';
    answer1El.textContent = "JavaScript";
    answer2El.textContent = "Terminal/Bash";
    answer3El.textContent = "for loops";
    answer4El.textContent = "console.log";

},

    //adds onclick events to the options
    answer1El.onclick = function(){
        questionFooterEl.textContent = "Incorrect";
        subtractTime();
        timerEl.textContent = timeLeft;
        questionOne();
    }
    answer2El.onclick = function(){
        questionFooterEl.textContent = "Correct";
        currentScore++;
        questionOne();
    }
    answer3El.onclick = function(){
        questionFooterEl.textContent = "Incorrect";
        subtractTime();
        timerEl.textContent = timeLeft;
        questionOne();
    }
    answer4El.onclick = function(){
        questionFooterEl.textContent = "Incorrect";
        subtractTime();
        timerEl.textContent = timeLeft;
        questionOne();
    }
}

