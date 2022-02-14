// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str = `hello world`;
console.log(str.length)

let str1 = 'lorem ipsum';
console.log(str1.length)

let str2  = 'javascript is cool';
console.log(str2.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log(str.toUpperCase());
console.log(str1.toUpperCase());
console.log(str2.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log(str.toLowerCase(str.toUpperCase()));
console.log(str1.toLowerCase(str1.toUpperCase()));
console.log(str2.toLowerCase(str2.toUpperCase()));

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str4 = ' dirty string   '
console.log(str4.replaceAll(' ',''));
console.log(str4.trim())//trim - убирает только пробелы  по краям

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str5 = 'Каждый охотник желает знать';
console.log(str5.split(' '));
     // ['Каждый', 'охотник', 'желает', 'знать']


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

console.log(str5.substr(str5,7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let str6 = "HTML JavaScript PHP";
console.log(str6.split(' ').join('-').toUpperCase())

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

console.log(str[0].toUpperCase() + str.slice(1))

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

console.log(str.split(' ').map(word =>word[0].toUpperCase()+word.slice(1)).join(' '))