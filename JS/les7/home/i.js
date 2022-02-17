// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
console.log(1, `katya`, `bykova`, `a@i.ua`, `09880399`)

// створити пустий масив, наповнити його 10 об'єктами new User(....)

let arr = [
    new User(1, `ira`, `ruda`, `a@i.ua`, `09880399`),
    new User(2, `sveta`, `lan`, `b@i.ua`, `09880499`),
    new User(3, `marta`, `kis`, `c@i.ua`, `09880599`),
    new User(4, `inna`, `fun`, `d@i.ua`, `09880699`),
    new User(5, `alla`, `love`, `e@i.ua`, `09880799`),
    new User(6, `anna`, `ivanenko`, `f@i.ua`, `09880899`),
    new User(7, `larisa`, `lysa`, `j@i.ua`, `09880999`),
    new User(8, `yana`, `zyma`, `h@i.ua`, `09881099`),
    new User(9, `nata`, `ptrenko`, `i@i.ua`, `09881199`),
    new User(10, `lapa`, `asd`, `j@i.ua`, `09881299`),
];
console.log(arr)
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(arr.filter((value) => {return value.id%2===0}))

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(arr.sort((a,b) => a.id - b.id))

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client extends User{
    constructor(id, name, surname , email, phone, order) {
       super(id, name, surname , email, phone)
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client

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

console.log(newArr.sort((a,b)=>a.order.length - b.order.length))