//- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//Вивести кожну змінну за допомогою: console.log , alert, document.write

let a = 'hello';
let b = 'owu';
let c = 'com';
let d = 'ua';
let e = 1;
let f = 10;
let g = -999;
let h = 123;
let i = 3.14;
let j = 2.7;
let k = 16;
let l = true;
let m = false;
console.log(`${a} ${b} ${c} ${d} ${e} ${f} ${g} ${h} ${i} ${j} ${k} ${l} ${m}`)
alert(`${a} ${b} ${c} ${d} ${e} ${f} ${g} ${h} ${i} ${j} ${k} ${l} ${m}`)
document.write(`${a} ${b} ${c} ${d} ${e} ${f} ${g} ${h} ${i} ${j} ${k} ${l} ${m}`)

//- Створити об'єкт book з наступними полями :
//назва, (тип string)
//кількість сторінок (числовий тип),
//жанр (string)


let book = {
    name: 'kolobok',
    pages: 100,
    genre: 'fantasy'
}

//- Створити об'єкт book з наступними полями :
//назва, (тип string)
//кількість сторінок (числовий тип),
//жанр (string)
//автори (тип - масив, кожен елемент масиву - це стрінга)

let book1 = {
    name: 'kolobok',
    pages: 100,
    genre: 'fantasy',
    authors: {
        name1: 'pushkin',
        name2: 'shevchenko'
    }
}
console.log(book1)
//- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Катерина';
let middleName = 'Володимирівна';
let lastName = 'Бикова';
let person = `${firstName} ${middleName} ${lastName}`;
console.log(person)

//- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let name1 = prompt('Імя?');
let middleName1 = prompt('По батькові?');
let lastName1 = prompt('Призвище?');
let age = prompt('Років?')
console.log(`${name1} ${middleName1} ${lastName1} ${age}`)

//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let aa = 100; let bb = '100'; let cc = true;

console.log(typeof aa, typeof bb, typeof cc)

//- Створити масив об'єктів з назвою books з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

let books = [
    {
    name: 'kolobok',
    pages: 100,
    genre: 'fantasy',
    authors: {
        name1: 'pushkin',
        name2: 'shevchenko'
    }},
    {
        name: 'zolushka',
        pages: 100,
        genre: 'fantasy',
        authors: {
            name1: 'pushkin',
            name2: 'shevchenko'
        }},
    {
        name: 'harrypotter',
        pages: 100,
        genre: 'fantasy',
        authors: {
            name1: 'pushkin',
            name2: 'shevchenko'
        }}
]
console.log(books[0],books[1],books[2])

//5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//Значення площі зберігати в змінній s.

let height = 23;
let width = 10;
let s = height * width;
console.log(s)

//6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
//результат помістіть у змінну v.

let heightC = 10;
let dC = 4;
let PI = 3.1415926;
let v = PI * dC/2*dC/2 * heightC;
console.log(v)

//7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
//Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

let nn = 3;
let mm = 4;
let kk = Math.sqrt(Math.pow(nn,2)+Math.pow(mm,2));
console.log(kk)

//- Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//    В однакових виразах не використовувати однакові оператори!!!
console.log(5 < 6) //-> true
console.log(5 > 6) // false
console.log(5 == 6) //-> false
console.log(5 === 6) // -> false
console.log(10 == 10) //-> true
console.log(10 === 10)// -> true
console.log(10 != 10)// -> false
console.log(10 < 10)// -> false
console.log(10 > 10)// -> false
console.log(23 == '123') //-> false
console.log(123 !== '123')// -> true