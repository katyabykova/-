// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function littleNum(a, b, c) {

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
function bigNum(a, b, c) {
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

// - створити функцію яка повертає найбільше число з масив
function maxNum() {
    let maxNum = arguments[0];
    for (const num of arguments) {
        if (num > maxNum) {
            maxNum = num
        }
    }
    return maxNum
}

console.log(maxNum(20, 2, 3, 4, 5));
document.write(` - найбільше число`)

// - створити функцію яка повертає найменьше число з масиву

function minNum() {
    let minNum = arguments[0];
    for (const num of arguments) {
        if (num < minNum) {
            minNum = num
        }
    }
    return minNum
}

const xxx = minNum(20, 5, 4, 7, 6, 6, -5)
document.write(`<br>${xxx} - найменше число`)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13


function sum() {
    let sum = 0
    for (const arrayElement of arguments) {
        sum = sum + arrayElement;
    }
    return sum;
}

const qqq = sum(1, 2, 3, 4, 5, 6)
document.write(`</br>Сума: ${qqq}`)


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function middle() {
    let sum = 0
    for (const number of arguments) {
        sum = sum + number
    }
    return sum / arguments.length
}

const ccc = middle(1, 2, 3)
document.write(`<br>Середнє арифметичне ${ccc}`)


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function minMax() {
    let min = arguments[0];
    let max = arguments[0];
    for (const el of arguments) {
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

console.log('min: ', minMax(1, 2, 3, 4, 5, 6));


// - створити функцію яка заповнює масив рандомними числами (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
function random(a) {
    const arr = []
    for (let i = 0; i < a; i++) {
        arr.push(Math.round(Math.random() * 100));
    }
    return arr
}

console.log(random(10))


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

function random1(a,limit) {
    const arr = []
    for (let i = 0; i < a; i++) {
        arr.push(Math.round(Math.random() * limit));
    }
    return arr
}

console.log(random1(10,50))

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function reverse(){
for(i=arguments.length-1;i>=0;i--){
console.log(arguments[i])
    document.write(`<br>${arguments[i]}`)
}
return arguments
}
reverse(1,`yyy`,2,`eee`,3,`xxx`)