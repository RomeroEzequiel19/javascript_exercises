//EJERCICIO

//Declaro las variables y le asigno un arreglo
let notasEstudiantes = [9, 10, 6, 8, 4, 10, 8, 9];
let pesosEstudiantes = [0,7, 0.5, 0,60, 0.34, 0.65, 0.67, 0.39];

//Creo la funcion obtenerPromedioPonderado que retorna el promedio ponderado
function obtenerPromedioPonderado(notas, pesos) {
  let sumaNotas = 0;
  let sumaPesos = 0;

  for (let i = 0; i < notas.length; i++) {
    //Multiplico cada dato por su ponderacion y sumo sus valores
    sumaNotas = sumaNotas + notas[i] * pesos[i];
    sumaPesos = sumaPesos + pesos[i];
  }
  //Dividimos la suma de las notas con su ponderación por la suma de los pesos
  let PromedioPonderado = sumaNotas / sumaPesos;
  return `El promedio ponderado es: ${PromedioPonderado}`;
}

//Le paso los parámetros de las notas y los pesos y la función obtenerPromedioPonderado, y muestro por consola su retorno
console.log(obtenerPromedioPonderado(notasEstudiantes, pesosEstudiantes));