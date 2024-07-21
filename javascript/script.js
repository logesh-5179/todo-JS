document.getElementById("todo-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const task=document.getElementById("task-input").value;
    if(task==""){
        alert("Please enter a task");
        return false;
    }
    else{
        const li=document.createElement("li");
        li.textContent=task
        const removeButton=document.createElement("button");
        removeButton.textContent="Remove";
        removeButton.className="remove";
        removeButton.onclick = function() {
            li.remove();
        };
        li.appendChild(removeButton)
        document.getElementById("todo-list").appendChild(li);
        document.getElementById("task-input").value="";

    }
    
});
