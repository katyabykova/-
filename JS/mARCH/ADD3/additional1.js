// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let array = [1,2,3,4,5,'привет','my','name','is','katya',[6,'js',true],[7,'java',false],[8,'react',true],[9,'phyton',false],[10,'c++',true]]

console.log(array)

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let emptyArr = [];
emptyArr[0] = 456;
emptyArr[1] = 'katya';
emptyArr[2] = true;
console.log(emptyArr)
//
// - є масив
let arr = [2,17,13,6,22,31,45,66,100,-18]

// 1. перебрати його циклом while

let i = 1;
while (i<arr.length){
    console.log(arr[i]);
    i++
}

//     2. перебрати його циклом for

for (x=0;x<arr.length;x++){
    console.log(arr[x])
}

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

let c=0;
while (c<arr.length){
    if(c%2 !== 0){
        console.log(arr[c])
    }
    c++
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for(d=0;d<arr.length;d++){
    if(d%2 !== 0){
        console.log(arr[d])
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення

let e = 0;
while (e<arr.length){
    if(arr[e]%2===0){
        console.log(arr[e])
    }
    e++
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for(f=0;f<arr.length;f++){
    if(arr[f]%2===0){
        console.log(arr[f])
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"

    for (j = 0; j < arr.length; j++) {
        if (arr[j] % 3 === 0) {
            arr[j] = 'okten';
        }console.log(arr[j])
    }


// 8. вивести масив в зворотньому порядку.

for(k=arr.length-1;k>=0;k--){
    console.log(arr[k])
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

let l = arr.length-1;
while (l>=0){
console.log(arr[l])
    l--
}

for(m=arr.length-1;m>=0;m--){
    console.log(arr[m])
}

let n=arr.length-1;
while (n>=0){
    if(n%2 !== 0) {
        console.log(arr[n]);
    }
    n--
    }

for(o=arr.length-1;o>=0;o--){
    if(o%2 !== 0){
        console.log(arr[o])
    }
}

let p = arr.length-1;
while (p>=0){
    if(arr[p]%2===0){
        console.log(arr[p])
    }
    p--
}

for(q=arr.length-1;q>=0;q--){
    if(arr[q]%2===0){
        console.log(arr[q])
    }
}

for (r=arr.length-1; r >=0; r--) {
    if (arr[r] % 3 === 0) {
        arr[r] = 'okten';
    }console.log(arr[r])
}


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let arr1 = [1,2,3,4,5,6,7,8,9,10]
for(let s of arr1){
    console.log(s)
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let arr2 = ['hello','my','name','is','katya','ой','у','лузі','червона','калина']
for(let word of arr2){
    console.log(word)
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let arr3 = [1,2,3,'I','like','js',true,true,true,false]
for(let el of arr3){
    console.log(el)
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
for (let el of arr3){
    if (typeof el == "boolean"){
        console.log(el)
    }
        }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

for(let el of arr3){
    if(typeof el == "number"){
        console.log(el)
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

for(let el of arr3){
    if(typeof el == "string"){
        console.log(el)
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let newArr = [];
newArr[0] = 100;
newArr[1] = 200;
newArr[2] = 300;
newArr[3] = 'I';
newArr[4] = 'like';
newArr[5] = 'travelling';
newArr[6] = true;
newArr[7] = false;
newArr[8] = true;
newArr[9] = false;
for (let index of newArr){
    console.log(index)
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for(t=1;t<11;t++){
    console.log(t);
    document.write(`<br>${t}`)

}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for(t=1;t<101;t++) {
    console.log(t);
    document.write(`<br>${t}`)
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for(t=1;t<101;t+=2) {
    console.log(t);
    document.write(`<br>${t}`)
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for(v=2;v<102;v+=2) {
    console.log(v);
    document.write(`<br>${v}`)
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for(v=1;v<101;v+=2) {
    console.log(v);
    document.write(`<br>${v}`)
}