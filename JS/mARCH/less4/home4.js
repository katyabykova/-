// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function squareRectangle(a, b) {
    return result = a * b;
}

console.log('Площа прямокутника - ', squareRectangle(10, 12))

// - створити функцію яка обчислює та повертає площу кола з радіусом r

const PI = 3.14

function squareCircle(r) {
    return result = PI * r ** 2
}

console.log('Площа кола -', squareCircle(10))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function squareCylinder(h, r) {
    return result = 2 * PI * r * h
}

console.log('Площа циліндру -', squareCylinder(3, 15))

// - створити функцію яка приймає масив та виводить кожен його елемент

function arr(...num) {
    for (el of num) {
        document.write(`${el}`)
    }
}

arr([1, true, 'katya'])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function pCreator(text) {
    document.write(`<p>${text}</p>`)
}

console.log(pCreator('Hello'))

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function ulLiCreator(text) {
    document.write(`<ul>`);
    for (i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

ulLiCreator('Katya')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function ulLiCreator2(text, quantity) {
    document.write(`<ul>`);
    for (i = 0; i < quantity; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)

}

ulLiCreator2('Okten', 10)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function arr2(array) {
    document.write(`<ul>`);
    for (const el of array) {
        document.write(`<li>${el}</li>`)
    }
    document.write(`</ul>`)
}

arr2([1, true, 'katya', 2, false])


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function arr3(array) {
    for (const el of array) {
        document.write(`<div>${el.id} ${el.name} ${el.age}</div>`)
    }
}

arr3([{id: 1, name: `katya`, age: 100}, {id: 2, name: `sveta`, age: 98}, {id: 3, name: `vasya`, age: 89}])

// - створити функцію яка повертає найменьше число з масиву

function minNum(array) {
    for (i = 0; i < array.length; i++) {
        if (array[i] <= array[0]) {
            array[0] = array[i]
        }
    }
    console.log(array[0])
}

(minNum([10, 2, 3, 4, 5, 6, 7, 8, 9]))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function sumArray() {
    let x = 0;
    for (const el of arguments) {
        x = x + el;
    }
    return x
}

console.log(sumArray(10, 2, 3, 4, 5, 6, 7, 8, 9))
