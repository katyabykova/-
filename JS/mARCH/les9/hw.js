// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let block = document.createElement('div');
block.classList.add('wrap', 'collapse', 'alpha', 'beta');
block.style.backgroundColor = 'grey';
block.style.color = 'red';
block.style.fontSize = '40px';
document.body.append(block);
document.body.append(block.cloneNode(true));

//- Є масив:

let arr= ['Main','Products','About us','Contacts']

//Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

for(const el of arr){
    let li = document.createElement('li');
    li.innerText = el;
    let addli = document.getElementsByClassName('menu')[0];
    addli.append(li)
}

//- Є масив
let coursesAndDurationArray = [
     {title: 'JavaScript Complex', monthDuration: 5},
     {title: 'Java Complex', monthDuration: 6},
     {title: 'Python Complex', monthDuration: 6},
     {title: 'QA Complex', monthDuration: 4},
     {title: 'FullStack', monthDuration: 7},
     {title: 'Frontend', monthDuration: 4}
 ];
//Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
//Завдання робити через цикли.

for(const el of coursesAndDurationArray){
    let newBlock = document.createElement('div');
    newBlock.innerText = `${el.title} ${el.monthDuration}`;
    document.body.append(newBlock)
}

// - Є масив
let coursesAndDurationArray1 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
  //  Завдання робити через цикли.

for(const el of coursesAndDurationArray1){
    let newDiv = document.createElement('div');
    newDiv.className = 'item';
    let newH1 = document.createElement('h1');
    newH1.className = 'heading';
    newH1.innerText = `${el.title}`;
    let newP = document.createElement('p');
    newP.className = 'description';
    newP.innerText = `${el.monthDuration}`;
    newDiv.append(newH1);
    newH1.append(newP)
    document.body.append(newDiv)
}