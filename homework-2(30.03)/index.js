/* 
//1
let shark = "";

for (let i = 0; i < 7; i = i + 1) {
  shark = shark + "#";
  console.log(shark);
}

//2
let number = 0;
let i = 0;

while (i < 100) {
  number += 1;
  i += 1;
  if ((number % 3 == 0) && (number % 5 > 0)) {
    console.log('Fizz');
  } else if ((number % 5 == 0) && (number % 3 > 0)) {
    console.log('Buzz');
  } else if ((number % 5 == 0) && (number % 3 == 0)) {
    console.log('FizzBuzz');
  } else {
    console.log(number);
  }
}

//3
let shark = "#" + " ";
let krahs = " " + "#";
let i = 0;
let trRepeat = 4;
let tdRepeat = 8;

while (i < tdRepeat) {
  i = i + 1;
  if (i % 2 == 0) {
    console.log(krahs.repeat(trRepeat));
  } else if (i % 2 > 0) {
    console.log(shark.repeat(trRepeat));
  }
} 
*/