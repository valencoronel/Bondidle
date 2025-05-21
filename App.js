let respuesta = "";

// Función que guarda la respuesta escrita por el usuario
function guardarRespuesta() {
    // Obtenemos el valor ingresado en el campo de texto
    respuesta = document.getElementById("respuestaInput").value;
    
    // Verificamos si la respuesta no está vacía
    if (respuesta.trim() === "") {
        alert("Por favor, ingresa una respuesta.");
    } else {
        // Mostramos la respuesta en un mensaje de alerta
        alert("Tu respuesta es: " + respuesta);
    }
    
    // Limpiamos el campo de texto después de guardar la respuesta
    document.getElementById("respuestaInput").value = "";
}
