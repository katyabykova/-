// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let fooMin = (a,b,c)=>{
    if(a<b && a<c){console.log(a,'найменше')}
    else if (b<a && b<c){console.log(b, 'найменше')}
    else if (c<a && c<b){console.log(c, 'найменше')}
    else {console.log('невірний ввод')}
}
fooMin(2,-3,4)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let fooMax = (a,b,c)=>{
    if(a>b && a>c){console.log(a,'найбільше')}
    else if (b>a && b>c){console.log(b, 'найбільше')}
    else if (c>a && c>b){console.log(c, 'найбільше')}
    else {console.log('невірний ввод')}
}
fooMax(2,-3,4)

// - створити функцію яка повертає найбільше число з масиву

let maxArr = (arr)=>{
    let max=arr[0]
    for (const el of arr){
        if(max<el){
            max=el
        }
    }
    console.log(max, 'найбільше з массиву')
    return max
}
maxArr([1,2,3,4,5,6])
// - створити функцію яка повертає найменьше число з масиву

let minArr = (arr)=>{
    let min=arr[0]
    for (const el of arr){
        if(min>el){
            min=el
        }
    }
    console.log(min, 'найменше з массиву')
    return min
}
minArr([1,2,3,4,5,6])

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let sumArr=(arr)=>{
    let x =arr[0]
    for(i=1;i<arr.length;i++){
        x+=arr[i]

    }
    console.log(x, 'сума')
    return x
}
sumArr([1,2,3,4])

// - Дано натуральное число n. Выведите все числа от 1 до n.

let num = (n)=>{
    for(i=1;i<=n;i++){
        console.log(i)
    }
}
num(10)

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

let numAB = (a,b)=>{
    if(a<b){
        for(i=a;i<=b;i++){
            console.log(i)
        }
    }
    else if(a>b){
        for(i=a;i>=b;i--){
            console.log(i)
        }
    }
    else {console.log('введите 2 разных числа')}
}
numAB(1,5)
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

let foo = (arr,i)=>{
    let y = arr[i];
    arr[i]=arr[i+1];
    arr[i+1] = y;
    console.log(arr)
}
foo([9,8,0,4], 2)

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let foo2 =(arr)=>{
    let zeroArr=[]
    let newArr = []
    for(i=0;i<arr.length;i++){
    if(arr[i]===0){
        zeroArr.push(arr[i])
    }
    else if(arr[i]!==0){
        newArr.push(arr[i])
    }
    }
    newArr.push(...zeroArr)
    console.log(newArr)
}
foo2([0,0,1,0])