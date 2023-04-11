//1
let films = {
  'Jojo Rabbit': 2019,
  'La Vita e Bella': 1997,
  'What Dreams May Come': 1998,
}
console.log(Object.keys(films));

//2

let friends = {
  'Nastya': 27,
  'Sasha': 26,
  'Lera': 26,
  'Ksenia': 35,
}

for (key in friends) {
  if (friends[key] > 30) {
    console.log(key);
  }
}

//3

function object(friends) {
  console.log(friends);
}
object(friends);

//4
let person = {
  name: 'Vasya',
  surname: 'Pupkin',
  age: 88,
  favoriteColor: 'black'
}

for (key in person) {
  console.log(key + ':' + person[key]); //через obj[key] обращается к значению ключа
}

//5

let eat = {
  carrot: 50,
  cucumber: 150,
  potate: 60,
  bread: 40
}

let price = 0;

for (key in eat) {
  price = price + eat[key];
}
console.log(price);

//6

function objectKeys(eat) {
  for (key in eat) {
    let count = 0;
    for (let key in eat) {
      if (eat.hasOwnProperty(key)) { // Проверяет точно ли в оригинальном объекте содержится ключ
        count++;
      }
    }
    return count;
  }
}

console.log(objectKeys(eat));

//7

let students = {
  Tom: 5,
  John: 2,
  Barbie: 4,
  Ali: 3
}

let highestScore = 0; //высшая оценка
let highestScoreStudent = ""; //студент с высшей оценкой

for (key in students) {
  if (students[key] > highestScore) {
    highestScore = students[key];
    highestScoreStudent = key;
  }
}

console.log(`Лучший студент: ${highestScoreStudent} (${highestScore})`);

//8

const movies = [
  { title: "Жизнь прекрасна", year: 1997 },
  { title: "Куда приводят мечты", year: 1998 },
  { title: "Кролик Джоджо", year: 2019 }
];

function sortMovies(movies) {
  movies.sort(function (a, b) { //метод sort сортирует элементы массива
    return a.year - b.year;
  });
  const movieTitles = movies.map(function (movie) { //map вызывает функцию и создаёт новый массив
    return movie.title;
  });
  return movieTitles;
}

console.log(sortMovies(movies));