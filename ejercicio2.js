/*
PROBLEMA: Obi-Wan Kenobi, necesita clasificar diferentes códigos de acceso a las naves de guerra los cuáles
reposan en la base de datos central, para ello debe programar una función que permita recibir la
palabra clave de cada nave y separar imprimiendo solo el nombre del piloto asignado a cada nave.
Tenga en cuenta que el formato de todos los datos es el siguiente:
• ARQ2555: Sara Bel-Sun
• ARQ2556: Nodin Chavdri
• ARQ2557: Finn
aconsejo revisar el metodo split
*/

let pilotos = [
  "ARQ2555: Sara Bel-Sun",
  "ARQ2556: Nodin Chavdri",
  "ARQ2557: Finn",
];

//funcion tradicional
function obtenerNombrePiloto(pilotos) {
  for (let i = 0; i < pilotos.length; i++) {
    let datos = pilotos[i].split(": ");
    let nombrePiloto = datos[1];
    console.log(nombrePiloto);
  }
}
console.log(obtenerNombrePiloto(pilotos));

//funcion flecha
let obtenerNombrePilotoFlecha = (pilotos) => {
  for (let i = 0; i < pilotos.length; i++) {
    let datos = pilotos[i].split(": ");
    let nombrePiloto = datos[1];
    console.log(nombrePiloto);
  }
};
console.log(obtenerNombrePilotoFlecha(pilotos));
