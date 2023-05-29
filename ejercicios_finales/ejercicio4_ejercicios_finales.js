//EJERCICIO 4

//Declaro las variables 
let listaPrecios = [];
let resultado = 0;

//Funcion que retorna el array con los precios ingresados
function cargarPrecios(listaPrecios) {
  let palabra = "";

  //Mientra la variable "palabra" sea diferente a 'total', permite el ingreso de precios en el arreglo
  while (palabra != "total") {
    let valorCompra = parseFloat(prompt("Ingrese el valor de la compra"));
    listaPrecios.push(valorCompra);

    palabra = prompt("Si ya no desea ingresar más precios escriba la palabra 'total'").toLowerCase();
  }

  return [listaPrecios];
}

//Funcion que realiza la suma de todos los precios de la lista antes agregadas y lo retorna
function obtenerSuma(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    let valor = numeros[i];
    suma = suma + valor;
  }
  return suma;
}

//A la función cargarPrecios le paso como parámentro el arreglo vación para agregarle los precios
cargarPrecios(listaPrecios);

//A la funcion obtenerSuma le paso el arreglo con los precios antes cargados y al resultado de la función lo almaceno en la variable 'resultado'
resultado = obtenerSuma(listaPrecios);

//Muestro por consola el resultado de la suma
console.log(`El resultado del total de la compra es de: $ ${resultado}`);
