// Función para determinar si es par o impar
function esPar(numero) {
  return numero % 2 === 0 ? "par" : "impar";
}

// Función para determinar si es positivo o negativo
function esPositivo(numero) {
  if (numero > 0) {
    return "positivo";
  } else if (numero < 0) {
    return "negativo";
  } else {
    return "cero";
  }
}

// Función para determinar si es primo
function esPrimo(numero) {
  if (numero <= 1) return "no primo";

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return "no primo";
    }
  }
  return "primo";
}

// Función principal que integra los resultados
function analizarNumero(numero) {
  let paridad = esPar(numero);
  let signo = esPositivo(numero);
  let primo = esPrimo(numero);

  return `El número ${numero} es ${paridad}, ${signo} y ${primo}.`;
}

console.log(analizarNumero(7));   // El número 7 es impar, positivo y primo.
console.log(analizarNumero(-10)); // El número -10 es par, negativo y no primo.
console.log(analizarNumero(0));   // El número 0 es par, cero y no primo.