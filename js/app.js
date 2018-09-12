// console.log('working');

var simple
var advanced

var type = prompt('What type of calculator would you like to use? Press s for simple or a for advanced.');

if (type === 's') {
  var op = prompt('What operation would you like to perform? Select a for addition, s for subtraction, m for multiplication or d for division');
  console.log(op);

  var number1 = Number(prompt('Please choose the first number'));
  console.log(number1);

  var number2 = Number(prompt('please choose the second number'));
  console.log(number2);

  var answera = (number1, number2);
  var answers = (number1 - number2);
  var answerm = (number1 * number2);
  var answerd = (number1 / number2);

  function add(number1, number2) {
    var answera = (number1 + number2);
    return answera;
    console.log(answera);
  }

  function sub(number1, number2) {
    var answers = (number1 - number2);
    return answers;
    console.log(answers);
  }

  function mul(number1, number2) {
    var answerm = (number1 * number2);
    return answerm;
    console.log(answerm);
  }

  function div(number1, number2) {
    var answerd = (number1 / number2);
    return answerd;
    console.log(answerd);
  }

  if (op === 'a') {
     alert (`The answer is ${answera}`);
  } else if (op === 's') {
    alert (`The answer is ${answers}`);
  } else if (op === 'm') {
    alert (`The answer is ${answerm}`);
  } else if (op === 'd') {
    alert (`The answer is ${answerd}`);
  }
} else if (type === 'a') {
  var op = prompt('What operation would you like to perform? Select p for power or r for square root.');
  console.log(op);
}
