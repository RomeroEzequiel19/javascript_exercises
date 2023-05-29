//EJERCICIO 4

//Declaro la variable y le asigno un array con valores
let numeros = [3, 5, 99, 34, 88, 32, 123, 23];

//Creo la función obtenerMaximo que retorna el numero maximo encontrado en el arreglo
function obtenerMaximo(valores) {
  let numMaximo = 0;

  //La estructura for perimite pasar por todos los elementos del array mediante el contador i
  for (let i = 0; i < valores.length; i++) {
    //Si el valor del arreglo es mayor al numero máximo, entonces ese valor pasará a ser al numero maximo
    if (valores[i] > numMaximo) {
      numMaximo = valores[i];
    }
  }
  return numMaximo;
}

//A la función obtenerMaximo le paso como parámetro el arreglo de numeros y el resultado de la función la muestro por consola
console.log(`El número máximo encontrado del arreglo es ${obtenerMaximo(numeros)}`);
