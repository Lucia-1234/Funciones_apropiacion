// Función tradicional: suma
function sumar(a, b) {
  return a + b;
}

// Función tradicional: resta
function restar(a, b) {
  return a - b;
}

// Función flecha: multiplicación
const multiplicar = (a, b) => a * b;

// Función flecha: división
const dividir = (a, b) => {
  if (b === 0) {
    return "Error: no se puede dividir entre cero";
  }
  return a / b;
};

// Función principal: mostrar resultados
function calcularOperaciones(a, b) {
  let resultadoSuma = sumar(a, b);
  let resultadoResta = restar(a, b);
  let resultadoMultiplicacion = multiplicar(a, b);
  let resultadoDivision = dividir(a, b);

  return `
Resultados de la calculadora:
- Suma: ${resultadoSuma}
- Resta: ${resultadoResta}
- Multiplicación: ${resultadoMultiplicacion}
- División: ${resultadoDivision}
`;
}

console.log(calcularOperaciones(10, 5));