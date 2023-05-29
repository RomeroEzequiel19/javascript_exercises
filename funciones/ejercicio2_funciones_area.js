//EJERCICIO 2

//Declaro y asigno un valor a las variables
let base = 20;
let altura = 30;

//Creo la función calcularAreaRectangulo que retorna el area del rectangulo
function calcularAreaRectangulo(base, alt){

    //Declaro la variable area y le signo el resultado de la multiplicacion
    let area = base * alt;
    return area;
}

//A la función calcularAreaRectangulo le paso como parámetro las variables y el resultado de la función la muestro por consola
console.log(`El valor del area es: ${calcularAreaRectangulo(base,altura)}`);