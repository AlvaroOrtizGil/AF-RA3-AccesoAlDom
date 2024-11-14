// Función para actualizar el saludo con el nombre ingresado
function actualizarSaludo() {
    const nombre = document.getElementById("inputNombre").value;
    const nombreUsuario = document.getElementById("nombreUsuario");
    nombreUsuario.textContent = nombre || "invitado"; // Si no hay nombre, muestra "invitado"
}

// Añadir evento al botón para actualizar el nombre
document.getElementById("btnActualizarNombre").addEventListener("click", actualizarSaludo);

// Cambiar el color del nombre según la selección del usuario
document.getElementById("colorUsuario").addEventListener("change", function() {
    const colorSeleccionado = this.value;
    const nombreUsuario = document.getElementById("nombreUsuario");
    nombreUsuario.style.color = colorSeleccionado;
});

// Función para agregar una nueva tarea a la lista
function agregarTarea() {
    const inputTarea = document.getElementById("inputTarea");
    const listaTareas = document.getElementById("listaTareas");

    if (inputTarea.value.trim() !== "") {
        const nuevaTarea = document.createElement("li");
        nuevaTarea.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        nuevaTarea.textContent = inputTarea.value;

        // Crear el botón de eliminar
        const btnEliminar = document.createElement("button");
        btnEliminar.classList.add("btn", "btn-danger", "btn-sm", "btnEliminar");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.addEventListener("click", function() {
            listaTareas.removeChild(nuevaTarea);
        });

        // Añadir el botón de eliminar a la tarea
        nuevaTarea.appendChild(btnEliminar);

        // Añadir la nueva tarea a la lista
        listaTareas.appendChild(nuevaTarea);

        // Limpiar el campo de entrada
        inputTarea.value = "";
    }
}

// Añadir evento al botón para agregar tarea
document.getElementById("btnAgregarTarea").addEventListener("click", agregarTarea);

// Función para mostrar u ocultar la lista de tareas
document.getElementById("btnOcultarTareas").addEventListener("click", function() {
    const listaTareas = document.getElementById("listaTareas");
    if (listaTareas.style.display === "none") {
        listaTareas.style.display = "block";
        this.textContent = "Ocultar Tareas";
    } else {
        listaTareas.style.display = "none";
        this.textContent = "Mostrar Tareas";
    }
});

// Función para alternar entre tema claro y oscuro
document.getElementById("btnAlternarTema").addEventListener("click", function() {
    const body = document.body;
    body.classList.toggle("tema-oscuro");

    // Cambiar el texto del botón según el tema actual
    this.textContent = body.classList.contains("tema-oscuro") 
        ? "Cambiar a Tema Claro" 
        : "Cambiar a Tema Oscuro";
});

// Función para ocultar la caja al hacer doble clic
function ocultarCaja(element) {
    element.style.display = 'none';
}

// Añadir evento para eliminar las tareas existentes al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    const btnEliminar = document.querySelectorAll(".btnEliminar");
    btnEliminar.forEach(button => {
        button.addEventListener("click", function() {
            const tarea = button.closest('li');
            tarea.remove();
        });
    });
});

// Obtener todas las imágenes en la galería
const imagenesGaleria = document.querySelectorAll(".Galeria img");

// Añadir evento click a cada imagen
imagenesGaleria.forEach(imagen => {
    imagen.addEventListener("click", function() {
        // Alternar el tamaño entre 100px y 300px
        if (this.style.width === "300px") {
            this.style.width = "100px";
        } else {
            this.style.width = "300px";
        }
    });
});
