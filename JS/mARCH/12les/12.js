// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(resp => resp.json())
//     .then(posts => {
//         let wrapper = document.createElement('div');
//         wrapper.className = 'wrapper';
//         document.body.append(wrapper);
//         for (const el of posts){
//             let divPost = document.createElement('div');
//             divPost.className = 'post';
//             divPost.innerHTML =`
//             <h3>UserID: ${el.userId}<h3>
//             <h3>ID : ${el.id}</h3>
//             <h4>Title: ${el.title}</h4>
//             <h5>Body: ${el.body}<h5>
// `
//             wrapper.append(divPost)
//         }
//     })
//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
.then(resp => resp.json())
.then(value => {
    let wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    document.body.append(wrapper);
    for(const el of value){
        let coments = document.createElement('div');
        coments.className = 'coments';
        wrapper.append(coments);
        coments.innerHTML = `
        <h3>ID: ${el.id}</h3>
        <h4>NAME: ${el.name}</h4>
        <h5>EMAIL: ${el.email}</h5>
        <h6>Body: ${el.body}</h6>
        `
    }
})