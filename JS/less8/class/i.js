//1) Напишіть код, який :-->
//a) додає клас з назвою групи, елементу з ід main_header-->

document.getElementById('main_header').classList.add('main')

//b) робить шириниу елементу ul 400px-->

let ulWidth = document.getElementsByTagName('ul');
for(let el of ulWidth){
    el.style.width = '400px';
}

//c) робить шириниу всіх елементів з класом linkList шириною 50%-->

let linkListWidth = document.getElementsByClassName('linkList');
for (let el of linkListWidth){
    el.style.width = '50%';
}

//d) отримує текст який зберігається в елементі з класом listElement2-->

let text = document.getElementsByClassName('listElement2');
for(let el of text){
console.log(el.innerText);
}

//e) отримує всі елементи li та змінює ім колір фону на сірий-->

let changeLi = document.getElementsByTagName('li');
for(let el of changeLi){
    el.style.backgroundColor = 'grey'
}

//f) отримує всі елементи 'a' та додає їм клас anchor-->
//g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів-->
//h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a-->


let changeA = document.getElementsByTagName('a');
for (let el of changeA) {
    el.classList.add('anchor');
if (el.innerText === 'link3') {
    el.style.fontSize = '40px';
}
let elXxx = el.innerText;
el.classList.add(`element_${elXxx}`)
}

//i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()-->
//j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()-->

let changeSubheader = document.getElementsByClassName('sub-header');
for(let el of changeSubheader){
    el.style.backgroundColor = prompt('введи цвет фона');
    if (el.innerText === 'content 2 segment'){
        el.style.color = prompt('введи цвет текста')
    }
}

//k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()-->

let changeCont1 = document.getElementsByClassName('content_1');
for(let el of changeCont1){
    el.innerText = prompt('введи текст')
}

//l) отримати елементи p та змінити їм padding на 20px-->

let chsngeP = document.getElementsByTagName('p');
for(let el of chsngeP){
    el.style.padding = '20px'
}

//m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)-->

let changeText2 = document.getElementsByClassName('text2');
for (let el of changeText2){
    el.innerText = 'dec-2021'
}