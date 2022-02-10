// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let littleNum = (a, b, c) => {
    if (a < b && a < c) {
        document.write(`${a} - найменше`)
    } else if (b < a && b < c) {
        document.write(`${b} - найменше`)
    } else if (a === b || b === c) {
        document.write(`введіть різні числа`)
    } else {
        document.write(`${c} - найменше`)
    }
}
littleNum(6, 6, 6)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let bigNum = (a, b, c) => {
    if (a > b && a > c) {
        document.write(`<br>${a} - найбільше`)
    } else if (b > a && b > c) {
        document.write(`<br>${b} - найбільше`)
    } else if (a === b || b === c) {
        document.write(`<br>введіть різні числа`)
    } else {
        document.write(`<br>${c} - найбільше`)
    }
}
bigNum(9, 4, 5)

// - створити функцію яка повертає найбільше число з масиву

let arr = [7, 0, 6, -30];
let numMax = () => {
    let max = arr[0];
    for (const num of arr) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}
console.log(numMax(arr), `найбільше число`);

// - створити функцію яка повертає найменьше число з масиву

let numMin = () => { //масив беру предыдущий
    let min = arr[0];
    for (const num of arr) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}
console.log(numMin(arr), `найменше число`);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let arr2 = [1, 2, 3, 4, 5, 6, 100]
let sum = () => {
    let x = 0
    for (const element of arr2) {
        x = x + element;
    }
    return x;
}
console.log(sum(arr2), `сума значень масиву`)

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let middle = () => {//масив беру предыдущий arr2
    let x = 0
    for (const element of arr2) {
        x = x + element
    }
    return x / arr2.length
}
console.log(middle(arr2), `середнє арифм`)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

let minMax = (arr2) => { //массив arr2 выше
    let min = arr2[0];
    let max = arr2[0];
    for (const el of arr2) {
        if (el > max) {
            max = el;
        }
        if (el < min) {
            min = el;
        }
    }
    console.log('max: ', max);
    return min;
}
minMax(arr2)

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

let random = (lenght) => {
    const arr = []
    for (i = 0; i < lenght; i++) {
        arr.push(Math.round(Math.random() * 100));
    }
    return arr
}
console.log(random(10))

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

let randomLength = (length,limit) => {
    const arr = []
    for (let i = 0; i < length; i++) {
        arr.push(Math.round(Math.random() * limit));
    }
    return arr
}
console.log(randomLength(10,50))

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let reverse = (arr2) => {
    let arr3 = arr2.reverse()
    return arr3
}
console.log(reverse(arr2))
