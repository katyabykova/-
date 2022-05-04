// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.

let arr=[];
for(i=2;i<101;i+=2){
    arr.push(i)
}
console.log(arr)

//     b. заповнити його 50 непарними числами за допомоги циклу.
let arr1 =[];
for(i=1;i<100;i+=2){
    arr1.push(i)
}
console.log(arr1)

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

let arr2=[];
for(i=0;i<20;i++){
    arr2.push(Math.round(Math.random()*100))}
console.log(arr2)

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let arr3=[];
for(i=0;i<20;i++){
    arr3.push(Math.round(Math.random()*(732-8)+700))}
console.log(arr3)

// 2. Вивести за допомогою console.log кожен третій елемен

for(i=2;i<arr3.length;i+=3){
    console.log(arr3[i])
}

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

for(i=2;i<arr3.length;i+=3){
    if(arr3[i]%2===0){
    console.log(arr3[i])
}}

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

let newArr = [];
for(i=2;i<arr3.length;i+=3){
    if(arr3[i]%2===0){
        newArr.push(arr3[i])
    }}
console.log(newArr)

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

let array = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
for(i=0;i<array.length;i++){
    if(array[i]%2===0){
        console.log(array[i-1])
    }
}

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let array1=[100,250,50,168,120,345,188];
let sum = array1[0]
for(i=1;i<array1.length;i++){
    sum+=array1[i];
}
console.log(Math.round(sum / array1.length),'середній чек');

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let array2=[];
let newArr2 = [];
for(i=0;i<20;i++){
    array2.push(Math.round(Math.random()*100));
    newArr2.push(array2[i]*5)
}
console.log(array2)
console.log(newArr2)

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

let a = [1,true,'katya',2,false,'hello'];
let newA= [];
for(i=0;i<a.length;i++){
    if(typeof a[i] == "number"){
        newA.push(a[i])
    }
}
console.log(newA)

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
         {id: 1, name: 'vasya', age: 31, status: false},
         {id: 2, name: 'petya', age: 30, status: true},
         {id: 3, name: 'kolya', age: 29, status: true},
         {id: 4, name: 'olya', age: 28, status: false}
     ];

 let citiesWithId = [
     {user_id: 3, country: 'USA', city: 'Portland'},
     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
     {user_id: 2, country: 'Poland', city: 'Krakow'},
     {user_id: 4, country: 'USA', city: 'Miami'}
 ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]

//
//
//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let a1 = [1,2,3,4,5,6,7,8,9,10]
for(const el of a1){
    if (el%2===0){
        console.log(el)
    }
}
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

let a2 = [];
for(i=0;i<a1.length;i++){
    a2[i]=a1[i]
}
console.log(a2)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let a3 = [ 'a', 'b', 'c'];
let z='';
for(i=0;i<a3.length;i++){
    z+=a3[i];
}
console.log(z)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

let y=''
i=0;
while (i<a3.length){
    y+=a3[i];
    i++
}
console.log(y)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let x='';
for(const el of a3){
    x+=el
}
console.log(x)