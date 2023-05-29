//EJERCICIO

//Declaro las variables y le asigno un arreglo
let notasEstudiantes = [9, 10, 6, 8, 4, 10, 8, 9];
let pesos = [0.5, 4.5, 0.9, 0.1, 1.34, 1.02, 1.2, 0.39];

function obtenerPromedioPonderado(notas, pesos) {
  let sumaNotas = 0;
  let sumaPesos = 0;

  for (let i = 0; i < notas.length; i++) {
    sumaNotas += notas[i] * pesos[i];
    sumaPesos += pesos[i];
  }

  const PromedioPonderado = sumaNotas / sumaPesos;
  return PromedioPonderado;
}

console.log(obtenerPromedioPonderado(notasEstudiantes, pesos));