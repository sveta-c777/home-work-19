/*
 ДОМАШНЄ ЗАВДАННЯ 19 — «Профіль користувача»

 Задача: крок за кроком зібрати картку користувача
 з «сирих» даних, які прийшли з форми реєстрації.

 Дані вже оголошені нижче — початкові значення не змінювати.
 Код писати під блоком з даними, у тому порядку, у якому йдуть кроки.
 Результат кожного кроку виводити в консоль через console.log().


 КРОК 1. Рік народження — до числа.
 Змінна birthYear — це рядок "1994". Вивести її тип.
 Перетворити значення на число, зберегти в нову змінну, вивести її тип і значення.

 КРОК 2. Вік.
 Порахувати вік користувача на основі currentYear та числового року народження.
 Створити змінну ageIn10Years зі значенням віку та збільшити її на 10.
 Вивести обидва значення.

 КРОК 3. Нормалізація імені та прізвища.
 Дані прийшли «кривими»: "tARAS" і "shevchenko".
 Привести імʼя та прізвище до вигляду «перша літера велика, решта — малі».
 Вивести результат.

 КРОК 4. Повне імʼя.
 Створити змінну fullName у форматі "Імʼя Прізвище".
 Вивести fullName та його довжину.

 КРОК 5. Розбір email на частини.
 Вивести позицію символу "@" у змінній email.
 Отримати логін (усе до "@") та домен (усе після "@"), домен — у нижньому регістрі.
 Вивести логін і домен.

 КРОК 6. Маска email.
 Створити змінну maskedEmail у форматі: перші 2 символи логіна + "***" + "@" + домен.
 Вивести maskedEmail.

 КРОК 7. Перевірка повноліття.
 Створити змінну isAdult — чи є користувач повнолітнім (18 років і більше).
 Вивести її значення та тип.
 Додатково вивести результати трьох виразів:
   - isAdult && isSubscribed
   - isAdult || isSubscribed
   - !isSubscribed

 КРОК 8. Імʼя для показу.
 Змінна nickname оголошена, але не має значення.
 Створити змінну displayName: nickname, а якщо його немає — fullName.
 Вивести displayName.

 КРОК 9. Прожиті дні.
 Порахувати, скільки приблизно днів прожив користувач (вік × 365.25),
 та округлити результат до цілого. Вивести отримане число.

 КРОК 10. Код підтвердження.
 Згенерувати випадкове чотиризначне ціле число від 1000 до 9999 включно.
 Вивести його.

 КРОК 11. Лічильник входів.
 Змінна visits дорівнює 0. Зафіксувати два входи користувача:
 перший — постфіксним інкрементом, другий — префіксним.
 Після кожного вивести і результат самого виразу, і поточне значення visits.

 КРОК 12. Картка користувача.
 Одним багаторядковим шаблонним літералом вивести в консоль підсумкову картку:

 Користувач: Taras Shevchenko
 Показувати як: Taras Shevchenko
 Вік: 32 (через 10 років — 42)
 Email: Ta***@gmail.com
 Повнолітній: true
 Підписка: true
 Входів: 2
 Прожито днів: 11688
 Код підтвердження: 4821

 Усі значення мають підставлятися зі змінних, а не бути вписаними вручну.
 Код підтвердження щоразу буде іншим — це нормально.
*/

// ==== ДАНІ (не змінювати) ====

let firstName = "tARAS";
let lastName = "shevchenko";
let birthYear = "1994";
let email = "Taras.Shevchenko@Gmail.com";
let isSubscribed = true;
let nickname;
let visits = 0;
const currentYear = 2026;

// ==== КОД НИЖЧЕ ====//
// ==== 1 ====//
birthYear = "1994";
console.log(typeof birthYear);
let newbirthYear = +birthYear;
console.log(newbirthYear, typeof(newbirthYear));

// ==== 2 ====//
birthYear = 1994;
let age = currentYear - +birthYear;
console.log(age);
let ageIn10Years = age + 10;
console.log(ageIn10Years);
// ==== 3 ====//
firstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
console.log(firstName);
lastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
console.log(lastName);


// ==== 4 ====//
let fullName = firstName+ " "+ lastName;
console.log(fullName);
let length = fullName.length;
console.log(length);

// ==== 5 ====//
email = "Taras.Shevchenko@Gmail.com";
let atIndex = email.indexOf("@");
console.log(atIndex);
let login = email.substring(0, atIndex);
let domain = email.slice(atIndex + 1).toLowerCase();
console.log(login);
console.log(domain);


// ==== 6 ====//
let maskedEmail = login.substring(0, 2) + "***" + email.charAt(atIndex + 1) + domain;
console.log(maskedEmail);
// ==== 7 ====//
let isAdult = age >= 18;
console.log(isAdult);
console.log(typeof isAdult);
console.log("isAdult && isSubscribed:", isAdult && isSubscribed);
console.log("isAdult || isSubscribed:", isAdult || isSubscribed);
console.log("!isSubscribed:", !isSubscribed);

// ==== 8 ====//

let displayName = nickname || fullName;
console.log(displayName);

// ==== 9 ====//
 age = currentYear - +birthYear;
let daysLived = Math.round(age * 365.25);
console.log(daysLived);

// ==== 10 ====//
let randomNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
console.log(randomNumber);


// ==== 11 ====//
visits = 0;
console.log(++visits);
console.log(visits); // ==== префіксний інкремент ====//
console.log(visits++); // ==== постфіксний інкремент ====//
console.log(visits);

// ==== 12 ====//
let userCard = {
  fullName: fullName,
  displayName: displayName,
  age: age,
  email: maskedEmail,
  isAdult: isAdult,
  isSubscribed: isSubscribed,
  visits: visits,
  daysLived: daysLived,
  confirmationCode: randomNumber
};
console.log(`Користувач: ${userCard.fullName}
Показувати як: ${userCard.displayName}
Вік: ${userCard.age} (через 10 років — ${userCard.age + 10})
Email: ${userCard.email}
Повнолітній: ${userCard.isAdult}
Підписка: ${userCard.isSubscribed}
Входів: ${userCard.visits}
Прожито днів: ${userCard.daysLived}
Код підтвердження: ${userCard.confirmationCode}`);