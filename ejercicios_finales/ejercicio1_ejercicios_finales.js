//EJERCICIO 1

//Solicito al usuario que ingrese un numero y lo almaceno en la varible numero
let numero = parseFloat(prompt("Por favor, ingrese un número"));

//Creo la función que retorna un mensaje si se cumplen las condiciones
function tipoNumero(num) {
  if (num == 0) {
    return `El número ingresado es ${num}`;
  } else if (num > 0) {
    return `El número ${num} es positivo`;
  } else {
    return `El número ${num} es negativo`;
  }
}

//A la función tipoNumero le paso como parámetro el valor introducido por el usuario, y el resultado de la función la muestro por consola
console.log(tipoNumero(numero));
