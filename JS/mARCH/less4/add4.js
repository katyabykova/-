// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function minNum(a, b, c) {
    if (a < b && a < c) {
        return console.log(a)
    } else if (b < a && b < c) {
        return console.log(b);
    } else if (c < a && c < b) {
        return console.log(c);
    }
}

minNum(10, 2, 3)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function maxNum(a, b, c) {
    if (a > b && a > c) {
        return console.log(a)
    } else if (b > a && b > c) {
        return console.log(b);
    } else if (c > a && c > b) {
        return console.log(c);
    }
}

maxNum(10, 2, 3)

// - створити функцію яка повертає найбільше число з масиву

function maxOfArr(array) {
    for (i = 0; i < array.length; i++) {
        if (array[i] >= array[0]) {
            array[0] = array[i]
        }

    }
    return console.log(array[0])
}

maxOfArr([1, 1, 2, 3, 4, 100, 12, 0])

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function average(array) {
    let x = 0;
    for (i = 0; i < array.length; i++) {
        x = (x + array[i])
    }
    let y = x / array.length;
    return y
}

console.log(average([1, 1, 2, 3]));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function foo(...num) {
    let min = arguments[0];
    let max = arguments[0];
    for (const el of arguments) {
        if (el <= min) {
            min = el;
        }
        if
        (el >= max) {
            max = el
        }
    }
    console.log(`${max} максимальне`);
    return min
}

foo(2, 3, 100)
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

function random() {
    let arr = []
    for (i = 0; i < 20; i++) {
        arr.push(Math.round(Math.random() * 100));
    }
    console.log(arr)
}

random()

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

function random1(limit) {
    let arr = []
    for (i = 0; i < limit; i++) {
        arr.push(Math.round(Math.random() * 100));
    }
    console.log(arr)
}

random1(10)

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

function reverse(array){
    let arr = [];
    for(i=array.length-1;i>=0;i--){
        arr.push(array[i])
    }
console.log(arr)
}

reverse([1, 1, 2, 3, 10])
// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.


function foo2(...a) {
    if (a.length === 1) {
        console.log(a)
    } else {
        console.log(arguments[0]+arguments[1])
    }
}

foo2(1,2)

//
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

function foo3(arr1,arr2) {
    let arr = [];
   for(i=0;i<arr1.length&&i<arr2.length;i++) {
       arr[i]=arr1[i]+arr2[i]
   }
    console.log(arr)
}
foo3([1,2,3,4],[2,3,4,5])


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

//не сделала

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]