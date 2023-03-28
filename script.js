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

var questionEl = document.querySelector('#question-content');
var optionsEl = document.querySelector('#answer1','#answer2','#answer3','#answer4')