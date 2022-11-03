let amigos = ['Alan', 'Pablo', 'Dani', 'Ivo']; // Array

let amigosJSON = JSON.stringify(amigos);

console.log(amigosJSON); //imprime en consola un String

let amigosOriginal = JSON.parse(amigosJSON); // Deberia recibir un String que sea un JSON valido e imprimir la variable original Array

console.log(amigosOriginal);

// Prueba con un objeto literal

let persona = {
    nombre: 'Alan',
    apellido: 'Rios',
    edad: 28,
    ciudad: 'Barcelona'
};

let personaJSON = JSON.stringify(persona);

console.log(personaJSON);

let personaOriginal = JSON.parse(personaJSON);

console.log(personaOriginal);

