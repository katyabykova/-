// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let block = document.createElement('div');
block.innerText = 'Hello';
block.classList.add('wrap', 'collapse', 'alpha', 'beta');
block.style.backgroundColor = 'grey';
block.style.color = 'red';
block.style.fontSize = '40px';
document.body.append(block);
document.body.append(block.cloneNode(true));


// - Є масив:
let mas = ['Main','Products','About us','Contacts']


// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

for (let el of mas){
let li = document.createElement('li');
li.innerText = `${el}`;
let createLi = document.getElementsByClassName('menu')[0];
createLi.append(li)
}


// // - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for(let el of coursesAndDurationArray){
    let block = document.createElement('div');
    block.innerText = `${el.title} - ${el.monthDuration}`
    document.body.append(block)
}

// - Є масив
//let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for(let el of coursesAndDurationArray){
    let div = document.createElement('div');
    div.classList.add('item');
    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = `${el.title}`;
    let p = document.createElement('p');
    p.classList.add('description');
    p.innerText = `${el.monthDuration}`
    div.appendChild(h1);
    div.appendChild(p);
    document.body.appendChild(div);
}