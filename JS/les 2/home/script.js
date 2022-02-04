//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).

let time = +prompt('Введіть число від 0 до 59');
if(time >= 0 && time <=15){
    document.write('перша чверть')
}
 else if(time > 15 && time <=30){
    document.write('друга чверть')
}
else if(time > 30 && time <=45){
    document.write('третя чверть')
}
else if(time > 30 && time <=59){
    document.write('четверта чверть')
}
else {
    document.write('Неправильний ввод!')
}

//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = +prompt('Введи число от 1 до 31!');
if(day >=1 && day<=11){
    document.write(' це перша декада місяця')
}
else if(day >11 && day<=21){
    document.write(' це друга декада місяця')
}
else if(day >21 && day<=31) {
    document.write(' це третя декада місяця')
}
else{
    document.write(' Неправильний ввод!')
}

//- У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
    //Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

let test = 'aaa'; true; prompt('Введіть значення змінної');
(test === true) ? document.write(' Верно') : document.write(' Неверно');


// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let a = +prompt(' Введіть число');

//if(a !==0){document.write(' Вірно')}
//else {document.write(' Невірно')}

(a !== 0) ? document.write(' вірно') : document.write(' невірно')

//Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

let dayWeek = +prompt('Введи день недели от 1 до 7:')
switch (dayWeek) {
    case 1:
        document.write(' поесть');
        break;
    case 2:
        document.write(' поспать');
        break;
    case 3:
        document.write(' погулять');
        break;
    case 4:
        document.write(' почитать');
        break;
    case 5:
        document.write(' сделать упражнения');
        break;
    case 6:
        document.write(' сходить в театр');
        break;
    case 7:
        document.write(' сходить в кино');
        break;
    default:
        document.write(' Вы не правильно ввели день недели')
}
//Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
let year = +prompt('Введи год');
(year % 4 === 0) ? document.write(' Этот год високосный') : document.write(' Этот год не високосный')

//Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
//Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

let question = 'ECMAScript'; true; prompt('Яка «офіційна» назва JavaScript?');
(question === true) ? (document.write(' Правильно!')) : (document.write(' Не знаєте? ECMAScript!'))


