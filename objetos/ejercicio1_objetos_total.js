//EJERCICIO 1

//Creo el objeto producto con sus respectivas propiedades
const producto = {
    nombre: "Azucar",
    precio: 250,
    cantidad: 10
}

//Creo la función calcularTotal que retorna el total a pagar
function calcularTotal(producto){

    //Creo las variables precio y cantidad, y les asigno los valores de las propiedades del objeto producto
    let precio = producto.precio;
    let cantidad = producto.cantidad;
    let totalPagar = 0;

    //Hallo al total a pagar y lo retorno
    totalPagar = precio * cantidad;
    return totalPagar;
}

//A la función calcularTotal le paso como parámetro el objeto producto y el resultado de la función la muestro por consola
console.log(`El total a pagar es: $ ${calcularTotal(producto)}`)