// Уровень 1

let spaceship = prompt('Дайте имя вашему космическому кораблю.');
console.log(spaceship);
let fuel = prompt('Задайте текущее количество топлива в вашем корабле (кг)');
console.log(fuel);
let maxFuel = prompt('Задайте максимальное количество топлива в вашем корабле (кг)');
console.log(maxFuel);
let speed = prompt('Зайдайте скорость вашего космического корабля (км/с)');
console.log(speed);

// Уровень 2
alert('Корабль готов к вылету!');
alert(`Текущее количество топлива в корабле: ${fuel} кг`);
alert(`Максимальное количество топлива в корабле: ${maxFuel} кг`);
alert(`Скорость вашего корабля: ${speed} км/с`);

// Уровень 3
let distance = 22000;
let flightTime = function (distance) {
  return distance / speed;
}
let currentFlightTime = flightTime(distance);
alert(`Время в пути до ближайшей звёздной системы: ${currentFlightTime} секунд`);

// Расход топлива
let fuelConsumption = function (t, v) {
  // Пусть расход топлива на 1 секунду полета будет равен скорость/100
  let result = (v / 100) * t;
  alert(`Расход топлива: ${result} кг`);
  return result;
}

// Остаток топлива в корабле
let fuelTraffic = function (q, vol) {
  let result = vol - q;
  if (result < 0) {
    alert('Топлива не хватает для полёта!!!');
  } else {
    alert('Топлива хватит для полёта, отправляемся!');
  }
  return result;
}

let fuelConsumed = fuelConsumption(currentFlightTime, speed); // расход топлива на полет
let fuelTrafficAround = fuelTraffic(fuelConsumed, fuel); // остаток топлива


//Уровень 4

let victory = true; // Переменная, отвечающая за победу в путешествии
let orion = 34000;
let scorpio = 45000;
let alphaCentauri = 65000;
let sirius = 67000;
const starSystemsName = ['Созвездие Орион', 'Созвездие Скорпиона', 'Альфа Центавра', 'Сириус'];
const starSystems = [orion, scorpio, alphaCentauri, sirius];

for (let i = 0; i < starSystems.length; i++) { // .length обозначает число элементов в массиве
  currentFlightTime = flightTime(starSystems[i]);
  alert(`Время в пути до звёздной системы "${starSystemsName[i]}": ${currentFlightTime} секунд`);
  var currentFuelSupply = fuel - fuelConsumed; //остаток топлива после путешествия
  if (currentFuelSupply >= 0) {

    alert('Запасов топлива хватает! Пристегните ремни!');
    continue; // повторяет цикл (без него for из-за if не будет продолжать цикл)
  } else {
    alert('Запасов топлива не хватает! Нужно заправиться!');
    victory = false; // флаг, чтобы пометить, что путешествие не удалось
    break; //прекращает цикл
  }
}
console.log(currentFuelSupply);
alert('Наше путешествие закончено!');

// Уровень 5

function fuelResidue(currentFuelSupply, fuelConsumed) {
  if (currentFuelSupply < fuelConsumed) {
    const confirmMessage = `Запаса топлива не хватает для следующего полета. Что вы хотите сделать?`;
    const continueOption = `Продолжить полет на остаточном топливе - нажмите "Ok"`;
    const sosOption = `Отправить сигнал SOS и завершить путешествие - нажмите "Отмена"`;
    const userChoice = confirm(`${confirmMessage}\n\n${continueOption}\n\n${sosOption}`);
    console.log(userChoice);
    if (userChoice === true) {
      alert(`Корабль продолжает полет на остаточном топливе.`);
      return true;
    } else {
      alert(`Сигнал SOS успешно отправлен. Путешествие завершено.`);
      return false;
    }
  } else {
    return true;
  }
}

console.log(fuelResidue(currentFuelSupply, fuelConsumed));

// Уровень 6

const improvement = ['Гиперскорость', 'Невидимость', 'Автопилот', 'Дополнительная броня'];

let upgradesCount = parseInt(prompt('Введите количество доступных для установки улучшений:')); // parseInt используется, чтобы гаратнировать, что вернется именно число. Если ввести число + строка, то он возьмет именно число, а если дробь, то округлит

for (let i = 0; i < upgradesCount; i++) {
  let upgrade = prompt(`Введите название улучшения ${i + 1}:`);
  improvement.push(upgrade); //добавляем новый введённый элемент в конец массива с помощью push
}

let selectedUpgrade = prompt(`Выберите одно из улучшений: \n${improvement.join('\n')}`); //join разделает элементы массива (в данном случае переносом строки)

alert(`Улучшение ${selectedUpgrade} установлено!`);

// Уровень 7

function generateDifficulty() {
  return Math.floor(Math.random() * 10) + 1; // Math.random даёт случайное число (диапазон настраивается формулой), Math.floor округляет до целого числа к меньшему
}

function askPreparation(r) {
  let preparation = parseInt(prompt(`Введите ваш уровень подготовки к ${r} битве (от 1 до 10):`));
  while (isNaN(preparation) || preparation < 1 || preparation > 10) { //isNaN - если пользователь введет не число и parseInt даст NaN
    preparation = parseInt(prompt('Некорректный ввод. Введите число от 1 до 10:'));
  }
  return preparation;
}

let victories = 0;
let defeats = 0;

if (victory) { // Если путешествие удалось, то можно участвовать в битвах
  for (let i = 1; i <= 5; i++) {
    console.log(`Битва ${i}`);
    let difficulty = generateDifficulty(); // уровень сложности
    console.log(`Уровень сложности: ${difficulty}`);
    let preparation = askPreparation(i); //уровень подготовки
    console.log(`Уровень подготовки: ${preparation}`);
    if (preparation >= difficulty) {
      alert('Победа!');
      victories += 1;
    } else {
      alert('Поражение.');
      defeats += 1;
      victory = false;
      break;
    }
  }
}

if (victory) {
  alert('Поздравляем с успешным завершением путешествия!');
} else {
  alert('К сожалению, путешествие закончилось неудачей.');
}

// Уровень 8

function getTotalFlightTime() {
  let totalFlightTime = 0;
  for (let i = 0; i < starSystems.length; i++) {
    totalFlightTime += flightTime(starSystems[i]);
  }
  return totalFlightTime;
}

const starSystemsTime = [40, 20, 25, 45]

function printStarSystemsFlightTime() {
  for (let i = 0; i < starSystems.length; i++) {
    let currentFlightTime = 0;
    for (let j = 0; j < starSystemsTime.length; j++) {
      currentFlightTime += starSystemsTime[j];
    }
    console.log(currentFlightTime);
  }
}

getTotalFlightTime();
printStarSystemsFlightTime();
alert(`Общее время, проведённое в путешествии по звездным системам: ${currentFlightTime} с.`);

alert(`Побед: ${victories}, Поражений: ${defeats}`);

if (victories >= 4) {
  alert('Ты - КРАСАВЧИК!');
}

// Уровень 9

function generateArtifact() {
  let generate = Math.floor(Math.random() * 100) + 1;
  return generate;
}

console.log(generateArtifact());

function askArtifact() {
  let artifackt = parseInt(prompt(`Введите любое число (от 1 до 100):`));
  while (isNaN(artifackt) || artifackt < 1 || artifackt > 100) {
    artifackt = parseInt(prompt('Некорректный ввод. Введите число от 1 до 100:'));
  }
  return artifackt;
}

console.log(askArtifact());

if (generate = artifackt) {
  alert(`Удача! Ты нашёл таинственный артефакт и выиграл игру! Ты - Красавчик!!!`);
} else {
  alert('Игра продолжается!');
}
