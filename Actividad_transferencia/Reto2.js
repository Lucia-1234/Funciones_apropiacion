// Variable global para mantener el saldo
let saldo = 0;

// Función para depositar dinero
function depositar(monto) {
  saldo += monto;
  return `Has depositado $${monto}. Saldo actual: $${saldo}`;
}

// Función para retirar dinero
function retirar(monto) {
  if (monto <= saldo) {
    saldo -= monto;
    return `Has retirado $${monto}. Saldo actual: $${saldo}`;
  } else {
    return `Fondos insuficientes. Tu saldo actual es $${saldo}`;
  }
}

// Función para consultar saldo
function consultarSaldo() {
  return `Tu saldo actual es: $${saldo}`;
}

// Ejemplo de uso sin ciclos:
console.log(depositar(1000));     // Deposita 1000
console.log(consultarSaldo());    // Consulta saldo
console.log(retirar(500));        // Retira 500
console.log(consultarSaldo());    // Consulta saldo
console.log(retirar(700));        // Intenta retirar más de lo que hay