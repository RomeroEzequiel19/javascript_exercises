//EJERCICIO 1

// Declaro la varible y le asigno un valor
let edad = 17;

//Creo la función esMayorEdad el cual recibe como parámetro el valor de la variable
function esMayorEdad(edad) {

    //Realizo la estructura condicional para que devuelva el valor
    if(edad >= 18){
        return true;
    }else{
        return false;
    }
}

//A la función esMayorEdad le paso como parámetro el valor de la variable y el resultado de la función la muestro por consola
console.log(esMayorEdad(edad));