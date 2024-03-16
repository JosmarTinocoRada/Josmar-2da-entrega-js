document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("neon-button").addEventListener("click", function() {
        mostrarFormulario();
    });

    // Al cargar la página, limpiamos el contenido del contenedor y lo ocultamos
    limpiarContenedorResultado();
});

function limpiarContenedorResultado() {
    let container = document.getElementById("resultado-container");
    container.style.display = "none"; // Ocultamos el contenedor
}

function mostrarFormulario() {
    let tipoDeWeb = prompt("¿Qué tipo de página web deseas: Web Estatica, Landing Page o Aplicacion Web?");
    if (!tipoDeWeb) return; // Si el usuario cancela, salimos de la función

    let diasEntrega = parseInt(prompt("¿En cuántos días la quieres?"));
    if (isNaN(diasEntrega)) return; // Si el usuario cancela o no completa la entrada, salimos de la función

    let numPaginas = parseInt(prompt("¿Cuántas páginas tendrá el sitio?"));
    if (isNaN(numPaginas)) return; // Si el usuario cancela o no completa la entrada, salimos de la función

    calcularPresupuesto(tipoDeWeb, diasEntrega, numPaginas);
}

function calcularPresupuesto(tipoDeWeb, diasEntrega, numPaginas) {
    alert("Bienvenido al calculador de presupuesto.");

    let costoBase = 0;

    switch (tipoDeWeb.toLowerCase()) {
        case "web estatica":
            costoBase = 100;
            break;
        case "landing page":
            costoBase = 300;
            break;
        case "aplicacion web":
            costoBase = 400;
            break;
        default:
            alert("Tipo de página web no válido. Por favor, elige una opción válida.");
            return; // Si el usuario ingresó un tipo de página web inválido, salimos de la función
    }

    if (numPaginas > 3) {
        costoBase += 200;
    }
    let costoTotal = costoBase;

    let presupuesto = `Tipo de Web: ${tipoDeWeb}, Costo Total: $${costoTotal}, Días de Entrega: ${diasEntrega}, Número de Páginas: ${numPaginas}`;

    // Mostrar los resultados en la consola
    console.log("Presupuesto:");
    console.log(presupuesto);

    // Mostrar los resultados en el HTML
    let listaHTML = document.createElement("li");
    listaHTML.textContent = presupuesto;

    let container = document.getElementById("resultado-lista");
    container.appendChild(listaHTML);

    // Mostrar el contenedor
    let resultadoContainer = document.getElementById("resultado-container");
    resultadoContainer.style.display = "block";
}
