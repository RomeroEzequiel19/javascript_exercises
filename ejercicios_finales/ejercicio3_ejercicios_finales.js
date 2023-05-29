//EJERCICIO 3

// Declaro las variables a utilizar y le asino el valor que ingresa el usuario
let temperatura = parseFloat(prompt("Ingresa el valor de la temperatura:"));
let unidad = prompt("Ingresa la unidad a la que lo desea convertir (C = Celsius o F = Fahrenheit):").toLowerCase();
  
//Creo la función que retorna la temperatura a convertir a la temperatura convertida
function convertirTemperatura(temperatura, unidad) {

    //Si quiere convertir a Fahrenheit, la temperatura ingresada será en celsius y se convertirá a fahrenheit
    if (unidad == "f"){
        let fahrenheit = temperatura * 1.8 + 32;
        return (`${temperatura}°C son equivalentes a ${fahrenheit}°F.`);
    }else if (unidad == "c"){
        //Si quiere convertir a celsius, la temperatura ingresada será en Fahrenheit y se convertirá a celsius
        let celsius = (temperatura - 32) / 1.8;
        return (`${temperatura}°F son equivalentes a ${celsius}°C`);
    }else{
        return ('No convertimos a esa unidad o colocó mal la letra de referencia');
    }

   
}
//A la funcion le paso los parametros de temperatura y de unidad, y muestro por consola el retorno de la función
console.log(convertirTemperatura(temperatura, unidad));
