/*
QUI-GON JINN está encargado de revisar n sables
de luz y contabilizar la cantidad de energía de sables que tienen
negativa en Joules, Ejemplo: para la entrada {2,4,-8,5,-6} la cantidad de sables
defectuosos con energía negativa fue de 2 sables.
*/

let sables = [2, 4 - 8, 5, -6, 5, -4, 8, 7, -9, 3, -2, -1, -4, 5, 8, -6, 7];

//funcion tradicional
function sablesDefectuosos(sables) {
  let contador = 0;
  for (let i = 0; i < sables.length; i++) {
    if (sables[i] < 0) {
      contador++;
    }
  }
  return contador;
}

const sableDefectuoso = sablesDefectuosos(sables);
console.log(`Cantidad Sables Defectuosos son: ${sableDefectuoso}`);

//funcion flecha
let sablesDefectuososflecha = (sables) => {
  let contador = 0;
  for (let i = 0; i < sables.length; i++) {
    if (sables[i] < 0) {
      contador++;
    }
  }
  return contador;
};

const sableDefectuosoflecha = sablesDefectuososflecha(sables);
console.log(`Cantidad Sables Defectuosos Flecha son: ${sableDefectuosoflecha}`);
