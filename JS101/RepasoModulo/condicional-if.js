/* ==========================
CONDICIONAL SIMPLE
========================== */
let condicion;
if(condicion) {
    // código a ejecutar si la condición es verdadera
}

/* ==========================
CONDICIONAL CON BLOQUE "ELSE"
========================== */

if(condicion) {
    // código a ejecutar si la condición es verdadera
} else {
    // código a ejecutar si la condición es falsa
}

/* ==========================
CONDICIONAL CON BLOQUE "ELSE IF"
========================== */
let condicion2;
if(condicion) {
    // código a ejecutar si la condición es verdadera
} else if (condicion2/*otra condicion*/) {
    // código a ejecutar si esta otra condicion es verdadera
} else {
    // código a ejecutar si todas las condiciones fueron falsas
}

function entrada(edad){
if (edad < 16) {
    return'Acceso prohibido';
} else if (edad >= 16 && edad <=18){
    return 'Acceso permitido sólo acompañado de un mayor';
} else {
    return 'Acceso permitido';
}
}
console.log(entrada(6))