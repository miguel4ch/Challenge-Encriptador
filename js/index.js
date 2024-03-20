// Definir las variables en el ámbito global
let tituloMensaje = document.getElementById("titulo-mensaje");
let parrafo = document.getElementById("parrafo");
let muñeco = document.getElementById("muñeco");

// Función para copiar el texto
function copiarTexto() {
    let mensajeTextarea = document.getElementById("mensaje");
    let botonCopiar = document.getElementById("botonCopiar");
    mensajeTextarea.select();
    document.execCommand("copy");
    mensajeTextarea.style.display = "block";
    botonCopiar.style.display = "none"; 
}

// Función para encriptar el texto
function encrypt() {
    let texto = document.getElementById("texto").value;
    let mensajeTextarea = document.getElementById("mensaje");
    let botonCopiar = document.getElementById("botonCopiar");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    
    if (texto.length != 0) {
        mensajeTextarea.value = textoCifrado;
        tituloMensaje.textContent = "";
        parrafo.textContent = "";
        muñeco.style.display = "none";
        mensajeTextarea.style.display = "block"; 
        botonCopiar.style.display = "inline"; 
        botonCopiar.classList.add("centered-button"); 
    } else {
        alert("Debes ingresar algún texto");
    }
}

function decrypt() {
    let texto = document.getElementById("texto").value;
    let mensajeTextarea = document.getElementById("mensaje");
    let botonCopiar = document.getElementById("botonCopiar");

    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        mensajeTextarea.value = textoCifrado;
        tituloMensaje.textContent = "";
        parrafo.textContent = "";
        muñeco.style.display = "none";
        mensajeTextarea.style.display = "block";
        botonCopiar.style.display = "inline"; 
        botonCopiar.classList.add("centered-button"); 
    } else {
        alert("Debes ingresar algún texto");
    }
}
