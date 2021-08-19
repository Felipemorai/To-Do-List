'use strict';

/*  <label class="todo_item">
    <input type="checkbox">
    <div>item 1 test</div>
    <input type="button" value="X">
</label>
 */

const createItem = () => {
    const item = document.createElement('label')
    item.classList.add('todo_item');
    item.innerHTML = `
         <input type="checkbox">
         <div>item 1 test</div>
         <input type="button" value="X">
    `
    document.getElementById('todoList').appendChild(item);
}