// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
console.log(str1.length,str2.length,str3.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log(str1.toUpperCase(),str2.toUpperCase(),str3.toUpperCase())

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log(str1.toUpperCase().toLowerCase(),str2.toUpperCase().toLowerCase(),str3.toUpperCase().toLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
console.log(str.trim())

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str4 = 'Ревуть воли як ясла повні';
let stringToarray = (str) => console.log(str.split(' '));
stringToarray(str4)

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let arr = [10,8,-7,55,987,-1011,0,1050,0];
console.log(arr.map(value => value.toString()))

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let sortNums = (arr,direction) => {
    if (direction === 'ascending') {
        arr.sort((a,b) => a-b)
    }
    else if (direction ==='descending'){
        arr.sort((a,b)=> b-a)
    }
    console.log(arr)
}
sortNums(nums,'descending')
// - є масив
let coursesAndDurationArray = [
     {title: 'JavaScript Complex', monthDuration: 5},
     {title: 'Java Complex', monthDuration: 6},
     {title: 'Python Complex', monthDuration: 6},
     {title: 'QA Complex', monthDuration: 4},
     {title: 'FullStack', monthDuration: 7},
     {title: 'Frontend', monthDuration: 4}
 ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

console.log(coursesAndDurationArray.sort((a,b)=>b.monthDuration - a.monthDuration))
console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5))

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let card = [
    {cardSuit: 'chirva', value: '6', color: 'red'},
    {cardSuit: 'chirva', value: '7', color: 'red'},
    {cardSuit: 'chirva', value: '8', color: 'red'},
    {cardSuit: 'chirva', value: '9', color: 'red'},
    {cardSuit: 'chirva', value: '10', color: 'red'},
    {cardSuit: 'chirva', value: 'jack', color: 'red'},
    {cardSuit: 'chirva', value: 'queen', color: 'red'},
    {cardSuit: 'chirva', value: 'king', color: 'red'},
    {cardSuit: 'chirva', value: 'ace', color: 'red'},
    {cardSuit: 'bubna', value: '6', color: 'red'},
    {cardSuit: 'bubna', value: '7', color: 'red'},
    {cardSuit: 'bubna', value: '8', color: 'red'},
    {cardSuit: 'bubna', value: '9', color: 'red'},
    {cardSuit: 'bubna', value: '10', color: 'red'},
    {cardSuit: 'bubna', value: 'jack', color: 'red'},
    {cardSuit: 'bubna', value: 'queen', color: 'red'},
    {cardSuit: 'bubna', value: 'king', color: 'red'},
    {cardSuit: 'bubna', value: 'ace', color: 'red'},
    {cardSuit: 'kresta', value: '6', color: 'black'},
    {cardSuit: 'kresta', value: '7', color: 'black'},
    {cardSuit: 'kresta', value: '8', color: 'black'},
    {cardSuit: 'kresta', value: '9', color: 'black'},
    {cardSuit: 'kresta', value: '10', color: 'black'},
    {cardSuit: 'kresta', value: 'jack', color: 'black'},
    {cardSuit: 'kresta', value: 'queen', color: 'black'},
    {cardSuit: 'kresta', value: 'king', color: 'black'},
    {cardSuit: 'kresta', value: 'ace', color: 'black'},
    {cardSuit: 'pika', value: '6', color: 'black'},
    {cardSuit: 'pika', value: '7', color: 'black'},
    {cardSuit: 'pika', value: '8', color: 'black'},
    {cardSuit: 'pika', value: '9', color: 'black'},
    {cardSuit: 'pika', value: '10', color: 'black'},
    {cardSuit: 'pika', value: 'jack', color: 'black'},
    {cardSuit: 'pika', value: 'queen', color: 'black'},
    {cardSuit: 'pika', value: 'king', color: 'black'},
    {cardSuit: 'pika', value: 'ace', color: 'black'},
    {value: 'joker'},
    {value: 'joker'}
]
console.log('піковий туз', card.filter(value => value.cardSuit === 'pika' && value.value === 'ace'))
console.log('всі шістки:', card.filter(value => value.value === '6'))
console.log('всі червоні карти', card.filter(value => value.color === 'red'))
console.log('всі буби:', card.filter(value => value.cardSuit ==='bubna'))
console.log('всі трефи більше 9:',card.filter(value => value.cardSuit === 'kresta' && value.value.length > 1))

