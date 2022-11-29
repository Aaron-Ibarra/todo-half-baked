export function renderTodo(todo) {
    // create a div and a p tag
    const todoEl = document.createElement('div');
    const item = document.createElement('p');
    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
    if (todo.complete) {
        todoEl.classList.add('complete');
    } else {
        todoEl.classList.add('incomplete');
    }

    // add the 'todo' css class no matter what
    todoEl.classList.add('todo');
    // put the todo's text into the p tag
    item.textContent = todo.todo;
    // append stuff
    todoEl.append(item);
    // add event listener for click and call handleComplete function

    // return the div
    return todoEl;
}
