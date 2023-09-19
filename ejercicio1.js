/*
PROBLEMA: Yoda el maestro jedi, necesita enseñar a sus aprendices
Padawan a calcular la distancia a la que cualquiera de los planetas de la
ruta N-14 pertenecientes a la ruta comercial de la federación
intergaláctica, se encuentra del planeta NABOO.
Para calcular dicha distancia se debe:
• Recibir las coordenadas X,Y del planeta en UA
• Establecer la distancia como:

√(𝑥2 − 𝑥1)2 + (𝑦2 − 𝑦1)2

Raiz ccuadrada de: (x2-x1)al cuadrado + (y2-y1)al cuadrado
*/

function calcularDistacia(x1, x2, y1, y2) {
  let restasx = x2 - x1;
  let restasy = y2 - y1;
  let potenciasx = Math.pow(restasx, 2);
  let potenciasy = Math.pow(restasy, 2);
  let sumatoria = potenciasx + potenciasy;
  let distancia = Math.sqrt(sumatoria);
  return distancia;
}
console.log(calcularDistacia(10, 12, 20, 12));

//Optimizando la funcion calcularDistacia
function calcularDistacia(x1, x2, y1, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
console.log(calcularDistacia(10, 12, 20, 12));

//Creando la misma funcion calcularDistancia pero en funcion flecha
let calcularDistaciaFlecha = (x1, x2, y1, y2) =>
  Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
console.log(calcularDistaciaFlecha(10, 12, 20, 12));
