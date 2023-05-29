//EJERCICIO 2

//Creo el objeto producto con sus respectivas propiedades
const persona = {
    nombre: "Ezequiel Romero",
    edad: 19,
    profesion: "Ingeniero de Software"
}

//Creo la función presentarPersona que retorna la presentación de la persona con los datos obtenidos del objeto
function presentarPersona(datos){
    let presentacion = `Hola, Mi nombre es ${datos.nombre}, tengo ${datos.edad} y soy ${datos.profesion}`;
    return presentacion;
}

//A la función presentarPersona le paso como parámetro el objeto persona y el resultado de la función la muestro por consola
console.log(presentarPersona(persona));