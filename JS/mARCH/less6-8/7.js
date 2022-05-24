// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User (id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone
}

let arr = [
    new User(10, `ira`, `ruda`, `a@i.ua`, `09880399`),
    new User(2, `sveta`, `lan`, `b@i.ua`, `09880499`),
    new User(3, `marta`, `kis`, `c@i.ua`, `09880599`),
    new User(4, `inna`, `fun`, `d@i.ua`, `09880699`),
    new User(5, `alla`, `love`, `e@i.ua`, `09880799`),
    new User(6, `anna`, `ivanenko`, `f@i.ua`, `09880899`),
    new User(7, `larisa`, `lysa`, `j@i.ua`, `09880999`),
    new User(8, `yana`, `zyma`, `h@i.ua`, `09881099`),
    new User(9, `nata`, `ptrenko`, `i@i.ua`, `09881199`),
    new User(1, `lapa`, `asd`, `j@i.ua`, `09881299`),
];
console.log(arr)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(arr.filter((value) => value.id%2 ===0))

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(arr.sort((a,b)=>a.id-b.id))

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client extends User{
    constructor(id, name, surname , email, phone, order) {
        super(id, name, surname , email, phone)
        this.order = order;
    }
}

let newArr = [
    new Client(1, `ira`, `ruda`, `a@i.ua`, `09880399`,['book','spoon','cup']),
    new Client(2, `sveta`, `lan`, `b@i.ua`, `09880499`,['cup','pen']),
    new Client(3, `marta`, `kis`, `c@i.ua`, `09880599`, ['pensil','cake']),
    new Client(4, `inna`, `fun`, `d@i.ua`, `09880699`, ['cup','knife']),
    new Client(5, `alla`, `love`, `e@i.ua`, `09880799`,['pen','plate']),
    new Client(6, `anna`, `ivanenko`, `f@i.ua`, `09880899`,['book','pen']),
    new Client(7, `larisa`, `lysa`, `j@i.ua`, `09880999`,['book','spoon']),
    new Client(8, `yana`, `zyma`, `h@i.ua`, `09881099`,['cup','book','table','mirror']),
    new Client(9, `nata`, `ptrenko`, `i@i.ua`, `09881199`,['book','spoon']),
    new Client(10, `lapa`, `asd`, `j@i.ua`, `09881299`,['pen','cup']),
];

console.log(newArr)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(newArr.sort((a,b)=>a.order.length-b.order.length))

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car (model, prod, year, speed, volume) {
    this.model = model;
    this.prod = prod;
    this.year = year;
    this.speed = speed;
    this.volume = volume;
    this.drive = () => console.log(`їдемо зі швидкістю ${this.speed} на годину`);
    this.info = function (){
        for (const el in this){
           console.log(`${el} = ${this[el]}`)
        }
    }
    this.increaseMaxSpeed = (newSpeed) =>this.speed += newSpeed;
    this.changeYear = (newValue) =>this.year =newValue;
    this.addDriver = (driver)=>this.driver = driver
}
let newCar = new Car('bmv','x5',2022,200,'2')
newCar.drive()
newCar.info()
newCar.increaseMaxSpeed(300)
newCar.changeYear(2023)
newCar.addDriver({name: 'Vasya', age:30})
console.log(newCar)

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car1 {
    constructor(model, prod, year, speed, volume) {
        this.model = model;
        this.prod = prod;
        this.year = year;
        this.speed = speed;
        this.volume = volume;
    }
    drive () {console.log(`їдемо зі швидкістю ${this.speed} на годину`);}
    info (){
        for (const el in this){
            console.log(`${el} = ${this[el]}`)
        }
    }
    increaseMaxSpeed (newSpeed) {this.speed += newSpeed;}
    changeYear (newValue) {this.year =newValue;}
    addDriver (driver) {this.driver = driver}
}
let newCar1 = new Car1('bmv','x5',2022,200,'2')
newCar1.drive()
newCar1.info()
newCar1.increaseMaxSpeed(300)
newCar1.changeYear(2023)
newCar1.addDriver({name: 'Vasya', age:30})
console.log(newCar1)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class PopConstr {
    constructor(name,age,size) {
        this.name = name
        this.age = age
        this.size = size
    }

}
let pop1 = new PopConstr('ira',20,34)
let pop2 = new PopConstr('katya',21,35)
let pop3 = new PopConstr('sveta',22,36)
let pop4 = new PopConstr('nata',23,37)
let pop5 = new PopConstr('alla',24,38)
let pop6 = new PopConstr('anna',25,39)
let pop7 = new PopConstr('eva',26,40)
let pop8 = new PopConstr('ada',27,41)
let pop9 = new PopConstr('olya',28,42)
let pop10 = new PopConstr('lena',29,43)
let popArr = [pop1,pop2,pop3,pop4,pop5,pop6,pop7,pop8,pop9,pop10]
console.log(popArr)

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class PrincConstr{
    constructor(name,age,size) {
        this.name = name
        this.age = age
        this.size = size
    }
}
let prince = new PopConstr('ihor',30,36)

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

for(const el of popArr){
    if(el.size === prince.size){
        console.log(`${el.name} повинна бути з принцом`)
    }
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

const findPop = console.log(popArr.find((value) => value.size === prince.size),'наша попелюшка')

