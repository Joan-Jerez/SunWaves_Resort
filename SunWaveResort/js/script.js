function calcular() {
    // Obtener valores
    var fechaEntrada = new Date(document.getElementById("fecha-entrada").value);
    var fechaSalida = new Date(document.getElementById("fecha-salida").value);

    var cantidadPersonas = parseInt(document.getElementById("cantidad-personas").value);
    var cantidadNinos = parseInt(document.getElementById("cantidad-ninos").value);
    var cantidadHabitaciones = parseInt(document.getElementById("cantidad-habitaciones").value);

    // Validaciones básicas
    if (isNaN(cantidadPersonas) || isNaN(cantidadNinos) || isNaN(cantidadHabitaciones)) {
        alert("Completa todos los campos correctamente");
        return;
    }

    if (fechaSalida <= fechaEntrada) {
        alert("La fecha de salida debe ser mayor que la de entrada");
        return;
    }

    if (cantidadNinos > cantidadPersonas) {
        alert("Los niños no pueden ser más que las personas");
        return;
    }

    // Calcular noches
    var cantidadNoches = Math.ceil((fechaSalida - fechaEntrada) / (1000 * 60 * 60 * 24));

    // Calcular adultos reales
    var cantidadAdultos = cantidadPersonas - cantidadNinos;

    // Precios
    var precioAdulto = 1000;
    var precioNino = 500;

    // Precio por noche (personas)
    var precioPorNoche = (cantidadAdultos * precioAdulto) + (cantidadNinos * precioNino);

    // Total por todas las noches y habitaciones
    var subtotal = precioPorNoche * cantidadNoches * cantidadHabitaciones;

    // Descuento (30%)
    var descuento = subtotal * 0.30;
    var totalConDescuento = subtotal - descuento;

    // ITBIS 18%
    var itbis = totalConDescuento * 0.18;

    // Total final
    var totalGeneral = totalConDescuento + itbis;

    // Mostrar resultados
    alert(
        "Noches: " + cantidadNoches +
        "\nAdultos: " + cantidadAdultos +
        "\nNiños: " + cantidadNinos +
        "\nPrecio por noche: RD$" + precioPorNoche +
        "\nSubtotal: RD$" + subtotal +
        "\nDescuento (30%): RD$" + descuento +
        "\nITBIS (18%): RD$" + itbis +
        "\nTOTAL: RD$" + totalGeneral
    );
}