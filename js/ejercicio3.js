//Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

const suma = [];

for (let i = 0; i < 50; i++) {
  let dado1 = Math.floor(Math.random() * 6) + 1;
  console.log(dado1);
  let dado2 = Math.floor(Math.random() * 6) + 1;
  console.log(dado2);
  suma.push(dado1+dado2);
}
console.log(suma);

const sumaOrdenada = suma.sort(function(a, b){return a - b});
console.log(sumaOrdenada);

let recuento = 1;
const apariciones = [];
const combinaciones = [];

for (let j = 0; j < sumaOrdenada.length; j++){
    if (sumaOrdenada[j+1] === sumaOrdenada [j]) {
      recuento++;
    } else {
      combinaciones.push(sumaOrdenada[j]);
      apariciones.push(recuento);
      recuento = 1
    }
}
console.log(combinaciones);
console.log(apariciones);

document.write(`<table><tbody>`)
document.write(`<tr>`)
document.write(`<td> Suma </td>`)
document.write(`<td> Apariciones </td>`)
document.write(`</tr>`)
for(let i=0; i<11; i++){
document.write(`<tr>`)
  document.write(`<td> ${combinaciones[i]} </td>`)
  document.write(`<td> ${apariciones[i]} </td>`)
  document.write(`</tr>`)
}
document.write(`</tbody></table>`)
