const array = ["Mango", "Poly", "Ajax"];

function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}

logItems(array);

// 2

function calculateEngravingPrice(message, pricePerWord) {
  let price = pricePerWord * message.length;

  return price;
}

console.log(calculateEngravingPrice("Всемогутній", 2));

// 3

function findLongestWord(string) {
  let words = string.split(" ");
  let longWord = "";
  for (let word of words) {
    if (word.length > longWord.length) {
      longWord = word;
    }
  }
  console.log(`Найдовше слово: ${longWord}`);
}

findLongestWord("Ваше щастя незабаром");

//  4

function formatString(string) {
  if (string.length > 40) {
    return string.slice(0, 40) + "...";
  } else {
    return string;
  }
}

console.log(formatString("Я крутийвіалоіоварпроптвптппппппfffffffff"));

// 5

function checkForSpam(message) {
  if (message.includes("spam", "sale")) {
    console.log(true);
  } else {
    console.log(false);
  }
}

console.log(checkForSpam(`spam`));

// 6

let total = 0;
let numbers = [];

while (true) {
  let input = prompt('Введіть число');

  if (input === null) {
    break;
  }

  numbers.push(Number(input));
}

for (let number of numbers) {
  total += number;
}

if (numbers.length > 0) {
  console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
  console.log('Масив порожній, суму обчислити неможна');
}

// 7

let allLogins = ['admin', '123123', ' indozer', 'goiteens'];

function isLoginValid(login) {
  return login.length >= 4 && login.length <= 16;
}

function isLoginUnique(allLogins, login) {
  return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
  if (!isLoginValid(login)) {
    return 'Помилка! Логін повинен бути від 4 до 16 символів';
  }

  if (!isLoginUnique(allLogins, login)) {
    return 'Такий логін уже використовується!';
  }

  allLogins.push(login);
  return 'Логін успішно доданий!';
}

let loginToAdd = prompt("Введіть ваш логін:");
let result = addLogin(allLogins, loginToAdd);
console.log(result);