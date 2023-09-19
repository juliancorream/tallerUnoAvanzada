/*
La luna de Endor pierde temperatura día a día, para ello hay que hacer un monitoreo constante,
Cree una función de flecha que permita calcular la temperatura media de la luna a partir de la
temperatura máxima y mínima de cada día
*/

let temperaturas = [
  { dia: "dia1", temperaturaMax: 16, temperaturaMin: 12 },
  { dia: "dia2", temperaturaMax: 14, temperaturaMin: 11 },
  { dia: "dia3", temperaturaMax: 18, temperaturaMin: 13 },
  { dia: "dia4", temperaturaMax: 20, temperaturaMin: 16 },
  { dia: "dia5", temperaturaMax: 16, temperaturaMin: 14 },
  { dia: "dia6", temperaturaMax: 15, temperaturaMin: 13 },
  { dia: "dia7", temperaturaMax: 17, temperaturaMin: 13 },
  { dia: "dia8", temperaturaMax: 19, temperaturaMin: 16 },
  { dia: "dia9", temperaturaMax: 21, temperaturaMin: 17 },
  { dia: "dia10", temperaturaMax: 13, temperaturaMin: 9 },
];

//funcion tradicional
function promedioTemperaturas(temperaturas) {
  let promedioTemperaturaMax = 0;
  let promedioTemperaturaMin = 0;

  for (let i = 0; i < temperaturas.length; i++) {
    promedioTemperaturaMax +=
      temperaturas[i].temperaturaMax / temperaturas.length;
    promedioTemperaturaMin +=
      temperaturas[i].temperaturaMin / temperaturas.length;
  }

  return { promedioTemperaturaMax, promedioTemperaturaMin };
}

const resultado = promedioTemperaturas(temperaturas);
console.log(`Temperatura Maxima: ${resultado.promedioTemperaturaMax}`);
console.log(`Temperatura Minima: ${resultado.promedioTemperaturaMin}`);

//funcion flecha
let promedioTemperaturasFlecha = (temperaturas) => {
  let promedioTemperaturaMax = 0;
  let promedioTemperaturaMin = 0;

  for (let i = 0; i < temperaturas.length; i++) {
    promedioTemperaturaMax +=
      temperaturas[i].temperaturaMax / temperaturas.length;
    promedioTemperaturaMin +=
      temperaturas[i].temperaturaMin / temperaturas.length;
  }

  return { promedioTemperaturaMax, promedioTemperaturaMin };
};

const resultadoFlecha = promedioTemperaturasFlecha(temperaturas);
console.log(
  `Temperatura Maxima Flecha: ${resultadoFlecha.promedioTemperaturaMax}`
);
console.log(
  `Temperatura Minima Flecha: ${resultadoFlecha.promedioTemperaturaMin}`
);
