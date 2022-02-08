/*- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б*/
function calc(a,b) {
    let s = a * b;
    return s;
}
console.log(calc(5,7))

/*- створити функцію яка обчислює та повертає площу кола з радіусом r*/
PI = 3.14;
function calc1(r){
    let s = PI * r**2;
    return s
}
console.log(calc1(10))
/*- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r*/
function calc3(h,r){
    let s = 2*PI*r*(h+r);//S=2πr(h+r)
    return s;
}
console.log(calc3(10,5))
/*- створити функцію яка приймає масив та виводить кожен його елемент*/
function mass([]){
    console.log(arguments);
}
mass(`1`,`1`,`1`,`2`,`2`,`2`)
/*- створити функцію яка створює параграф з текстом. Текст задати через аргумент*/
function p([]){
    for(i=0;i<arguments.length;i++){
        document.write(`<p>`)
    document.write(arguments[i])
        document.write(`</p>`)
}}
p (`hello`,`katya`, 2021, `okten`)

/*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий*/

function ulLi(a){
    document.write(`<ul>`)
    for(i=0;i<3;i++){
        document.write(`<li>${a}</li>`)
    }
    document.write(`</ul>`)
}
ulLi(`HELLO`)

/*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)*/
function creator(text,num){
document.write(`<ul>`)
    for(i=0;i<num;i++){
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
creator(`katya`,3)
/*- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список*/
function arr(a){
    document.write(`<ul>`);
 for(i=0;i<a.length;i++){
     document.write(`<li>${a[i]}</li>`)
 }
 document.write(`</ul>`)
}
arr([`hello`,2022, true,`like`])
/*- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.*/
function arr1(b){
    for(const obj of b){
    document.write(`<div>${obj.id} ${obj.name} ${obj.age}</div>`);
}}
arr1([{id:1,name:`katya`,age:100},{id:2,name:`sveta`,age:98},{id:3,name:`vasya`,age:89}])

