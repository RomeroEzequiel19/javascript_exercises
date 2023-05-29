//EJERCICIO 2

//Declaro la variable y le asigno un array con valores
let numeros = [3, 2, 7, 6, 4, 77, 8];

//Creo la función obtenerPares que retorna un nuevo arreglo con los numeros pares del arreglo original
function obtenerPares(numeros) {
  let pares = [];

  //La estructura for perimite pasar por todos los elementos del array mediante el contador i
  for (let i = 0; i < numeros.length; i++) {
    //Si los valores cumplen con la condicion se agregan en un nuevo arreglo
    if (numeros[i] % 2 == 0) {
      pares.push(numeros[i]);
    }
  }
  return pares;
}

//A la función obtenerPares le paso como parámetro el arreglo de numeros y el resultado de la función la muestro por consola
console.log(
  `Los números pares del arreglo son los siguientes ${obtenerPares(numeros)}`
);
