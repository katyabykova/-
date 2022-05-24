//
// - Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
//Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
//let n1 = 'Harry Potter'
//let n2 = 'Ron Whisley'
//let n3 = 'Hermione Granger'

console.log(n1.replace('..',' '));
console.log(n2.replace('---',' '));
console.log(n3.replace('__',' '));


//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let foo = (length) =>{
    let arr = [];
    for(i=0;i<length;i++){
    arr.push(Math.floor(Math.random()*100));
    }
    return arr
}
console.log(foo(20))
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

console.log(foo(20).sort((a,b) =>a-b))

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

console.log(foo(20).filter(value=>value%2===0))

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

console.log(foo(20).map(value =>value.toString()))

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

let foo1 = (directions) =>{
    if(directions === 'ascending'){
        nums.sort((a,b)=>a-b)
        return nums
    }
    else if(directions === 'descending'){
    nums.sort((a,b)=>b-a)
    return nums}
}
console.log(foo1('descending'))

// - є масив
let coursesAndDurationArray = [
{title: 'JavaScript Complex', monthDuration: 5},
{title: 'Java Complex', monthDuration: 6},
{title: 'Python Complex', monthDuration: 6},
{title: 'QA Complex', monthDuration: 4},
{title: 'FullStack', monthDuration: 7},
{title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

let sortMonth = () => {
    coursesAndDurationArray.sort((a,b)=>b.monthDuration - a.monthDuration)
return coursesAndDurationArray}
console.log(sortMonth())

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let newFilter = coursesAndDurationArray.filter((value) => {
return  value.monthDuration > 5;
});
console.log(newFilter)

//
