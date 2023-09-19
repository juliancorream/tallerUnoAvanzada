/*
Watto paga a su personal de ventas un salario de
3500000 mensuales, más una comisión de 1500000 por cada
licencia de software vendida menos el 5% de deducciones por
impuestos sobre el total devengadp. Codifica un programa que
calcule e imprima el salario mensual de un vendedor dado
*/

let empleados = [
  {
    nombre: "Julian",
    salario: 3500000,
    comision: 1500000,
    licenciasVendidas: 1,
    deduccion: 5,
  },
  {
    nombre: "Claudia",
    salario: 3500000,
    comision: 1500000,
    licenciasVendidas: 2,
    deduccion: 5,
  },
  {
    nombre: "Samantha",
    salario: 3500000,
    comision: 1500000,
    licenciasVendidas: 3,
    deduccion: 5,
  },
];

//funcion convencional
function ValorTotalAPagar(empleados) {
  for (let i = 0; i < empleados.length; i++) {
    const empleado = empleados[i];

    const subtotal =
      empleado.salario + empleado.comision * empleado.licenciasVendidas;
    const deduccion = (empleado.deduccion / 100) * subtotal;
    const totalAPagar = subtotal - deduccion;

    empleado.subtotal = subtotal;
    empleado.totalAPagar = totalAPagar;
  }
  return empleados;
}
const valorPagar = ValorTotalAPagar(empleados);
console.log(valorPagar);

//funcion flecha
let ValorTotalAPagarFlecha = (empleados) => {
  for (let i = 0; i < empleados.length; i++) {
    const empleado = empleados[i];

    const subtotal =
      empleado.salario + empleado.comision * empleado.licenciasVendidas;
    const deduccion = (empleado.deduccion / 100) * subtotal;
    const totalAPagar = subtotal - deduccion;

    empleado.subtotal = subtotal;
    empleado.totalAPagar = totalAPagar;
  }
  return empleados;
};
const valorPagarFlecha = ValorTotalAPagarFlecha(empleados);
console.log(valorPagarFlecha);
