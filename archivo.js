var operaciones = require('./operaciones');

var mult = operaciones.multiplicar(process.argv[2], process.argv[3]);
var sum = operaciones.suma(parseInt(process.argv[2]),parseInt(process.argv[3]));
console.log("el resultado de la multiplicacion es: " + mult);
console.log("el resultado de la suma es: " + sum);