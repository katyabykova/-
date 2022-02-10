/*Всі функції повинні бути описані стрілочним типом!!!!*/
/*- створити функцію яка обчислює та повертає площу прямокутника висотою*/

let sOfRectangle = (width, height) => width * height;
console.log(sOfRectangle(5, 6), `площа прямокутника`);

/*- створити функцію яка обчислює та повертає площу кола*/
let PI = 3.1415926
let sOfСircle = (r) => PI * Math.pow(r, 2);
console.log(sOfСircle(4), `площа кола`);

/*- створити функцію яка обчислює та повертає площу циліндру*/

let sOfСylinder = (r, h) => 2 * PI * (r + h);
console.log(sOfСylinder(5, 4), `площа циліндру`)

/*- створити функцію яка приймає масив та виводить кожен його елемент*/

let mass = [1, 'це масив', true];
let arr = (mass) => {
    for (i = 0; i < mass.length; i++) {
        console.log(mass[i]);
    }
}
arr(mass)

/*- створити функцію яка  створює параграф з текстом. Текст задати через аргумент*/

let p = (arg) => document.write(`<p>${arg}</p>`)
p(`hello katya`)

/*- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий*/

let ulLi = (a) => {
    for(i=0;i<3;i++){
        document.write(`<ul><li>${a}</li></ul>`)
    }
}
ulLi(`HELLO`)

/*- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)*/

let creatorLi = (text,numofli) => {
    for(i=0;i<numofli;i++){
        document.write(`<ul><li>${text}</li></ul>`)
    }
}
creatorLi(`katya`,3)

/*- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список*/
let a = [`hello`,2022, true,`like`]
let buildLi = (a) => {
    for(i=0;i<a.length;i++){
        document.write(`<ul><li>${a[i]}</li></ul>`)
    }
}
buildLi(a)

/*- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.*/
let b = [{id:1,name:`katya`,age:100},{id:2,name:`sveta`,age:98},{id:3,name:`vasya`,age:89}]
let bloks = (b) => {
    for(const obj of b){
        document.write(`<div>${obj.id} ${obj.name} ${obj.age}</div>`);
    }}
bloks(b)

