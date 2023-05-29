//EJERCICIO 3

let temperatura = parseFloat(prompt("Ingresa el valor de la temperatura:"));

let unidad = prompt("Ingresa la unidad a la que lo desea convertir (Celsius o Fahrenheit):").toLowerCase();
  
function convertirTemperatura(temperatura, unidad) {

    while (unidad != "celsius" || unidad != "fahrenheit"){
        unidad = prompt("Unidad inválida. Por favor, ingrese la unidad a la que lo desea convertir (Celsius o Fahrenheit):").toLowerCase();
    }

    if (unidad == "celsius"){
        let fahrenheit = temperatura * 1.8 + 32;
        return (`${temperatura}C° son equivalentes a ${fahrenheit}F°.`);
    }else if (unidad == "fahrenheit"){
        let celsius = (temperatura - 32) / 1.8;
        return (`${temperatura}F° son equivalentes a ${celsius}C°`);
    }

   
}
  
console.log(convertir(temperatura, unidad));
