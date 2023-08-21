var secretNumber = 8;

var gussed = +prompt('guess the secret number');


if (gussed === secretNumber) {
    alert( "Bingo! Correct  answer")
} else if (++gussed === secretNumber) {
    alert("Close enough to the correct answer")

}