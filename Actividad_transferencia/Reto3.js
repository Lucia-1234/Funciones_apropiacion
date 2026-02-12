// Función para calcular el subtotal de un producto
function calcularSubtotal(precio, cantidad) {
  return precio * cantidad;
}

// Función para calcular el total sin IVA
function calcularTotalSinIVA(productos) {
  let total = 0;
  for (let producto of productos) {
    total += calcularSubtotal(producto.precio, producto.cantidad);
  }
  return total;
}

// Función para calcular el IVA total (19%)
function calcularIVA(totalSinIVA) {
  return totalSinIVA * 0.19;
}

// Función final como función flecha
const calcularFactura = (productos) => {
  let totalSinIVA = calcularTotalSinIVA(productos);
  let iva = calcularIVA(totalSinIVA);
  let totalConIVA = totalSinIVA + iva;

  return {
    totalSinIVA: totalSinIVA,
    iva: iva,
    totalConIVA: totalConIVA
  };
};

const resumirFactura = (factura) => {
  Object.keys(factura).forEach(elemento => {
    const valor = factura[elemento];
    console.log(`${elemento}: ${valor}`);
  });
}

// Ejemplo de uso:
let listaProductos = [
  { nombre: "Arroz", precio: 2500, cantidad: 2 },
  { nombre: "Leche", precio: 4000, cantidad: 3 },
  { nombre: "Huevos", precio: 500, cantidad: 12 }
];

let factura = calcularFactura(listaProductos);


resumirFactura(factura)

// console.log("Detalle de productos:", factura.detalle);
// console.log("Total sin IVA:", factura.totalSinIVA);
// console.log("IVA (19%):", factura.iva);
// console.log("Total a pagar:", factura.totalConIVA);