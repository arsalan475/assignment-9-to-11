var number1 = +prompt("write 1st number");

var number2 = +prompt("write 2nd number");


var operator = prompt("what you want to do with these two values");

var result;


if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}


alert(`${number1} ${operator} ${number2} = ${result}`);
