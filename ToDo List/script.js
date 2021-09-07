//Attribute selector
const todoInput  = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todos");

//Event Listner
document.addEventListener("DOMContentLoaded",getTodos);
todoButton.addEventListener("click",createTodos);
todoList.addEventListener("click",deleteCheck);
filterOption.addEventListener("click",filterCheck);

//Function
function createTodos(event){
    event.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todoDiv");

    //Create LI
    const todos = document.createElement("li");
    todos.innerText = todoInput.value;
    todos.classList.add("todosLi");
    todoDiv.appendChild(todos);

    //Save Input Value
    saveLocalTodos(todoInput.value);

    //Create Complete Button
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fas fa-check">';
    completeButton.classList.add("check-btn");
    todoDiv.appendChild(completeButton);

    //Create Complete Button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash">';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append todoDiv to todoList
    todoList.appendChild(todoDiv);

    //Clear input value after submit
    todoInput.value = "";

}

function deleteCheck(e)
{
    const item = e.target;

    if(item.classList[0] === "trash-btn")
    {
        const todo = item.parentElement;
        removeLocalStorage(todo);
        todo.remove();
    }
    if(item.classList[0] === "check-btn");
    {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterCheck(e)
{
    const todos = todoList.childNodes;
    todos.forEach(function(todoDiv)
    {   
        console.log(e.target.value);
        switch(e.target.value)
        {
            case "all":
                todoDiv.style.display = "flex";
                break;
            case "completed":
                if(todoDiv.classList.contains("completed"))
                {
                    todoDiv.style.display = "flex";
                }
                else{
                    todoDiv.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todoDiv.classList.contains("completed"))
                {
                    todoDiv.style.display = "flex";
                }
                else{
                    todoDiv.style.display = "none";
                }
        }
    });

}

function saveLocalTodos(todo)
{
    let todos;
    if(localStorage.getItem('todos') === null)
    {
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function getTodos()
{
    let todos;
    if(localStorage.getItem('todos') === null)
    {
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo)
    {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todoDiv");

        //Create LI
        const todos = document.createElement("li");
        todos.innerText = todo;
        todos.classList.add("todosLi");
        todoDiv.appendChild(todos);

        //Create Complete Button
        const completeButton = document.createElement("button");
        completeButton.innerHTML = '<i class="fas fa-check">';
        completeButton.classList.add("check-btn");
        todoDiv.appendChild(completeButton);

        //Create Complete Button
        const trashButton = document.createElement("button");
        trashButton.innerHTML = '<i class="fas fa-trash">';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);

        //Append todoDiv to todoList
        todoList.appendChild(todoDiv);
    });
}

function removeLocalStorage(todo)
{
    let todos;
    if(localStorage.getItem('todos') === null)
    {
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    } 
    const deleteTodos = todo.children[0].innerText;
    todos.splice(todos.indexOf(deleteTodos),1);
    localStorage.setItem("todos",JSON.stringify(todos));
}