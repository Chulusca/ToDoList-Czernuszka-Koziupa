let tareas = [];

function addToDo(){
  const toDoInput = document.getElementById("toDoInput");
  const tarea = toDoInput.value.trim();
  if (tarea != ""){
    const tiempo = new Date().getTime();
    const fecha = new Date(tiempo);
    console.log(fecha.toLocaleString());
    tareas.push({
        tarea: tarea,
        tiempo: tiempo,
        completada: false
      });

    toDoInput.value = "";
    mostrarToDo();
  }
}

function mostrarToDo(){
  const toDoList = document.getElementById("toDoList");
  toDoList.innerHTML = "";
  tareas.forEach(tarea => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tarea.completada;
    checkbox.onclick = function() {
      tarea.completada = !tarea.completada;
      mostrarToDo();
    };

    li.appendChild(checkbox);
    const texto = document.createTextNode(tarea.tarea);

    if(tarea.completada){
      //falta.
    }
    
  });
}