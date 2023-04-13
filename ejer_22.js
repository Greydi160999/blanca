

function calcularValor(numero) {
  if (numero < 0) {
    return Math.pow(numero, 3);
  } else {
    return numero * 2;
  }
}
var numero1 = 5;
var resultado1 = calcularValor(numero1);
console.log(resultado1); // Devuelve 10

var numero2 = -2;
var resultado2 = calcularValor(numero2);
console.log(resultado2); // Devuelve -8