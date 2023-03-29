
//1
let name = 'Polina';
console.log(name);

//2
let age = 24;
console.log(age);

//3
let isAdult = age;
if (isAdult >= age) {
  console.log(true)
} else {
  console.log(false)
};

//4
let userName = prompt('Как вас зовут?', 'Нет ответа');
console.log(userName);

//5
let ad = confirm('Вы согласны на получение рекламных сообщений по электронной почте?');
console.log(ad);

//6. Не до конца поняла что именно требуется, сделала в двух вариантах ниже
let password = '12345aaa';
if (password == true) {
  console.log('Доступ разрешен')
} else {
  console.log('Доступ запрещен')
};

let password2 = prompt('Введите пароль');
if (password2 == '12345aaa') {
  console.log('Доступ разрешен')
} else {
  console.log('Доступ запрещен')
};

//7
let number = 24;
let numberResult = number % 2;
if (numberResult > 0) {
  console.log('Число нечетное')
} else {
  console.log('Число четное')
};

//8
let color = 'красный';
if (color == 'красный') {
  console.log('Цвет красный')
} else {
  console.log('Цвет не красный')
};

//9
let square = prompt('Какое число вы хотите возвести в квадрат?');
console.log(square ** 2);

//10
grade = 'A';
if (grade == 'A') {
  console.log('Отлично!')
} else if (grade == 'B') {
  console.log('Хорошо!')
} else if (grade == 'C') {
  console.log('Удовлетворительно')
} else if (grade == 'D') {
  console.log('Неудовлетворительно')
} else if (grade == 'F') {
  console.log('Плохо')
};