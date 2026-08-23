function addTodo() {
    let element = document.getElementById("todoInput");
    const todo = element.value;
    
    const newDiv = document.createElement("div");
    newDiv.innerHTML = todo;

    const parentDiv = document.getElementById("todos");
    parentDiv.appendChild(newDiv);
}
