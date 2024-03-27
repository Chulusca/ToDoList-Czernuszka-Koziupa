let tareas= [];

function agregar() {
  const input = document.getElementById("input");
  const tarea = input.value;
  if (tarea !== "") {
    const timestamp = new Date().getTime();
    tareas.push({ task: tarea, timestamp: timestamp, completed: false });
    input.value = "";
    displayToDo();
  }
}

function displayToDo() {
  const toDoList = document.getElementById("toDoList");
  toDoList.innerHTML = "";
  tareas.forEach(todo => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.onclick = function() {
      todo.completed = !todo.completed;
      displayTodos();
    };
    li.appendChild(checkbox);
    const text = document.createTextNode(todo.task);
    if (todo.completed) {
      const span = document.createElement("span");
      span.className = "completed";
      span.appendChild(text);
      li.appendChild(span);
    } else {
      li.appendChild(text);
    }
    todoList.appendChild(li);
  });
}

function findFastestTask() {
  let fastestTask = null;
  let fastestTime = Infinity;
  tareas.forEach(tarea => {
    if (tarea.completed && tarea.timestamp < fastestTime) {
      fastestTime = tarea.timestamp;
      fastestTask = tarea.task;
    }
  });
  if (fastestTask) {
    alert("La tarea más rápida fue: " + fastestTask);
  } else {
    alert("No hay tareas completadas aún.");
  }
}