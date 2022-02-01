//Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
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

console.log(a,b,c,d,e,f,g,h,i,j,k,l,m);
alert(a);
alert(b);
alert(c);
alert(d);
alert(e);
alert(f);
alert(g);
alert(h);
alert(i);
alert(k);
alert(l);
alert(m);

document.write(a,' ',b,' ',c,' ',d,' ',e,' ',f,' ',g,' ',h,' ',i,' ',j,' ',k,' ',l,' ',m);

//Переприсвоїти кожній змінній з завдання значення на довільне.
    //Вивести кожну змінну за допомогою: console.log , alert, document.write

a = 'Ничего';
b = 'не';
c = 'понятно';
d = 'совсем';
e = 'в';
f = 'этом';
g = 'задании';
h = 100500;
i = 'раз';
j = 'смотрю';
k = 'лекцию';
l = 'it is';
m = true;

console.log(a,b,c,d,e,f,g,h,i,j,k,l,m);
alert(a);
alert(b);
alert(c);
alert(d);
alert(e);
alert(f);
alert(g);
alert(h);
alert(i);
alert(k);
alert(l);
alert(m);

document.write(' ',a,' ',b,' ',c,' ',d,' ',e,' ',f,' ',g,' ',h,' ',i,' ',j,' ',k,' ',l,' ',m,' ');

//Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
//- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
   // Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

let firstName = 'Екатерина';
let middleName = 'Владимировна';
let lastName = 'Быкова';
let person = firstName+' '+middleName+' '+lastName;

let name = prompt ("Ваше имя?");
alert(name);
let middle = prompt("Отчество?");
alert(middle);
let last = prompt("Фамилия?");
alert(last);
let old = prompt("Возраст?");
alert(old);

console.log(person);
document.write('Вітаю ',name,' ',middle,'.',' Тобі '+old+' років'+"<br/>");

//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    //let a = 100; let b = '100'; let c = true;

a = 100;
b = '100';
c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

//Визначити відповідний оператор в виразах що б вийшов відповідний результат.
    //В однакових виразах не використовувати однакові оператори!!!

console.log(5 < 6);// true
console.log(5 > 6 );// false
console.log(5 == 6);// false
console.log(5 >= 6);// false
console.log(10 == 10)// true
console.log(10 === 10) //true
console.log(10 != 10) //false
console.log(10 !== 10)//false
console.log(10 < 10)// false
console.log(123 === '123')// false
console.log(123 == '123') //true

//Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
let str = "20";
let aaa = 5;
document.write(str + aaa + "<br/>");
document.write(str - aaa + "<br/>");
document.write(str * "2" + "<br/>");
document.write(str / 2 + "<br/>");
//ответ: когда +, то стринга заражает число и ставит знаяения в ряд. все остальные действия работают как обычно, отнимаются, делятся множатся. нет ответа, почему так происходит. на лекуии нам больше ничего не обьяснили на эту тему.
//потому значения 1) 205, 2) 15, 3) 40, 4) 10
//br - подводит линию, получается следуюшие числа с новой строки пишутся
