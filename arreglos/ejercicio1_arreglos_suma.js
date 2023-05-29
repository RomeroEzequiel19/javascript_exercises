// EJERCICIO 1

//Declaro la variable y le asigno un array con valores 
let numeros = [1, 2, 3, 4, 5, 6, 7];

//Creo la función obtenerSuma que retorna la suma de todos los elementos del array
function obtenerSuma(numero) {
  let suma = 0;

  //Creo una estructura repetitiva for para que itere a traves de todos los elementos del array para sumarlos en el acumulador suma
  for (let i = 0; i < numero.length; i++) {
    let valor = numero[i];
    suma = suma + valor;
  }
  return suma;
}

//A la función obtenerSuma le paso como parámetro el arreglo de numeros y el resultado de la función la muestro por consola
console.log(`El resultado de la suma de los valores del array es de: ${obtenerSuma(numeros)}`);
