// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

function katya(...a){
    if(a.length === 1){
        console.log(a)
    }
    else {
        console.log(arguments[0],arguments[1])
    }
}
katya(1,2,3,4)

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

function sum(a,b){
    for(let i=0;i<a.length&&i<b.length;i++){
    console.log(a[i]+b[i])
}
    return sum
}
sum([1,2,3,4,5],[4,5,6,7,8])

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

let obj = [{id:1,name:`katya`,age:100},{id:2,name:`sveta`,age:98},{id:3,name:`vasya`,age:89}]
    function qqq(obj){
    for(i=0;i<obj.length;i++)
    {Object.keys(obj[i]);
            console.log(qqq())}
    }

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

let arr1 = (a) => Object.assign(a);
console.log([{id:1,name:`katya`,age:100},{id:2,name:`sveta`,age:98},{id:3,name:`vasya`,age:89}])