let texto = '28.3';
console.log(texto);

// Ejemplo de typeOf
console.log(typeof texto);

// Ejemplo de parseInt
console.log(parseInt(texto)); // devuelve solo el número entero
let numero = parseInt(texto);
console.log(typeof numero)

// Ejemplo de Number
console.log(Number (texto)); // devuelve el numero completo
let otroNumero = Number (texto);
console.log(typeof otroNumero);

// Ejemplo de String
let textoConvertido = String(numero);
console.log(typeof textoConvertido);
console.log(textoConvertido + ' ' + 3); // me lo devuelve como String 
console.log(otroNumero + 3); // lo devuelve como numeros 
