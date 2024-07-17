/* Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
La fórmula del perímetro  es p = 2*(a +b)
Ejemplo:
Input:
lado A = 24
lado B = 5
Output: 58
*/

const a = parseInt(prompt('Ingrese el valor de uno de los lados del rectangulo'));
const b = parseInt(prompt('Ingrese el valor de otro de los lados, que es diferente al ya inngresado'));

function perimetro (a, b) {
  perimetro = (2 * (a + b))
  document.write(`${perimetro}`)
}

perimetro (a, b);
