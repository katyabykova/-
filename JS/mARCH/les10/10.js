// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

let elementdiv = document.createElement('div');
elementdiv.id = 'text';
elementdiv.innerText = 'HELLO';
document.body.append(elementdiv);

let but = document.createElement('button');
but.innerText = 'Нажми';
but.style.width = '100px';
but.style.height = '50px';
document.body.append(but);
but.onclick = function (){
    document.getElementById('text').remove();
}


//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

document.body.append(document.createElement('hr'));
let form = document.createElement('form');
let inputText = document.createElement('input');
let inputSubm = document.createElement('input')
form.append(inputText,inputSubm);
inputText.type = 'text';
inputSubm.type = 'submit';
document.body.append(form);
inputSubm.onclick = function (){
    if(inputText.value<18){
        document.write(`Ваш вік замалий`)
    }
    else {
        document.write(`Ласкаво просимо`)
    }
}

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

document.body.append(document.createElement('hr'));

let form1 = document.createElement('form');
form1.name = 'form1';
let form2 = document.createElement('form');
form2.name = 'form2';
let input1_1 = document.createElement('input');
input1_1.name = 'input1_1';
let input1_2 = document.createElement('input');
input1_2.name = 'input1_2';
let input2_1 = document.createElement('input');
input2_1.name = 'input2_1';
let input2_2 = document.createElement('input');
input2_2.name = 'input2_2';


let but1 = document.createElement('button');
but1.innerText = 'Нажми';
but1.style.width = '100px';
but1.style.height = '50px';

form1.append(input1_1,input1_2);
form2.append(input2_1,input2_2);
document.body.append(form1,form2);
document.body.append(but1);

but1.onclick = function (){
    let f1 = document.forms.form1;
    let f2 = document.forms.form2;
    let input1 = f1.input1_1.value;
    let input2 = f1.input1_2.value;
    let input3 = f2.input2_1.value;
    let input4 = f2.input2_2.value;
    console.log(input1,input2,input3,input4)
}


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

document.body.append(document.createElement('hr'));

let input1 = document.createElement('input');
input1.type = 'number';
input1.name = 'row';
let input2 = document.createElement('input');
input2.type = 'number';
input2.name = 'cells';
let input3 = document.createElement('input');
let button = document.createElement('button');
button.innerText = 'Нажми';
button.style.width = '100px';
button.style.height = '23px';

document.body.append(input1,input2,input3,button)


button.onclick = function (){
    let table = document.createElement('table');
    document.body.append(table);

    for(i=0;i<input1.value;i++){
        let tr = document.createElement('tr');
            table.append(tr);
            for(x=0;x<input2.value;x++){
                let td = document.createElement('td');
                td.innerText = `${input3.value}`;
                td.style.border = '2px solid red';
                tr.append(td);
            }
        }

}