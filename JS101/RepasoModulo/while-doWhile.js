//ESTRUCTURA DEL CICLO WHILE
//El ciclo while ejecutará nuestro código miestras la condicion que especifiquemos se cumpla. Consta de dos partes: la condición y el bloque de código que queremos ejecutar mientras que la condición establecida evalúe como verdadera.
/*
while(condición){
    //bloque de código que se ejecuta si la condición es verdadera.
}
*/

let contador = 0; // Defino la variable contador y le asigno valor 0
 
while (contador <= 5){ // inicio el ciclo con la palabra reservada while y establezco la condicion a evaluar que si el valor de la variable contador es menor o igual a 5 es verdadera.
    console.log('Contador: ' + contador); //Si es verdadera se ejecuta {}
    contador++; // En cada repeticion incrementa el valor que tenga asignado la variable contador
}

var clase = 1;
while(clase <= 5){
    console.log('Bienvenido/a a la clase número: ' + clase);
    clase++;
}

//ESTRUCTURA DEL CICLO DO WHILE
// A diferencia del while, el ciclo Do While ejecuta el código por lo menos una vez y después evalúa la condición. Eso quiere decir que el código se ejecutará por lo menos una vez. Al igual que el while, el do while ejecutará nuestro código mientras que la condición sea verdadera.
/*
do {
    bloque de código que se ejecutará el menos una vez
    y cada vuelta si la condición es verdadera
} while (condición)
*/
var diaSemana = 1;

do {
    console.log('Día de la semana N° ' + diaSemana);
    diaSemana++;
} while (diaSemana <= 7)

clase = 6;
do {
    console.log('Bienvenido/a a la clase número: ' + clase);
    clase++;
} while(clase <=5);

/*Para este ejercicio te damos la función count ya declarada. Esta función va a recibir dos parámetros numéricos. Queremos que la función recorra desde el primer parámetro hasta el segundo y que imprima por consola el texto "El número actual es__ y es menor a__".

Por ejemplo, si le pasáramos los números 4 y 6 deberíamos ver algo así:
"El número actual es 4 y es menor a 6"

"El número actual es 5 y es menor a 6"*/

function count (desde, hasta){
       while (desde < hasta){
        console.log('El número actual es ' + desde + ' y es menor a ' + hasta)
       desde++
    } 
}
console.log(count(4, 6))

/*    Queremos construir una función que reciba un array de números como parámetro. La función deberá recorrer este array e imprimir por consola cada uno de los números. En caso de encontrar un 5, deberá cortar la ejecución e imprimir por consola el texto "Se encontró un 5!". */

let numeros = []
function encontreUn5 (numeros){
    let i = 0 
    do{
        if(numeros[i]==5){
            return console.log('Se encontró un 5!');
        } i++;
    }while(i<=numeros.length)
}
console.log(encontreUn5([22, 68, 5, 56]))

/*
Para este ejercicio te damos la función tablaDeMultiplicar ya definida, la cual recibe un número como parámetro. Queremos que al ejecutarse la función muestre por consola la tabla de multiplicar del 1 al 10 del número que reciba.

Por ejemplo si el número que pasamos por parámetro es 5, la función deberá imprimir:
5 * 1 = 5

5 * 2 = 10

5 * 3 = 15

...
 */
function tablaDeMultiplicar(numero){
    let i = 1
    for (let i = 1; i <= 10; i++) {
       console.log(numero * i);    
    }
}
console.log(tablaDeMultiplicar(5))

function tablaDeMultiplicar2(numero){
    let i = 1
    while (i <= 10) {
        console.log(numero, ' ', '*', ' ', i, ' ', '=', ' ', numero * i)
        i++
    }
}
console.log(tablaDeMultiplicar2(9))