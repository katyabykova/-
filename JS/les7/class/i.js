// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function CarConstr (model,name,year,speed,volume) {
    this.model = model;
    this.name = name;
    this.year = year;
    this.speed = speed;
    this.volume = volume;
    this.drive = function (){
        console.log(`Ідемо зі швидкістю ${this.speed} на годину`)
    }
    this.info = function () {
        for(const key in this){
            if(typeof this[key] !== 'function'){
                console.log(`${key} - ${this[key]}`)
            }
        }
    }
    this.increaseMaxSpeed = function (newSpeed){
        this.speed = this.speed + newSpeed;
        return this.speed;
    }
    this.changeYear = function (newValue){
        this.year = newValue;
        return this.year
    }
    this.addDriver = function (driver){
        this.driver = driver
    }
}
let car = new CarConstr('golf','vw',2015,200,1.4)
console.log(car)
car.drive()
car.info()
console.log(car.increaseMaxSpeed(300));
console.log(car.changeYear(2020));
car.addDriver('Vova')
console.log(car)

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Constr{
    constructor(model,name,year,speed,volume) {
        this.model = model;
        this.name = name;
        this.year = year;
        this.speed = speed;
        this.volume = volume;
    }
    drive (){
        console.log(`Ідемо зі швидкістю ${this.speed} на годину`)
    }
    info (){
        for(const key in this){
            if(typeof this[key] !== 'function'){
                console.log(`${key} - ${this[key]}`)
            }
        }
    }
    increaseMaxSpeed (newSpeed){
        this.speed = this.speed + newSpeed;
        return this.speed;
    }
    changeYear(newValue){
        this.year = newValue;
        return this.year
    }
    addDriver(driver){
        this.driver = driver
    }

}
let car1 = new Constr('passat','vw',2018,250,2.0)
console.log(car1)
car1.drive()
car1.info()
console.log(car1.increaseMaxSpeed(300));
console.log(car1.changeYear(2020));
car1.addDriver('Vova')
console.log(car1)

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

popPrince = () =>{
    for(const oksize of popArr){
        if(oksize.size === prince.size){
            console.log(`нога ${oksize.size} розміру попелюшки ${oksize.name}`)
        }
    }
}
popPrince()
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

const findPop = popArr.find((value) => value.size === prince.size);

console.log(findPop,`це вона`);