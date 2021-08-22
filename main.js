'use strict';

let bank = [
    {'task': 'Study JS', 'status': ''},
    {'task': 'go to the gym', 'status': 'checked'},
    {'task': 'make the lunch', 'status': ''},
];

const createItem = (task, status) => {
    const item = document.createElement('label')
    item.classList.add('todo_item');
    item.innerHTML = `
         <input type="checkbox" ${status}>
         <div>${task}</div>
         <input type="button" value="X">
    `;
    document.getElementById('todoList').appendChild(item);
}

const cleanTask = () => {
    const todoList = document.getElementById('todoList');
    while (todoList.firstChild) {
        todoList.removeChild(todoList.lastChild);
    }
}

const updateScreen = () => {
    cleanTask ()
    bank.forEach (item => createItem (item.task, item.status));
}

updateScreen();