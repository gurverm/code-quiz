//===============


var questionTitleEl = document.getElementById("question-title");
var questionContentEl = document.getElementById("question-content");
var questionFooterEl = document.getElementById("question-footer");

var answer1El = document.getElementById("answer1");
var answer2El = document.getElementById("answer2");
var answer3El = document.getElementById("answer3");
var answer4El = document.getElementById("answer4");

//declaration variables

var endGame = false;
var currentScore = 0;
var highscores = JSON.parse(localStorage.getItem("highscores")) || {};


//timer variables
var timeLeft = 45;
var timerContainerEl = document.getElementById("timer-container");
var timerEl = document.getElementById("timer");
//starting timer
var startTimer = () => {
    timeLeft = 45;
    var timerInterval = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (endGame === true) {
            clearInterval(timerInterval);
        }
        if (timeLeft < 0) {
            clearInterval(timerInterval);
            alert("You ran out of time! Your score is " + currentScore);
            location.reload();
        }
    }, 1000);
}

//subtracts 10 seconds
var subtractTime = () => {
    if (timeLeft > 10) {
        timeLeft -= 10;
    } else {
        timeLeft = 0;
    }
}

//
//sets timer to 0, lets you record your score, and reloads the page
var endGame = () => {
    endGame = true;
    timerEl.textContent = "0";
    var name = prompt("You scored " + currentScore + " points! Enter your initials to save your highscore!");
    //checks if name is taken when submitting score -> if taken prompted to choose again
    if (highscores[name]) {
        var name = alert("This name is taken! Enter initials to submit your score!");
        endGame();
    } else {
        highscores[name] = currentScore;
        localStorage.setItem("highscores", JSON.stringify(highscores));
    }
    location.reload();
}

var showQuestion4 = () => {
    //question variables and functions
    questionTitleEl.textContent = 'A very useful tool used during development and debugging for printing content to the debugger is:';
    answer1El.textContent = 'JavaScript';
    answer2El.textContent = 'terminal/bash';
    answer3El.textContent = 'for loops';
    answer4El.textContent = 'console.log';

    // () =>function shortcut
    answer1El.onclick = () => {
        questionFooterEl.textContent = "Incorrect";
        subtractTime();
        timerEl.textContent = timeLeft;
        endGame();
    }
    answer2El.onclick = () => {
        questionFooterEl.textContent = "Correct";
        currentScore++;
        endGame();
    }
    answer3El.onclick = () => {
        questionFooterEl.textContent = "Incorrect";
        subtractTime();
        timerEl.textContent = timeLeft;
        endGame();
    }
    answer4El.onclick = () => {
        questionFooterEl.textContent = "Incorrect";
        subtractTime();
        timerEl.textContent = timeLeft;
        endGame();
    }
    
}

var showQuestion3 = () => {
    //question contents
    questionTitleEl.textContent = 'commonly used data types DO Not Include:';
    answer1El.textContent = 'strings'
    answer2El.textContent = 'booleans'
    answer3El.textContent = 'alerts'
    answer4El.textContent = 'numbers'

    //adds onclick events to the options
    answer1El.onclick = () => {
        questionFooterEl.textContent = "Incorrect";
        subtractTime();
        timerEl.textContent = timeLeft;
        showQuestion4();
    }
    answer2El.onclick = () => {
        questionFooterEl.textContent = "Incorrect";
        subtractTime();
        timerEl.textContent = timeLeft;
        showQuestion4();
    }
    answer3El.onclick = () => {
        questionFooterEl.textContent = "Correct";
        currentScore++;
        showQuestion4();
    }
    answer4El.onclick = () => {
        questionFooterEl.textContent = "Incorrect";
        subtractTime();
        timerEl.textContent = timeLeft;
        showQuestion4();
    }
}
 
var showQuestion2 = () => {
    questionTitleEl.textContent = 'Arrays in JavaScript can be used to store________.';
    answer1El.textContent = 'numbers and strings'
    answer2El.textContent = 'other arrays'
    answer3El.textContent = 'booleans'
    answer4El.textContent = 'all of these are correct'

    answer1El.onclick = () => {
        questionFooterEl.textContent = "Incorrect";
        subtractTime();
        timerEl.textContent = timeLeft;
        showQuestion3();
    }
    answer2El.onclick = () => {
        questionFooterEl.textContent = "Incorrect";
        subtractTime();
        timerEl.textContent = timeLeft;
        showQuestion3();
    }
    answer3El.onclick = () => {
        questionFooterEl.textContent = "Incorrect";
        subtractTime();
        timerEl.textContent = timeLeft;
        showQuestion3();
    }
    answer4El.onclick = () => {
        questionFooterEl.textContent = "Correct";
        currentScore++;
        showQuestion3();
    }
}

var showQuestion1 = () => {
    questionTitleEl.textContent = 'The condition in an if / else statement is enclose with ________.';
    instructionEl.textContent = "";
    answer1El.style.visibility = "visible";
    answer1El.textContent = 'curly brackets'
    answer2El.style.visibility = "visible";
    answer2El.textContent = 'quotes'
    answer3El.style.visibility = "visible";
    answer3El.textContent = 'parenthesis'
    answer4El.style.visibility = "visible";
    answer4El.textContent = 'square brackets'

    answer1El.onclick = () => {
        questionFooterEl.textContent = "Correct";
        currentScore++;
        showQuestion2();
    }
    answer2El.onclick = () => {
        questionFooterEl.textContent = "Incorrect";
        timeLeft = timeLeft - 10;
        timerEl.textContent = timeLeft;
        showQuestion2();
    }
    answer3El.onclick = () => {
        questionFooterEl.textContent = "Incorrect";
        timeLeft = timeLeft - 10;
        timerEl.textContent = timeLeft;
        showQuestion2();
    }
    answer4El.onclick = () => {
        questionFooterEl.textContent = "Incorrect";
        timeLeft = timeLeft - 10;
        timerEl.textContent = timeLeft;
        showQuestion2();
    }

}
var highscoresEl = document.getElementById("highscores");
var startButtonEl = document.getElementById("main-button");
var instructionEl = document.getElementById("instruction");


//event listener for highscores button
highscoresEl.addEventListener("click", () => {
    //if highscores button is clicked => alert highscores
    var sortedHighscores = Object.entries(highscores).sort((a, b) => b[1] - a[1]);
    for(var index = 0; index < 5; index++){
        if(sortedHighscores[index] == null){
            sortedHighscores[index] = ["no scores available"];
            sortedHighscores[index].push(0);
        }
    }

    //alerts user with top 5 highscores 
    alert("1. " + sortedHighscores[0][0] + " - " + sortedHighscores[0][1] + "\n"
        + "2. " + sortedHighscores[1][0] + " - " + sortedHighscores[1][1] + "\n"
        + "3. " + sortedHighscores[2][0] + " - " + sortedHighscores[2][1] + "\n"    
        + "4. " + sortedHighscores[3][0] + " - " + sortedHighscores[3][1] + "\n"
        + "5. " + sortedHighscores[4][0] + " - " + sortedHighscores[4][1]);
});

var startGame = () => {
    startTimer();
    showQuestion1();
}


startButtonEl.addEventListener("click", function () {
    startGame();
});