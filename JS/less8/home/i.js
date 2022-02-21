// - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"

console.log(document.getElementById('content'))

// -- отримує текст з блоку з id "rules"

console.log(document.getElementById('rules'))

// -- замініть текст параграфа з id 'content' на будь-який інший

document.getElementById('content').innerHTML = 'katya katya'

// -- замініть текст параграфа з id 'rules' на будь-який інший

document.getElementById('rules').innerHTML = 'bykova bykova'

// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій

let bgFontColor = document.body.children;
for(const el of bgFontColor){
    el.style.backgroundColor = 'red';
    el.style.color = 'blue'
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

console.log(document.getElementById('rules').classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let bgClass = document.getElementsByClassName('fc_rules');
for(const el of bgClass){
    el.style.color = 'red'
}
