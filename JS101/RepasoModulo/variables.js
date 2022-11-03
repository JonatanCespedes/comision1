// la palabra reservada var le indica a Javascript que vamos a declarar una variable tipó var.

var nombreSignificativo;

// para asignarle un valor a una variable se utiliza el operador de asignación '=' con el cual le indicamos a JS que el el valor de la derecha lo guardaremos en la variable de la izquierda.

var miApodo = 'Hackerman';

// la primera vez que declaramos una variable es necesaria la palabra reservada 'var' 

miApodo = 'El Barto';

// La variable siempre guardará el último valor asignado, eso quiere decir que si volvemos a asignarle una valor, pisamos el anterior.

// DECLARACION CON LET

let contador = 0;

// La principal diferencia entre var y let es que let sólo será accesible en el bloque de código en el que fué declarada. Los bloques de código son determinados por{}

//VAR
if (true) {
    var nombre = 'Juan';
}

console.log(nombre);
// Ok, muestra 'Juan'

/*Cuando usamos var JS ignora los bloques de código y convierte nuestra variable en global.
Eso quiere decir que si hay otra variable 'nombre' en nuestro código, seguramente estaremos pisando su valor*/

//LET

if(true){
    let nombre = 'Juan';
}

console.log(nombre)
// Error: nombre no existe

/* Cuando usamos 'let' JS respeta los bloques de código. Eso quiere decir que 'nombre' no podrá ser accedida fuera del if.
También quiere decir que podemos tener variables con el mismo nombre en diferentes bloques de nuestro código */

// DECLARACIÓN CON CONST

const EMAIL = 'mi.email@hotmai.com';

/* Las variables declaradas con const funcionan igual que con las variables let, estarán disponibles en el bloque de código donde las hayan declarado.
Al contrario que let, una vez que le asignemos un valor, no podremos cambiarlo. */

EMAIL = 'mi.nuevo.email@hotmail.com';

// Error de asignación, no se puede cambiar el valor de un const
//UNA BUENA PRÁCTICA AL USAR LA PALABRA RESERVADA const ES EL USO DE MAYÚSCULAS EN EL NOMBRE ASIGNADO.



