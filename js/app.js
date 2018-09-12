// console.log('working');

var op = prompt('What operation would you like to perform? Select a for addition, s for subtraction, m for multiplication or d for division');
console.log(op);

var number1 = Number(prompt('Please choose the first number'));
console.log(number1);

var number2 = Number(prompt('please choose the second number'));
console.log(number2);

if (op === 'a') {
  alert ("The answer is " + (number1+number2));
} else if (op === 's') {
  alert ("The answer is " + (number1-number2));
} else if (op === 'm')
  alert ("The answer is " + (number1*number2));
} else if (op === 'd') {
  alert ("The answer is " + (number1/number2));
}

// function add(number1, number2) {
//   var answer = (number1 + number2);
//   return answer;
//   console.log(answer);
// }
//
// if (op === 'a') {
//    alert ("The answer is " + (answer));
// }
