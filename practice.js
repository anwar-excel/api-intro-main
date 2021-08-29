console.log("hello api")

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json.title))
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUsers(data))
}

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPosts(data))
}

function displayUsers(data) {
    const ul = document.getElementById('users');
    for (const user of data) {
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = `name: ${user.name}`;
        ul.appendChild(li);
    }
}

function displayPosts(data) {
    const ul = document.getElementById('posts');
    for (const user of data) {
        // console.log(user.name);
        const li = document.createElement('li');
        li.innerText = `name: ${user.title}`;
        ul.appendChild(li);
    }
}