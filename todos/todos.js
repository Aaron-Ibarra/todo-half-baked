import {
    checkAuth,
    createTodo,
    completeTodo,
    getTodos,
    logout,
    deleteAllTodos,
} from '../fetch-utils.js';
import { renderTodo } from '../render-utils.js';

checkAuth();

const todosEl = document.querySelector('.todos');
const todoForm = document.querySelector('.todo-form');
const logoutButton = document.querySelector('#logout');
const deleteButton = document.querySelector('.delete-button');

todoForm.addEventListener('submit', async (e) => {
    // on submit, create a todo, reset the form, and display the todos
    e.preventDefault();

    const data = new FormData(todoForm);
    const item = data.get('todo');
    await createTodo(item);
    todoForm.reset();
    displayTodos();
});

// create todo state
// let todos = [];
// add async complete todo handler function
// async function handleComplete() {}
// call completeTodo
// swap out todo in array
// call displayTodos

async function displayTodos() {
    // clear the container (.innerHTML = '')
    todosEl.innerHTML = '';
    // display the list of todos,
    // call render function, pass in state and complete handler function!
    // append to .todos
    const todoList = await getTodos();
    if (todoList) {
        for (let todo of todoList) {
            const todoEl = renderTodo(todo);
            todoEl.addEventListener('click', async () => {
                // todoEl.classList.add('complete');
                await completeTodo(todo.id);
                await displayTodos();
            });
            todosEl.append(todoEl);
        }
    }
}

// add page load function
window.addEventListener('load', async () => {
    // fetch the todos and store in state
    // call displayTodos

    displayTodos();
});

logoutButton.addEventListener('click', () => {
    logout();
});

deleteButton.addEventListener('click', async () => {
    // delete all todos
    await deleteAllTodos();
    // modify state to match
    // re displayTodos
    displayTodos();
});
