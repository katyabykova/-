//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let arr = [2,17,13,6,22,31,45,66,100,-18];
//    1. перебрати його циклом while
a=0;
while (a<arr.length){
    console.log(arr[a]);
    a++
}
//2. перебрати його циклом for
for(a=0;a<arr.length;a++){
    console.log(arr[a])
}
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
a=0;
while (a<arr.length){
    if(a % 2 === 1){console.log(arr[a])};
    a++
}
//4. перебрати циклом for та вивести  числа тільки з непарним індексом
for(a=0;a<arr.length;a++){
    if(a % 2 === 1){
    console.log(arr[a])}
}
//5. перебрати циклом while та вивести  числа тільки парні  значення
a=0;
while (a<arr.length){
    if(a % 2 === 0){console.log(arr[a])};
    a++
}
//6. перебрати циклом for та вивести  числа тільки парні  значення
for(a=0;a<arr.length;a++){
    if(a % 2 === 0){
        console.log(arr[a])}
}

//7. замінити кожне число кратне 3 на слово "okten"
for(a=0;a<arr.length;a++){
    if(a % 3 === 0){arr[a] = 'okten'};
    console.log(arr[a])
}
//8. вивести масив в зворотньому порядку.
let arr1 = [2,17,13,6,22,31,45,66,100,-18];
for (a = arr1.length - 1; a >= 0; a--) {
    console.log(arr1[a])

}
//9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
let arr_reverse = [2,17,13,6,22,31,45,66,100,-18];

//1
a = arr_reverse.length - 1
while (a>=0){
    console.log(arr_reverse[a]);
    a--
}
//2
for(a = arr_reverse.length - 1; a>=0; a--){
    console.log(arr_reverse[a])
}
//3
a = arr_reverse.length - 1;
while (a>=0){
    if(a % 2 === 1){console.log(arr_reverse[a])};
    a--
}
//4
for(a = arr_reverse.length - 1; a>=0; a--){
    if(a % 2 === 1){
        console.log(arr_reverse[a])}
}
//5
a = arr_reverse.length - 1;
while (a>=0){
    if(a % 2 === 0){console.log(arr_reverse[a])};
    a--
}
//6
for(a = arr_reverse.length - 1; a>=0; a--){
    if(a % 2 === 0){
        console.log(arr_reverse[a])}
}
//7
for(a = arr_reverse.length - 1; a>=0; a--){
    if(a % 3 === 0){arr_reverse[a] = 'okten'};
    console.log(arr_reverse[a])
}