// Array para almacenar los nombres
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    const input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // Validar que no esté vacío
    if (nombre === "") {
        mostrarMensaje("⚠️ Por favor, inserte un nombre.", "error"); // PLUS
        return;
    }

    // Validar que no contenga números
    if (/\d/.test(nombre)) {
        mostrarMensaje("❌ No se permiten números en el nombre.", "error"); // PLUS
        return;
    }

    // Agregar al array
    amigos.push(nombre);

    // Actualizar lista
    actualizarLista();

    // Limpiar campo
    input.value = "";

    // Mostrar mensaje animado de confirmación
    mostrarMensaje(`✅ ${nombre} agregado con éxito`, "success"); // PLUS
}

// Función para actualizar la lista en HTML
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];

        // Botón de eliminar (PLUS)
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌ Eliminar";
        btnEliminar.style.marginLeft = "10px";
        btnEliminar.onclick = function () {
            eliminarAmigo(i);
        };

        li.appendChild(btnEliminar);
        lista.appendChild(li);
    }
}

// Función para eliminar un amigo (PLUS)
function eliminarAmigo(index) {
    let eliminado = amigos[index];
    amigos.splice(index, 1);
    actualizarLista();
    mostrarMensaje(`🗑️ ${eliminado} eliminado`, "error"); // PLUS
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        mostrarMensaje("⚠️ No hay amigos para sortear.", "error"); // PLUS
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let ganador = amigos[indiceAleatorio];

    // Mostrar en la lista de resultados
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El ganador es: <strong>${ganador}</strong> 🎉</li>`;

    // Ventana flotante animada del ganador (PLUS)
    mostrarFlotante(`🎉 Ganador: ${ganador} 🎉`);
}

/* ======================
   FUNCIONALIDADES PLUS
   ====================== */

// Mostrar mensajes animados (error, success, info)
function mostrarMensaje(texto, tipo) {
    let mensaje = document.createElement("div");
    mensaje.classList.add("mensaje-flotante", tipo);
    mensaje.textContent = texto;
    document.body.appendChild(mensaje);

    // Animación: aparece y desaparece
    setTimeout(() => {
        mensaje.classList.add("visible");
    }, 100);

    setTimeout(() => {
        mensaje.classList.remove("visible");
        setTimeout(() => mensaje.remove(), 500);
    }, 3000);
}

// Ventana flotante para el ganador
function mostrarFlotante(texto) {
    let modal = document.createElement("div");
    modal.classList.add("modal-flotante");
    modal.innerHTML = `<p>${texto}</p>`;
    document.body.appendChild(modal);

    // Animación
    setTimeout(() => modal.classList.add("visible"), 100);

    setTimeout(() => {
        modal.classList.remove("visible");
        setTimeout(() => modal.remove(), 500);
    }, 4000);
}
