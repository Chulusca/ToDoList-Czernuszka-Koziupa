let tareas = [];
let tareasTemporal = [];


function addToDo(){
  const toDoInput = document.getElementById("toDoInput");
  const tarea = toDoInput.value.trim();
  if (tarea != ""){
    tareas = [];
    const tiempo = new Date().getTime();
    tareasTemporal.push({
        tarea: tarea,
        tiempoCreacion: tiempo,
        completada: false,
        tiempoFinalizacion: null
      });
    tareas = tareasTemporal;
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
      if(tarea.completada){
        const tiempo = new Date().getTime();
        tarea.tiempoFinalizacion = tiempo;
        console.log(tarea.tiempoFinalizacion)
      }
      mostrarToDo();
    };

    li.appendChild(checkbox);
    const texto = document.createTextNode(tarea.tarea);

    if(tarea.completada){
      const span = document.createElement("span");
      span.className = "completed";
      span.appendChild(texto);
      li.appendChild(span);
    }
    else{
      li.appendChild(texto);
    }
    toDoList.appendChild(li);
  });
}

function tareaMasRapida(){
  let tareaMasRapida = null;
  let tiempoMasRapido = Infinity;
  tareas.forEach(tarea =>{
    if(tarea.completada && tiempoMasRapido > (tarea.tiempoFinalizacion - tarea.tiempoCreacion)){
      tareaMasRapida = tarea;
      tiempoMasRapido = (tarea.tiempoFinalizacion - tarea.tiempoCreacion)
    }
  });

  if(tareaMasRapida != null){
    alert("La tarea mas rapida fue " + tareaMasRapida.tarea);
  }
  else{
    alert("No hay tareas completas aun");
  }
}

function borrarTareas(){
  tareas = [];
  tareasTemporal = [];
  mostrarToDo();
}