// Cada ejercicio tiene su propio modulo en su carpeta, este es el menu principal

// Importamos TODAS las funciones desde el index.js central
import {saludoPersonalizado} from '../index.js';

// Importamos la libreria para pedir datos al usuario
import promptSync from 'prompt-sync';
const prompt = promptSync();

// Funcion para ejecutar el ejercicio del saludo
function ejecutarSaludo() {
  /* mostramos un mensaje referenciando el ejercicio que se va a ejecutar */
console.log("Saludo");

  /* se le pide al usuario que ingrese su nombre */ 
let nombre = prompt("Cual es tu nombre? ");

  /* usamos try para que si el usuario ingresa un dato no valido, podamos validar esa parte del codigo */
try {
    /* llamamos a la funcion saludoPersonalizado con el nombre ingresado, y guardamos el resultado en la variable saludo */
    const saludo = saludoPersonalizado(nombre);
    /* mostramos el saludo */
    console.log(saludo);
} catch (error) {
    /* si el usuario ingresa un dato no valido, se muestra un mensaje de error */
    console.error(`Error en saludo: ${error.message}`);
}
}
ejecutarSaludo();