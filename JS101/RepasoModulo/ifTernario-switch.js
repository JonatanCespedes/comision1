//El if ternario

//condicion ? primera expresión : segunda expresión

//Si es verdadera, ejecuta la primera expresión, si es falsa ejecuta la segunda

4 > 10 ? 'El 4 es más grande' : 'El 10 es más grande';

//Para el if ternario es obligatorio poner código en la segunda expresión.

//EL SWITCH
// eL SWITCH  está compuesto por una expresión a evaluar, seguida de diferentes casos, tantos como queramos, cada uno contemplando un escenario diferente.

/*switch (expresión) {
    case valorA:
        //código que se ejecuta si valorA es verdadero
        break;
    case valorB:
        //código que se ejecuta si valorB es verdadero
        break;
}*/

let edad = 5 // Definimos la variable edad y le asignamos el valor numerico 5

switch (edad) { // Iniciamos el condicional con la palabra reservada switch y, entre parentesis, la expresión / condición que queremos evaluar. En éste caso evaluamos qué valor tiene edad.
    case 10: //Si el valor de la variable edad es verdadero: (en éste caso es falso, por lo tanto JS ignora el código y pasa al siguiente)
        console.log('Tiene 10 años') 
        break;
    case 5: 
        console.log('Tiene 5 años')
        break;
}

//¿Y si ningún caso es verdadero? En este caso introducimos la palabra reservada default.

switch (key) {
    case value:
        
        break;

    default:
        break;
}

let fruta = 'wefwef';

switch (fruta) {
    case 'manzana':
        console.log('Que rica es la manzana');
        break;
    case 'naranja':
        console.log('¡Me encanta!')    
        break;
    default:
        console.log('No conozco esa fruta');
        break;
}