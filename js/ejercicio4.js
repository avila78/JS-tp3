// Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

function par(numero){
  let numeroIng = 0
  if (numeroIng = (numero % 2)) {
    document.write(`<p>el número ${numero} es impar</p>`)
  } else {
    document.write(`<p>el número ${numero} es par</p>`)
  }
}

par(25);
par(3);
par(4);
par(-2);
par(-3);
