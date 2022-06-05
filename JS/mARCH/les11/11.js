// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

let form = document.createElement('form');
let name = document.createElement('input');
let age = document.createElement('input');
let button = document.createElement('button');
button.innerText = 'Ок'
document.body.append(form);
form.append(name,age,button);


button.onclick = function (){
    let obj = {
        name: name.value,
        age: age.value
    }
    localStorage.setItem('key', JSON.stringify(obj));
}

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let form2 = document.createElement('form');
let model = document.createElement('input');
let volume = document.createElement('input')
let type = document.createElement('input');
let button2 = document.createElement('button');
button2.innerText = 'Ок'
document.body.append(form2);
form2.append(model,volume,type,button2);


button2.onclick = () => {
    let arr = [];
    let obj = {
        model: model.value,
        type: type.value,
        volume: volume.value
    }
    arr.push(obj)
    localStorage.setItem('key', JSON.stringify(arr))
}