//selectors
const todoInput = document.querySelector(".todo-input");
const todoAdd = document.querySelector(".todo-add");
const todoList = document.querySelector('.todo-list');
const emptyString = "  ";



//event listners//selectors
const todoInput = document.querySelector(".todo-input");
const todoAdd = document.querySelector(".todo-add");
const todoList = document.querySelector('.todo-list');
const emptyString = "  ";



//event listners
todoAdd.addEventListener('click' , todoAddFunction) ;
todoList.addEventListener('click', deleteCheck)

//display saved todos
document.addEventListener('DOMContentLoaded',function(){
    if ( !localStorage.getItem('todoSaved')){
        localStorage.setItem('todoSaved', emptyString);
    }
    todoList.innerHTML = localStorage.getItem('todoSaved') ;
})



//functions
function todoAddFunction(event){
    //restrict empty todo
    if (todoInput.value === ''){
        event.preventDefault();
        return;
     }
    //prevent page reload on form submit , e is event
    event.preventDefault();
    //element creation
    // todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //todo Li
    const todoLi = document.createElement("li");
    todoLi.innerText = todoInput.value;
    todoLi.classList.add("todo-item");

    todoDiv.appendChild(todoLi);

    // todo is complete btn
    const chkBtn = document.createElement('button');
    chkBtn.innerHTML = '<i class="fa fa-check"></i>';
    chkBtn.classList.add('chk-btn');
    todoDiv.appendChild(chkBtn);

    // delete todo btn
    const delBtn = document.createElement('button');
    delBtn.innerHTML = '<i class="fa fa-trash"></i>';
    delBtn.classList.add('del-btn');
    todoDiv.appendChild(delBtn);
    todoList.appendChild(todoDiv);
    todoInput.value='';
    console.log(todoDiv.innerHTML)
    //adding todos to loacal storage
    const todoValue = todoList.innerHTML;
    console.log(localStorage.getItem("todosaved"))
    localStorage.setItem("todoSaved",  todoValue);

    



}
function deleteCheck(e){
    const item = e.target;
    if (item.classList[0] === "del-btn"){
        const todo = item.parentElement;
        //animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove();
            const todoValue = todoList.innerHTML;
            localStorage.setItem("todoSaved",  todoValue);


        })
        
    }
    if (item.classList[0]=== 'chk-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

todoAdd.addEventListener('click' , todoAddFunction) ;
todoList.addEventListener('click', deleteCheck)

//display saved todos
document.addEventListener('DOMContentLoaded',function(){
    if ( !localStorage.getItem('todoSaved')){
        localStorage.setItem('todoSaved', emptyString);
    }
    todoList.innerHTML = localStorage.getItem('todoSaved') ;
})



//functions
function todoAddFunction(event){
    //restrict empty todo
    if (todoInput.value === ''){
        return;
     }
    //prevent page reload on form submit , e is event
    event.preventDefault();
    //element creation
    // todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //todo Li
    const todoLi = document.createElement("li");
    todoLi.innerText = todoInput.value;
    todoLi.classList.add("todo-item");

    todoDiv.appendChild(todoLi);

    // todo is complete btn
    const chkBtn = document.createElement('button');
    chkBtn.innerHTML = '<i class="fa fa-check"></i>';
    chkBtn.classList.add('chk-btn');
    todoDiv.appendChild(chkBtn);

    // delete todo btn
    const delBtn = document.createElement('button');
    delBtn.innerHTML = '<i class="fa fa-trash"></i>';
    delBtn.classList.add('del-btn');
    todoDiv.appendChild(delBtn);
    todoList.appendChild(todoDiv);
    todoInput.value='';
    console.log(todoDiv.innerHTML)
    //adding todos to loacal storage
    const todoValue = todoList.innerHTML;
    console.log(localStorage.getItem("todosaved"))
    localStorage.setItem("todoSaved",  todoValue);

    



}
function deleteCheck(e){
    const item = e.target;
    if (item.classList[0] === "del-btn"){
        const todo = item.parentElement;
        //animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
        
    }
    if (item.classList[0]=== 'chk-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
