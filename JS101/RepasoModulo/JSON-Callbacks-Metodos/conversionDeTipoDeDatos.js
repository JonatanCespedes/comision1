// typeof
/* 
Usando el operador typeof podemos saber que tipo de dato está almacenado en una variable.
typeof devuelve un string indicando que tipo de dato almacena la variable.

operador variable
typeof   nombreVariable
*/
var nombre = 'Tobias';
console.log(typeof nombre);
var llueve = true;
console.log(typeof llueve);
var edad = 14;
console.log(typeof edad);
var resultado;
console.log(typeof resultado);

//MÉTODOS DE CONVERSIÓN

// Number()
/* Convierte un string en un número */

console.log(Number('55'))
console.log(Number('55.5'))
console.log(Number('-55.5'))

/* En caso de no contener caracteres no numéricos, devuelve NaN */

console.log(Number('Cien'))

// parseInt()

/* Es una función nativa de JS que recibe como parámetro la cadena de caracteres que queremos parsear y devuelve un entero. */

console.log(parseInt('12'))
console.log(parseInt('    3  '))
console.log(parseInt('158.9'))
console.log(parseInt('-3'))
console.log(parseInt('jhk561'))


// parseFloat()

/* Función nativa de JS que recibe como parámetro la cadena de caracteres que queremos parsear y devuelve un número con decimales (si el string original los contenía) */

console.log(parseFloat('12.6'));
console.log(parseFloat('   6.7'));
console.log(parseFloat('11.9e'));
console.log(parseFloat('-4.32'));
console.log(parseFloat('9,57'));


// string()

/* Función nativa de JS que convierte el valor que le pasemos en un string */

console.log(String(3005))
console.log(String(true))
console.log(String(['Juan', 'Maria']))

/* Si bien puede trabajar con arrays, no puede convertir objetos*/
console.log(String({nombre: 'Rosita'}));

var nA = 4;
var nB = 12;

console.log(String(nA)+String(nB))