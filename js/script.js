document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("neon-button").addEventListener("click", function() {
        calcularPresupuesto(); // Llamar a la función calcular presupuesto al presionar el boton
    });

   
    limpiarContenedorResultado();
});

function limpiarContenedorResultado() {
    let container = document.getElementById("resultado-container");
    container.innerHTML = ""; 
    container.style.display = "none"; 
}

function calcularPresupuesto() {
    
    let tipoDeWeb, diasEntrega, numPaginas;
    while (true) {
        tipoDeWeb = prompt("¿Qué tipo de página web deseas: Web Estatica, Landing Page o Aplicacion Web?");
        if (!tipoDeWeb) return; 

        switch (tipoDeWeb.toLowerCase()) {
            case "web estatica":
            case "landing page":
            case "aplicacion web":
                break; 
            default:
                alert("Tipo de página web no válido. Por favor, elige una opción válida.");
                continue; // Si el tipo de página no es válido, solicitamos al usuario que ingrese nuevamente
        }

        diasEntrega = parseInt(prompt("¿En cuántos días la quieres?"));
        if (isNaN(diasEntrega)) return; // Si el usuario cancela o no completa la entrada, salimos de la función

        numPaginas = parseInt(prompt("¿Cuántas páginas tendrá el sitio?"));
        if (isNaN(numPaginas)) return; 
        break; 
    }

    alert("Bienvenido al calculador de presupuesto.");

    let presupuestos = []; // Array para almacenar los datos ingresados por el usuario

    // Calculamos el costo base fuera del switch
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
    }

    if (numPaginas > 3) {
        costoBase += 200;
    }
    let costoTotal = costoBase;

    let nuevoPresupuesto = {
        tipoDeWeb: tipoDeWeb,
        costoTotal: costoTotal,
        diasEntrega: diasEntrega,
        numPaginas: numPaginas
    };

    presupuestos.push(nuevoPresupuesto);

    console.log("Resultados de los presupuestos:");

    presupuestos.forEach(function(presupuesto, index) {
        console.log(`Presupuesto ${index + 1}:`);
        console.log(`- Tipo de Web: ${presupuesto.tipoDeWeb}`);
        console.log(`- Costo Total: $${presupuesto.costoTotal}`);
        console.log(`- Días de Entrega: ${presupuesto.diasEntrega}`);
        console.log(`- Número de Páginas: ${presupuesto.numPaginas}`);
    });

    // Mostrar los resultados en una lista ordenada en el HTML
    let listaHTML = document.createElement("ol"); 
    listaHTML.classList.add("resultado-lista");

    presupuestos.forEach(function(presupuesto, index) {
        let listItem = document.createElement("li");
        listItem.textContent = `Presupuesto ${index + 1}: Tipo de Web: ${presupuesto.tipoDeWeb}, Costo Total: $${presupuesto.costoTotal}, Días de Entrega: ${presupuesto.diasEntrega}, Número de Páginas: ${presupuesto.numPaginas}`;
        listaHTML.appendChild(listItem);
    });

    let container = document.getElementById("resultado-container");
    container.innerHTML = ""; 

    // Agregamos el título de este es tu presupuesto
    let titulo = document.createElement("h2");
    titulo.textContent = "Este es tu presupuesto";
    container.appendChild(titulo);

    container.appendChild(listaHTML);

    container.style.display = "block";
}
