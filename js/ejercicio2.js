/* Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

Ejemplo:
Input:
[‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]
*/
//`${ciudadIngresada},`

let listaCiudades = [];

do {const ciudadIngresada = prompt('Ingrese una ciudad y el país al cual pertenece');
  listaCiudades.push(ciudadIngresada);
  console.log(listaCiudades)
  }
  while (confirm('Desea agregar otra ciudad?'))
    
document.write (`<p>El arreglo de ciudades tiene ${listaCiudades.length} elementos.</p>`)
document.write (`<p>Elemento 1er posición: ${listaCiudades[0]}</p>`)
document.write (`<p>Elemento 3er posición: ${listaCiudades[2]}</p>`)
document.write (`<p>Elemento última posición: ${listaCiudades[listaCiudades.length - 1]}</p>`)

listaCiudades.push('Paris, Francia')
document.write (`<p>Elemento última posición: ${listaCiudades[listaCiudades.length - 1]}</p>`)

document.write ('<h1>Arreglo de ciudades</h1>');
document.write ('<ul>');
for (let i = 0; i < listaCiudades.length; i++) {
 document.write (`<li>Elemento: ${listaCiudades[i]}</li>`);
 }
document.write ('</ul>');
