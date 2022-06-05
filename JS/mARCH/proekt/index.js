//     В index.html
//     1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули
//index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(value => {
            let box = document.createElement('div');
            box.className = 'box';
            document.body.append(box);
            for (const el of value) {
                let littleBox = document.createElement('div');
                littleBox.className = 'little_box';
                box.append(littleBox);
                littleBox.innerHTML = `
            <p>ID: ${el.id}</p>
            <p>NAME: ${el.name}</p>
            <button><a href="user-details.html">MORE</a></button>`;
                littleBox.onclick = () =>{
                    localStorage.setItem('key', JSON.stringify(el))
                }
            }
        }
    )

