//selectors
const todoInput = document.querySelector(".todo-input");
const todoAdd = document.querySelector(".todo-add");
const todoList = document.querySelector('.todo-list');




//event listners
todoAdd.addEventListener('click' , todoAddFunction) ;
todoList.addEventListener('click', deleteCheck)





//functions
function todoAddFunction(event){
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