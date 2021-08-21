'use strict';

let bank = [
    {'task': 'Study JS', 'status': ''},
    {'task': 'going to gym', 'status': 'checked'}
];

const createItem = (text, status='') => {
    const item = document.createElement('label')
    item.classList.add('todo_item');
    item.innerHTML = `
         <input type="checkbox" ${status}>
         <div>${text}</div>
         <input type="button" value="X">
    `;
    document.getElementById('todoList').appendChild(item);
}

const updateScreen = () => {
    createItem ('test1');
}

updateScreen();