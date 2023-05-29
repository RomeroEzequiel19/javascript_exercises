//EJERCICIO 3

//Creo el objeto producto con sus respectivas propiedades
const persona = {
    nombre: "Ezequiel Romero",
    edad: 19,
    profesion: "Ingeniero de Software"
}

//Creo la función esMayorEdad que devuelve true si es mayor o igual a 18, y false en caso contrario
function esMayorEdad(datos){

    if (datos.edad >= 18){
        return true;
    }else{
        return false;
    }
}

//A la función esMayorEdad le paso como parámetro el objeto persona y el resultado de la función la muestro por consola
console.log(esMayorEdad(persona));