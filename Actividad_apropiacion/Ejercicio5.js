// Función para validar que el número sea mayor que 1
function validarNumero(numero) {
  return numero > 1;
}

// Función para contar divisores del número
function contarDivisores(numero) {
  let divisores = 0;
  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
      divisores++;
    }
  }
  return divisores;
}

// Función principal que determina si es primo
function esPrimo(numero) {
  if (!validarNumero(numero)) {
    return `El número ${numero} no es válido para verificar si es primo.`;
  }

  let divisores = contarDivisores(numero);

  if (divisores === 2) {
    return `El número ${numero} es primo.`;
  } else {
    return `El número ${numero} no es primo.`;
  }
}

console.log(esPrimo(7));   // El número 7 es primo.
console.log(esPrimo(10));  // El número 10 no es primo.
console.log(esPrimo(1));   // El número 1 no es válido para verificar si es primo.