document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("neon-button").addEventListener("click", function() {
        calcularPresupuesto(); // Llamamos a la función calcularPresupuesto() al hacer clic en el botón de neon
    });

    // Al cargar la página, limpiamos el contenido del contenedor y lo ocultamos
    limpiarContenedorResultado();
});

function limpiarContenedorResultado() {
    let container = document.getElementById("resultado-container");
    container.innerHTML = ""; // Limpiamos el contenido del contenedor
    container.style.display = "none"; // Ocultamos el contenedor
}

function calcularPresupuesto() {
    // Solicitar al usuario que complete todos los datos
    let tipoDeWeb = prompt("¿Qué tipo de página web deseas: Web Estatica, Landing Page o Aplicacion Web?");
    if (!tipoDeWeb) return; // Si el usuario cancela o no completa la entrada, salimos de la función
    
    let diasEntrega = parseInt(prompt("¿En cuántos días la quieres?"));
    if (isNaN(diasEntrega)) return; // Si el usuario cancela o no completa la entrada, salimos de la función
    
    let numPaginas = parseInt(prompt("¿Cuántas páginas tendrá el sitio?"));
    if (isNaN(numPaginas)) return; // Si el usuario cancela o no completa la entrada, salimos de la función

    alert("Bienvenido al calculador de presupuesto.");

    let presupuestos = []; // Array para almacenar los datos ingresados por el usuario

    // Continuamos con el cálculo del presupuesto
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

    // Agregar los datos a un objeto y luego al array de presupuestos
    let nuevoPresupuesto = {
        tipoDeWeb: tipoDeWeb,
        costoTotal: costoTotal,
        diasEntrega: diasEntrega,
        numPaginas: numPaginas
    };

    presupuestos.push(nuevoPresupuesto);

    // Mostrar los resultados en la consola
    console.log("Resultados de los presupuestos:");

    presupuestos.forEach(function(presupuesto, index) {
        console.log(`Presupuesto ${index + 1}:`);
        console.log(`- Tipo de Web: ${presupuesto.tipoDeWeb}`);
        console.log(`- Costo Total: $${presupuesto.costoTotal}`);
        console.log(`- Días de Entrega: ${presupuesto.diasEntrega}`);
        console.log(`- Número de Páginas: ${presupuesto.numPaginas}`);
    });

    // Mostrar los resultados en una lista ordenada en el HTML
    let listaHTML = document.createElement("ol"); // Creamos una lista ordenada
    listaHTML.classList.add("resultado-lista");

    presupuestos.forEach(function(presupuesto, index) {
        let listItem = document.createElement("li");
        listItem.textContent = `Presupuesto ${index + 1}: Tipo de Web: ${presupuesto.tipoDeWeb}, Costo Total: $${presupuesto.costoTotal}, Días de Entrega: ${presupuesto.diasEntrega}, Número de Páginas: ${presupuesto.numPaginas}`;
        listaHTML.appendChild(listItem);
    });

    let container = document.getElementById("resultado-container");
    container.innerHTML = ""; // Limpio el contenido previo

    let titulo = document.createElement("h2");
    titulo.textContent = "Este es tu presupuesto";
    container.appendChild(titulo);

    container.appendChild(listaHTML);

    container.style.display = "block";
}
