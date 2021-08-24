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
         <input type="checkbox" ${status} data-indice=${indice}>
         <div>${task}</div>
         <input type="button" value="X" data-indice=${indice}>
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

const removeItem = (indice) => {
    bank.splice (indice, 1);
    updateScreen();
}

const updateItem = (indice) => {
    bank[indice].status = bank[indice].status === '' ? 'checked' : '';
    updateScreen();
}

const clickItem = (event) => {
    const element = event.target;
    console.log (element);
    if (element.type === 'button') {
        const indice = element.dataset.indice;
        removeItem (indice);
    }else
    if (element.type === 'checkbox') {
        const indice = element.dataset.indice;
        updateItem (indice);
    }
}

document.getElementById('newItem').addEventListener('keypress', insertItem);
document.getElementById('todoList').addEventListener('click', clickItem);

updateScreen();