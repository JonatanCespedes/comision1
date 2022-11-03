//NUMÉRICOS (number)

let edad = 34; 
let precio = 135.2; //Decimales, se utiliza .

// CADENA DE CARACTERES (string)

let nombre = 'Alejo';
let ocupacion = "Estudiante de primer grado";

// LÓGICOS O BOOLEANOS (boolean)

let estaEstudiando = true;
let podemosSalir = false;
 
// OBJETO (object)
/* A diferencia de otros tipos de datos que pueden contener un solo dato, los objetos son 'colecciones' de datos y en su interior pueden existir todos los anteriores. Los podemos reconocer porque se declaran con llaves {} */

let persona = {
    nombre: 'Alejo', // String
    edad: 6, // number
    inteligente: true // boolean
}

// ARRAY 
/** Al igual que los objetos, los arrays son colecciones de datos. Se los reconoce porque se declaran con corchetes [].
 * Los Arrays son un tipo especial de objetos, por eso no los consideramos como un tipo de dato más.
 */

 let comidasFavoritas = ['Fideos con manteca', 'Pizza', 'Picada'];
 let numerosSorteados = [12, 56, 102, 99, 529];

// TIPOS DE DATOS ESPECIALES

// NaN (NOT A NUMBER)

let malaDivision = '35' * 2; // NaN no es un numero.

// Null (VALOR NULO)

let temperatura = null; // No llegó un dato, algo falló

// UNDEFINED (VALOR SIN DEFINIR)

/** Las variables tienen no un valor definido hasta que le asignamos un valor */

let otraVariable; // Undefined, no tiene valor
otraVariable = "¡Hola!"; // Valor asignado


/** Funciones nativas: Number() y parseInt  */

let numero = Number(56); // retorna un dato tipo number
console.log(numero);
let numero1 = parseInt(56.23) // devuelve sólo el entero
console.log(numero1);

