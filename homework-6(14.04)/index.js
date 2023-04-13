// 1. Напишите функцию, которая находит сумму всех элементов массива.

const newArray = [1, 2, 3, 4, 5, 6, 7]

function sumArray(arr) {
  const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum;
}

console.log(sumArray(newArray));

// 2. Напишите функцию, которая находит наименьший элемент в массиве.

const myArray = [5, 3, 9, 2, 1];

function minArray(arr) {
  return Math.min(...arr);
}

console.log(minArray(myArray));

// 3. Напишите функцию, которая находит наибольший элемент в массиве.
// Возьмём массив из предыдущего задания

function maxArray(arr) {
  return Math.max(...arr);
}

console.log(maxArray(myArray));

// 4. Напишите функцию, которая находит индекс первого элемента в массиве, равного заданному значению.
//так же используется массив из 2 задания

function findIndex(arr, x) {
  return arr.indexOf(x);
}

console.log(findIndex(myArray, 9));

// 5. Напишите функцию, которая удаляет все дубликаты из массива.

const dubleArray = [1, 2, 3, 2, 4, 3, 5, 6, 10];

function delDublicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(delDublicates(dubleArray));

// 6. Напишите функцию, которая сортирует массив по возрастанию.

const newArray1 = [3, 1, 4, 2, 5];

function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}

console.log(sortArray(newArray1));

// 7. Напишите функцию, которая сортирует массив по убыванию.
// массив из 6 задания

function sortArrayMin(arr) {
  return arr.sort((a, b) => b - a);
}

console.log(sortArrayMin(newArray1));

// 8. Напишите функцию, которая находит среднее арифметическое всех элементов массива.
// массив из 6 задания

function findAverage(arr) {
  const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const result = sum / arr.length;
  return result;
}

console.log(findAverage(newArray1));

// 9. Напишите функцию, которая проверяет, все ли элементы массива удовлетворяют определенному условию.
// массив из 6 задания

function condition(arr) {
  const filterFunction = newArray1.filter(key => key > 3) //условие, что числа должны быть больше 3
  return filterFunction;
}

console.log(condition(newArray1));

// 10. Напишите функцию, которая преобразует массив строк в массив чисел.

const stringArray = ["1", "2", "3", "4", "5"];

function stringToNumber(strArray) {
  return strArray.map(Number); // map перебирает элементы, а number преобразует строку в число
}

console.log(stringToNumber(stringArray));