function calcularPromedio(nota1, nota2, nota3) {
  // Calculamos el promedio
  let promedio = (nota1 + nota2 + nota3) / 3;

  // Condicional para verificar si aprobó o reprobó
  if (promedio >= 3.0) {
    return `El promedio es ${promedio.toFixed(2)}. ¡El estudiante aprobó!`;
  } else {
    return `El promedio es ${promedio.toFixed(2)}. El estudiante reprobó.`;
  }
}

console.log(calcularPromedio(4.0, 3.5, 2.8));

console.log(calcularPromedio(2.5, 2.8, 2.9));