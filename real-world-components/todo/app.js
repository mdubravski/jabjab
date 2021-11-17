const todo_input = document.querySelector('.todo__input');
const todo_list = document.querySelector('.todo__list');
let todo_items = document.querySelectorAll('.todo__item');

// input functionality

function addListItem(){
    todo_input.addEventListener('keypress', function(event){
        if(event.keyCode === 13){
            let newListItem = createListItem(todo_input.value);
            todo_list.appendChild(newListItem);
            todo_input.value = '';
        }
    });
}

function createListItem(text){
    const newListElement = document.createElement('li');
    newListElement.textContent = text;
    newListElement.setAttribute('class', 'todo__item');
    return newListElement;
}

function toggleDone(){
    console.log(todo_items);
    for(let el of todo_items){
        el.addEventListener('click', () =>{
            el.classList.toggle('todo__done');
        });
    }
}

toggleDone();
addListItem();
