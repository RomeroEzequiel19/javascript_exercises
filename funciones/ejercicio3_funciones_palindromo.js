//EJERCICIO 3

// declaro la varible y le asigno un valor string
let cadena = "radar";

//Creo la función isPalindromo que retorna si la cadena es palíndromo o no
function isPalindromo(cadena){
    
    //Declaro la variable y le asigno la cadena de manera inversa
    //primero a la cadena le coloco el método split() que divide la cadena en un array, luego el método reverse() para invertir el orden del array generado y por último el método join() que ine todos los elementos del array
    let cadenaReversa = cadena.split("").reverse().join("");

    //Realizo la condicón la cual devuelve true si se cumple o false si no lo hace
    if(cadenaReversa == cadena){
        return true;
    }else{
        return false;
    }
}

//A la función isPalindromo le paso como parámetro el valor de la variable y el resultado de la función la muestro por consola
console.log(isPalindromo(cadena));
