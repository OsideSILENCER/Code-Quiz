var introduction = document.querySelector("#introduction")
introduction.addEventListener("click", function (event) {
    alert("You clicked the Submit button")
    var btn = event.target;
    if (btn.matches(".choice-btn")) {
    }

});

document.querySelector("#submit").addEventListener("click", function () {
    window.location.href = "./questions.html";
    });
    
var ss = document.getElementsByClassName("countingtimer");
 
[].forEach.call(ss, function (s) {
    var currentTimer = 0,
    interval = 0,
    lastUpdateTime = getTime()
    start = s.querySelector('buttton.start' ),
    secs = s.querySelector('span.seconds'),

start.addEventListener("click", startTimer)

    function pad (n) {
        return ('00' + n).substring(-1)
    }

    function update () {
        var now = new getTime(),
        dt = now - lastUpdateTime;

        currentTimer += dt;

        var Time = new(counter)

        secs.innerHTML = pad(time.getSeconds());

        lastUpdateTime = now;

    }

    function startTimer () {
        clearInterval(interval);
        interval = 0;
    }

    function resetTimer () {
        stopTimer();

        currentTimer = 0

        secs.innerHTML = pad(0);
    }
})


var timer = document.querySelector('h1');
let timerSeconds = 20;

timer.innerHTML = `00:00 ${timerSeconds}`;

var counter = setInterval (()=>{
timerSeconds--;
timer.innerHTML = `00:00 ${timerSeconds}`;
if (timerSeconds<0 || timerSeconds<1){
    clearInterval(counter)
    }
}, 1000)

var introduction = document.querySelector("#Introduction")
introduction.addEventListener("click", function (event) {
    alert("You clicked the Submit button");
    var btn = event.target;
    if (btn.matches(".choice-btn")) {
    }

});

   

var questionEl = document.querySelector("#question1");
questionEl.addEventListener("click", function (event) {
    var btn = event.target;
    if (btn.matches(".choice-btn")) {
        alert("You answered correctly");
    }


});

var questionEl = document.querySelector("#question2");
questionEl.addEventListener("click", function (event) {
    var btn = event.target;
    if (btn.matches(".choice-btn")) {
        alert("You answered correctly");
    }


});


var questionEl = document.querySelector("#question3");
questionEl.addEventListener("click", function (event) {
    var btn = event.target;
    if (btn.matches(".choice-btn")) {
        alert("You answered correctly");
    }


});


var questionEl = document.querySelector("#question4");
questionEl.addEventListener("click", function (event) {
    var btn = event.target;
    if (btn.matches(".choice-btn")) {
        alert("You answered correctly");
    }


});













