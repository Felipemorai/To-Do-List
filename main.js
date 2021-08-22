'use strict';

let bank = [
    {'task': 'Study JS', 'status': ''},
    {'task': 'go to the gym', 'status': 'checked'},
    {'task': 'make the lunch', 'status': ''},
];

const createItem = (task, status, indice) => {
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
    bank.forEach ( (item, indice) => createItem (item.task, item.status, indice));
}

const insertItem = (event) => {
    const key = event.key;
    const text = event.target.value; 
    if (key === 'Enter'){
        bank.push ({'task': text, 'status': ''})
        updateScreen();
        event.target.value = '';
    }
}

const clickItem = (event) => {
    const element = event.target;
    console.log (element);
}

document.getElementById('newItem').addEventListener('keypress', insertItem);
document.getElementById('todoList').addEventListener('click', clickItem);

updateScreen();