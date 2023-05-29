//EJERCICIO 4

//Creo la funcion generarNumeroAleatorio que retorna un numero aleatorio
function generarNumeroAleatorio() {

    //Declaro la variable numero y le asigna el valor generado aleatoriamente
    //Math.random devuelve un número decimal aleatorio entre el 0 y el 1,luego lo multiplico por 10 obteniendo un numero decimal entre 0 y 10.
    //Math.floor lo utilizo para obtener un valor entero entre 0 y 9, y al sumarle 1 obtenemos los valores aleatorios entre 1 y 10
    let numero = Math.floor(Math.random() * 10) + 1;;
    return numero
}

//Muestro por consola el retorno de la función
console.log(generarNumeroAleatorio());