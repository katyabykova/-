// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации
// - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.

let info = JSON.parse(localStorage.getItem('anotherkey'));
let box = document.createElement('div');
document.body.append(box);
box.className = 'box';

for (const el in info) {
    let data = document.createElement('p');
    data.innerText = `${el.toUpperCase()} : ${info[el]};`
    box.append(data);
}

fetch(`https://jsonplaceholder.typicode.com/posts/${info.id}/comments`)
    .then(response => response.json())
    .then(value => {
        let box1 = document.createElement('div');
        box1.className = 'box1';
        document.body.append(box1);
        for (const el of value) {
            let smallBox = document.createElement('div');
            smallBox.className = 'smallBox';
            box1.append(smallBox);
            smallBox.innerHTML = `
                COMMENT:<p>${el.body}</p>`;
        }
    })