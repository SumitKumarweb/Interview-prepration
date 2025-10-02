document.addEventListener('DOMContentLoaded',()=>{
    const  todoForm = document.querySelector('.todoForm')
    const  todoInput = document.querySelector('.todo-input')
    const  todoSubmit = document.querySelector('.todo-submit')
    const  todoList = document.querySelector('.todo-list')
    let editMode = false;
    let editItem = null;

    const addTodoItem = (todoText)=>{
        const todoItem = document.createElement('li')
        const todoEdit = document.createElement('button')
        const todoDelete= document.createElement('button')

        todoItem.innerHTML = `<span>${todoText}</span>`;
        todoEdit.innerHTML = `✏️`
        todoDelete.innerHTML = `❌`

        todoItem.appendChild(todoEdit)
        todoItem.appendChild(todoDelete)
        todoList.appendChild(todoItem)
    }

    todoList.addEventListener('click',(e)=>{
        const target = e.target;
        if(target.tagName == 'BUTTON'){
            const todoItem = target.parentNode;
            if(target.innerText === `❌`){
                todoItem.remove()
            }else if(target.innerText === '✏️'){
                editMode = true;
                editItem = todoItem;
                todoSubmit.innerText = 'edit Todo';
                todoInput.value = todoItem.firstChild.textContent;
                todoInput.focus();
            }
        }
    })


    todoForm.addEventListener('submit',(e)=>{
        e.preventDefault()
        const todoText = todoInput.value.trim();
        if(todoText !== ''){
            if(editMode){
                editItem.firstChild.textContent = todoText;
                todoSubmit.innerText = 'Add Todo';
                editMode = false;
                editItem = null
            }else{
                addTodoItem(todoText)
            }
            todoInput.value = ''
        }else{
            alert('enter a valid todos')
        }
    })
})