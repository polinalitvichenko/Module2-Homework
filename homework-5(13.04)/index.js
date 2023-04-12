// 1. Создайте массив из чисел. Используя методы массива, отсортируйте его по возрастанию.

const numArr = [2, 13, 8, 19, 9, 1];

numArr.sort((a, b) => a - b); // sort сортирует массив по возрастанию. Полный вариант: arr.sort(function( a, b ) {return a - b}); Если эта функция вернет отр.число - элемент в начало, ноль - останется на месте, плюс - пойдет в конец массива.

console.log(numArr);

// 2. Создайте массив строк. Используя методы массива, найдите индекс элемента с определенным значением и удалите его из массива.

const strArr = ['ololo', 'ogogo', 'azaza'];

const index = strArr.indexOf('ogogo');

delete strArr[index];

console.log(strArr);

// 3. Создайте массив объектов, каждый из которых имеет поля "имя" и "возраст". Используя методы массива, отсортируйте его по возрастанию возраста.

const students = [
  {
    name: 'Slava',
    age: 25
  },
  {
    name: 'Dima',
    age: 28
  },
  {
    name: 'Roma',
    age: 22
  },
  {
    name: 'Regina',
    age: 24
  }
]

students.sort((a, b) => a.age - b.age);

console.log(students);

// 4. Создайте массив чисел. Используя методы массива, найдите сумму элементов, расположенных на четных позициях.

const numArr2 = [2, 13, 8, 19, 9, 1];

let j = 0;

for (let i = 0; i < numArr2.length; i += 2) {
  j += numArr2[i];
}

console.log(j);

// 5. Создайте массив строк. Используя методы массива, найдите количество элементов, которые начинаются с определенной буквы.

let strArr2 = ['ololo', 'ogogo', 'azaza'];

const letter = 'o';

const filterArr = strArr2.filter(str => str.charAt(0) === letter); // filter создаёт новый массив с нужным условием, в данном случае - со строками начинающимися на о

const count = filterArr.length;


console.log(count);


// 6. Создайте массив объектов, каждый из которых имеет поля "название" и "цена". Используя методы массива, найдите суммарную стоимость всех товаров.

const products = [
  { name: 'apple', price: 15 },
  { name: 'banana', price: 20 },
  { name: 'orange', price: 30 },
  { name: 'milk', price: 50 },
  { name: 'bread', price: 40 }
];

const total = products.reduce((acc, { price }) => acc + price, 0);

console.log(total);

// 7. Создайте массив чисел. Используя методы массива, найдите максимальное и минимальное значение.

let numArr3 = [5, 15, 3, 8, 2, 10];

let maxNum = Math.max(...numArr3);
let minNum = Math.min(...numArr3);

console.log("Максимальное значение: " + maxNum);
console.log("Минимальное значение: " + minNum);



// 8. Создайте массив строк. Используя методы массива, объедините все элементы в одну строку.

let strArr3 = ['Hello', ',', ' ', 'new', ' ', 'world', '!'];

let resultStrArr = strArr3.join('');

console.log(resultStrArr);

// 9. Создайте массив объектов, каждый из которых имеет поля "имя" и "возраст". Используя методы массива, найдите средний возраст всех элементов.

const students2 = [
  {
    name: 'Slava',
    age: 25
  },
  {
    name: 'Dima',
    age: 28
  },
  {
    name: 'Roma',
    age: 22
  },
  {
    name: 'Regina',
    age: 24
  }
]

let sum = students2.reduce((accumulator, currentValue) => { // acc - переменная, к-рая становится больше с каждым "циклом", а currentValue - это возраст каждого элемента по очереди
  return accumulator + currentValue.age;
}, 0);

let newAge = sum / students2.length; // тут делим общую сумму на количество элементов

console.log(newAge);


// 10. Создайте массив чисел. Используя методы массива, создайте новый массив, содержащий квадраты элементов исходного массива.

let numberArr = [1, 2, 3, 4, 5];

let square = numberArr.map((key) => { //key - имя для каждого элемента массива, оно может быть любым в аргументе map. 
  return key * key;
});

console.log(square); 