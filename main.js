'use strict';

const createItem = (text, status='') => {
    const item = document.createElement('label')
    item.classList.add('todo_item');
    item.innerHTML = `
         <input type="checkbox" ${status}>
         <div>${text}</div>
         <input type="button" value="X">
    `
    document.getElementById('todoList').appendChild(item);
}