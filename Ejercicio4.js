// Función para calcular el subtotal (cantidad × precio)
function calcularSubtotal(cantidad, precio) {
  return cantidad * precio;
}

// Función para calcular el IVA (19% del subtotal)
function calcularIVA(subtotal) {
  return subtotal * 0.19;
}

// Función para calcular el total a pagar (subtotal + IVA)
function calcularTotal(cantidad, precio) {
  let subtotal = calcularSubtotal(cantidad, precio);
  let iva = calcularIVA(subtotal);
  return subtotal + iva;
}

let cantidad = 3;
let precioUnitario = 5000;

console.log("Subtotal: $" + calcularSubtotal(cantidad, precioUnitario));
console.log("IVA (19%): $" + calcularIVA(calcularSubtotal(cantidad, precioUnitario)));
console.log("Total a pagar: $" + calcularTotal(cantidad, precioUnitario));