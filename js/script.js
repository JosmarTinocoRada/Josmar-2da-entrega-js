// Declarar un array para almacenar los presupuestos
let presupuestos = [];

function limpiarContenedorResultado() {
    let container = document.getElementById("resultado-container");
    container.style.display = "none"; // Ocultamos el contenedor
}

function mostrarPresupuestos() {
    // Obtener el contenedor de resultados
    let container = document.getElementById("resultado-lista");
    // Limpiar el contenido anterior
    container.innerHTML = "";

    // Iterar sobre los presupuestos y crear elementos HTML para cada uno
    presupuestos.forEach(function(presupuesto) {
        let listItem = document.createElement("li");
        listItem.textContent = `Tipo de Web: ${presupuesto.tipoDeWeb}, Costo Total: $${presupuesto.costoTotal}, Días de Entrega: ${presupuesto.diasEntrega}, Número de Páginas: ${presupuesto.numPaginas}`;
        container.appendChild(listItem);

        // Mostrar los datos del presupuesto en la consola
        console.log("Presupuesto:");
        console.log(presupuesto);
    });

    // Mostrar el contenedor de resultados
    let resultadoContainer = document.getElementById("resultado-container");
    resultadoContainer.style.display = "block";
}

function calcularPresupuesto() {
    alert("Bienvenido al calculador de presupuesto.");

    while (true) {
        let tipoDeWeb = prompt("¿Qué tipo de página web deseas: Web Estática, Landing Page o Aplicación Web?");
        let costoBase = 0;

        switch (tipoDeWeb.toLowerCase()) {
            case "web estática":
                costoBase = 100;
                break;
            case "landing page":
                costoBase = 300;
                break;
            case "aplicación web":
                costoBase = 400;
                break;
            default:
                alert("Tipo de página web no válido. Por favor, elige una opción válida.");
                continue;
        }

        let diasEntrega = parseInt(prompt("¿En cuántos días la quieres?"));
        let numPaginas = parseInt(prompt("¿Cuántas páginas tendrá el sitio?"));

        if (numPaginas > 3) {
            costoBase += 200;
        }
        let costoTotal = costoBase;

        // Almacenar los datos del presupuesto en el array
        let presupuesto = {
            tipoDeWeb: tipoDeWeb,
            costoTotal: costoTotal,
            diasEntrega: diasEntrega,
            numPaginas: numPaginas
        };
        presupuestos.push(presupuesto);

        alert("El costo total de tu proyecto es: $" + costoTotal);

        let continuar = prompt("¿Deseas calcular otro presupuesto? (s/n)");
        if (continuar.toLowerCase() !== "s") {
            break;
        }
    }   

    // Llamar a la función para mostrar los presupuestos
    mostrarPresupuestos();
}

// Asignar la función calcularPresupuesto al evento clic del botón
document.getElementById("neon-button").addEventListener("click", calcularPresupuesto);
