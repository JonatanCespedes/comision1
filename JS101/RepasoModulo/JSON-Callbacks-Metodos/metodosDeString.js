//  METODOS DE STRING
//En muchos sentidos, para Javascript, un string no es mas que un array de caracteres. Al igual que los arrays, la primera posicion es 0.

              0123456
var nombre = 'Jonatan'

//Podemos acceder al contenido de la variable nombre utilizando la misma sintaxis que con arrays: variable[indice]

nombre[3]; // devuelve 'a'

//   .length
// Ésta propiedad retorna la cantidad total de los caracteres del string.

var miSerie = 'The Walking Dead';
miSerie.length; //Devuelve 16

var arrayNombres = ['Alejo', 'Tobias', 'Jonatan', 'Flavia'];
arrayNombres.length; // Devuelve 4

// Cuando una función le pertenece a un objeto, en éste caso a nuestro array, la llamamos MÉTODO.

//  .indexOf()
/* Éste método busca en el string donde se aplica, el string que recibe como parámetro.
En el caso de encontrarlo, retorna la primera posición donde lo encontró.
En caso de no encontrarlo, retorna -1. */

let saludo = '¡Hola! Estamos programando';

saludo.indexOf('Estamos'); // Decvuelve 7
saludo.indexOf('vamos'); // devuelve -1, no lo encontró
saludo.indexOf('o'); // encuentra la letra 'o' que está en la posición 2, devuelve 2 y corta la ejecución.

// .slice()
/* Corta y devuelve una parte del string donde se aplica. 
Recibe 2 parametros, desde donde inicia el corte y hasta donde hacer el corte y es opcional.
Ambos indices pueden recibir números negativos
*/

var frase = 'Sin música la vida sería un error.';

console.log(frase.slice(0, 3));
console.log(frase.slice(4));
console.log(frase.slice(-6));

// .trim()
/* Método que elimina los espacios que estén al principio y al final de un string*/

var nombreCompleto = '     Jonatan Céspedes        ';
console.log(nombreCompleto.trim())

// .split()
/* Método que divide un string en varios strings utilizando el string que le pasamos cómo parámetro y devuelve un array con las partes del string original. */

var frase = 'Sin música la vida sería un error.';

console.log(frase.split(' '))

// .replace()

/* Método que reemplaza una parte de un string por otra, según los parámetros que le hayamos pasado. Recibe dos parámetros, el tramo del string a reemplazar y el string que usaremos de reemplazo. Devuelve un string con la modificación. */

var frase = 'Aguante Phyton!';
console.log(frase.replace('Phyton!', 'Javascript!'))