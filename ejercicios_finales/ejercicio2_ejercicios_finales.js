//EJERCICIO 2 - EJERCICIOS FINALES

//Solicito al usuario que ingrese un numero y lo almaceno en la varible numero
let numero = parseFloat(prompt("Por favor, ingrese un número"));

//Creo una funcion esPrimo que returno si el numero es primo o no
function esPrimo(numero) {
 
    /*
    El bucle for itera desde el numero dos hasta el numero ingresado.
    Si el numero ingresado es divisible por alguno de los valores, no es primo
    Si el numero ingresado no es divisible por ninguno de los valores, es primo
    */
    if(numero > 1){
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                return "El número " + numero + " no es primo.";
            }
        }
        return "El número " + numero + " es primo.";
    }else{
       return "El número " + numero + " no es primo.";
    }
  
}

//A la función esPrimo le paso como parámetro el valor introducido por el usuario, y el resultado de la función la muestro por consola
console.log(esPrimo(numero));
