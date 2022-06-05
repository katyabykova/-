// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
//     которая имеет детальную информацию про текущий пост.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
//блоки с краткой информацией про post - в ряд по 5 объектов.

let info = JSON.parse(localStorage.getItem('key'));
let box = document.createElement('div');
document.body.append(box);
box.className = 'box';


for (const el in info) {

    if (typeof info[el] !== "object") {
        let data = document.createElement('p');
        data.innerText = `${el.toUpperCase()} : ${info[el]};`
        box.append(data);
    } else {
        let data1 = document.createElement('p');
        data1.innerText = `${el.toUpperCase()}:`;
        box.append(data1);

        for (const elem in info[el]) {
            if (typeof info[el][elem] !== "object") {
                let data3 = document.createElement('p');
                data3.innerText = `${elem.toUpperCase()} : ${info[el][elem]};`;
                box.append(data3);
            } else {
                for (const item in info[el][elem]) {
                    let data4 = document.createElement('p');
                    data4.innerText = `${item.toUpperCase()} : ${info[el][elem][item]};`
                    box.append(data4);
                }
            }
        }
    }
}

let button = document.createElement('button');
button.className = "post";
button.innerText = 'post of current user';
document.body.append(button);


button.onclick = () => {

    fetch(`https://jsonplaceholder.typicode.com/users/${info.id}/posts`)
        .then(response => response.json())
        .then(value => {

                let boxTitle = document.createElement('div');
                boxTitle.className = 'boxTitle';
                document.body.append(boxTitle);
                for (const el of value) {
                    let smallBox = document.createElement('div');
                    smallBox.className = 'smallBox';
                    boxTitle.append(smallBox);
                    smallBox.innerHTML = `
            <p> TITLE: ${el.title}</p>
            <button class="posts"><a href="post-details.html">MORE</a></button>`;
                    smallBox.onclick = () => {
                        localStorage.setItem('anotherkey', JSON.stringify(el))
                    }
                    button.disabled = true;
                }
            }
        )
}

