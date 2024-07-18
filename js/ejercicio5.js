// Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

const frase = prompt('Ingrese una frase');

function mayomin (frase) {
  if (frase === frase.toLowerCase()) {
    document.write ('La frase ingresada está formada sólo por minúsculas')
  } else if (frase === frase.toUpperCase()) {
    document.write ('La frase ingresada está formada sólo por mayúsculas')
  } else { 
    document.write ('La frase ingresada está formada por una mezcla de minúsculas y mayúsculas')
  }
}

mayomin (frase);
