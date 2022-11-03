// Ejemplo de length

let mensaje = '  Gran día para practicar Javascript!';
console.log(mensaje.length);

// Ejemplo de indexOf
console.log(mensaje.indexOf('día'));
console.log(mensaje.indexOf('dia')); // al no encontrar la palabra solicitada devuelve en consola -1

// Ejemplo de slice
console.log(mensaje.slice(-10));
console.log(mensaje);

// Ejemplo de trim
console.log(mensaje.trim());

// Ejemplo de split
console.log(mensaje.split (' '));

// Ejemplo de replace
console.log(mensaje.replace('Javascript', 'todo'));