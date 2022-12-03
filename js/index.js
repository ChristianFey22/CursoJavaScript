// Cotizador de Préstamos (Calculo Simple)

// Ingreso de Datos
let paquete;
let monto;
let cuotas;

do {
    paquete = prompt("Ingrese su Tipo de Paquete Nación que posee: (Simple / Estilo / Insignia)").toLowerCase();
} while ((paquete != "simple") && (paquete != "estilo") && (paquete != "insignia"));

do {
    monto = parseFloat(prompt("Ingrese el Monto: (Máximo $5.000.000)"));
} while ((monto < 100000) || (monto > 5000000));

do {
    cuotas = parseInt(prompt("Ingese la Cantidad de Cuotas: (Máximo 36 meses)"));
} while ((cuotas < 1) || (cuotas > 36));


// Proceso
let interes_paquete;
let costo_cuenta;
let salida = "";
const iva = 21;

switch(paquete) {
    case "simple":
        interes_paquete = 45;
        costo_cuenta = 1600;
        break;
    case "estilo":
        interes_paquete = 43;
        costo_cuenta = 1700;
        break;
    case "insignia":
        interes_paquete = 41;
        costo_cuenta = 1800;
        break;
}

let monto_iva = monto + ((monto * iva) / 100);
console.log("Monto c/IVA: $" + monto_iva);

let monto_interes = monto_iva + ((monto_iva * interes_paquete) / 100);
let monto_interes_salida = monto;
console.log("Monto c/Interes: $" + monto_interes);

let valor_cuotas = (monto_interes / cuotas);
console.log("Cuota: $" + valor_cuotas);

// Salida de Datos
alert("PLAN CONTRATADO: \n\nPaquete: " + paquete + "\n" + "Monto: $" + monto.toFixed(2) + "\n" + "Cuotas: " + cuotas);
alert("Total a Pagar: $" + monto_interes.toFixed(2) + "\n" + "Cuotas: " + cuotas + " de $" + valor_cuotas.toFixed(2));