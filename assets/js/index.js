var introduction = document.querySelector("#Introduction")
introduction.addEventListener("click", function (event) {
    alert("You clicked the Submit button");
    var btn = event.target;
    if (btn.matches(".choice-btn")) {

    }

});

var questionEl = document.querySelector("#question2")
questionEl.addEventListener("click", function (event) {
    alert("You Answered Correctly!");
    var btn = event.target;
    if (btn.matches(".choice-btn")) {
var answer = btn.parentElement.getAttribute("data-answer");
    }

});












document.querySelector("#submit").addEventListener("click", function () {
window.location.href = "./questions.html";
});

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




