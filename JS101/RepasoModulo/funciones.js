/*Funciones
Estructura básica
Usamos la palabra reservada function para indicarle a JS que vamos a escribir una función.*/
function sumar (a, b) {
    return a + b;
}

//FUNCIONES DECLARADAS
//Son aquellas que se declaran usando la estructura básica. Reciben un nombre formal a través del cual la invocaremos.
function hacerHelado(cantidad){
    return 'Chocolate \n'.repeat(cantidad);
}
//FUNCIONES EXPRESADAS
//Son aquellas que se asignan como valor a una varible. El nombre de la función será el nombre de la variable que declaremos.

let hacerSushi = function(cantidad){
    return "Sushi\n".repeat(cantidad);
}

//INVOCANDO UNA FUNCIÓN
//La forma de invocar (ejecutar) una función es escribiendo su nombre seguido de apertura y cierre de paréntesis.

//nombreFuncion();

//En caso de querer ver o guardar el dato que retorna, será necesario almacenarlo en una variable, o hacer un console.log de la ejecución.

//let resultado = nombreFuncion();
//console.log(nombreFuncion());

function saludar(nombre, apellido){
    return 'Hola ' + nombre + ' ' + apellido;
}

let saludo = saludar("Jose", "Gomez");

console.log(saludo);

/**IMPORTANTE 
 * respetar el orden de los parámetros
 * si la función tiene parámetros, al ejecutarla hay que pasarselos porque JS espera esos argumentos. De lo contrario retorna 'undefined'.
 * para éste tipo de casos Javascript nos permite definir los valores por defecto. Si agregamos un igual = luego del parámetro, podremos especificar su valor en caso de que no llegue ninguno.
*/

function saludar2(nombre = 'visitante', apellido = 'anónimo') {
    return 'Hola ' + nombre + ' ' + apellido;
}

console.log(saludar2());

/** Los parámetros son las variables que escribimos cuando definimos la función.
 * Los argumentos son los valores que enviamos cuando invocamos la función.
 */
 
//SCOPE
// El scope refiere al alcance que tiene una variable, es decir desde donde podemos acceder a ella. Los Scopes son definidos pricipalmente por las funciones. Es fundamental dominarlo cuando trabajamos con ellas.  

// SCOPE LOCAL
// En el momento en que declaramos una variable dentro de una función, la misma pasa a tener alcance local. Es decir, esa variable vive únicamente dentro de esa función. Fuera de esa funcion Javascript nos va a decir que no existe(no fue declarada).

function miFuncion(){
    //Todo el codigo que escribamos dentro de nuestra función, tiene scope local.
}

function hola(){
    let saludo = 'Hola, ¿Qué tal?'; // La variable saludo dentro de la función tiene un scope local, solo dentro de la funció se puede acceder a ella.
    return saludo;
}

//console.log(saludo) En éste caso por consola me devolverá el siguiente error 'Uncaught ReferenceError: saludo is not defined'

//SCOPE GLOBAL 

//Al declarar una variable fuera de una función pasa a tener un alcance global, es decir que se puede hacer uso de ella en cualquier lugar del codigo, incluso dentro de una función.

let miVariable;
function miFuncion(){
    //Tenemos acceso a las variables globales
}
 
let saludo = 'Hola, ¿Cómo estás?'

function hola(){
    return saludo;
}
