// Función para calcular el promedio de tres notas
function calcularPromedio(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}

// Función para determinar si aprueba o reprueba
function determinarResultado(promedio) {
  if (promedio >= 3.0) {
    return "aprobó";
  } else {
    return "reprobó";
  }
}

// Función principal que muestra el mensaje final
function mostrarResultadoFinal(nombre, nota1, nota2, nota3) {
  let promedio = calcularPromedio(nota1, nota2, nota3);
  let resultado = determinarResultado(promedio);

  return `El estudiante ${nombre} obtuvo un promedio de ${promedio.toFixed(2)} y ${resultado}.`;
}

console.log(mostrarResultadoFinal("Lucia", 4.0, 3.5, 2.8));

console.log(mostrarResultadoFinal("Carlos", 2.5, 2.8, 2.9));