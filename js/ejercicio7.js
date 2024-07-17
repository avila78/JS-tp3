//Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

const numeroIng = parseInt(prompt ('Ingrese un número'))

function tabla(numeroIng) {
  resultados = [];
  for (let i = 0; i <= 10; i++) {
    let resultado = (i * numeroIng);
    resultados.push(resultado);
  }

  document.write(`<table><tbody>`)
  document.write(`<tr>`)
  document.write(`<td> Número </td>`)
  document.write(`<td> Resultado </td>`)
  document.write(`</tr>`)
  for(let i=1; i<11; i++){
  document.write(`<tr>`)
  document.write(`<td> ${[i]} </td>`)
  document.write(`<td> ${resultados[i]} </td>`)
  document.write(`</tr>`)
  }
  document.write(`</tbody></table>`)
}

tabla(numeroIng);
