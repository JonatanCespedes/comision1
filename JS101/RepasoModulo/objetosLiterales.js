// ESTRUCTURA DE UN OBJETO LITERAL

/** Un objeto es una estructura de datos que puede contener propiedades y métodos.
 * Para crearlo usamos llaves {}
 */

 let auto = { // Se define el nombre del objeto
     patente : 'AC 134 DD' // definimos un nombre para la propiedad del objeto, se utilizan ':' para asigar el valor de la derecha a la propiedad de la izquierda. El valor que se le asigne puede ser cualquier tipo de dato. 
 };

 /** Un objeto puede tener la cantidad de propiedades que queramos, si hay mas de una la separamos con comas ','. Con la notación 'objeto.propiedad accedemos al valor de cada una de ellas */

 let musico = {
     nombre : "Charly García",
     edad : 67,
     intrumento : "Todos",
     genialidad : true
 };

 //console.log(musico.nombre);
 //console.log(musico.genialidad);
 
 //MÉTODOS DE UN OBJETO LITERAL
 /** Una propiedad puede almacenar cualquier tipo de dato. Si una propiedad almacena una función, diremos que es un método del objeto.*/

 let musico2 = {
    nombre : "Luis Alberto Spinetta",
    edad : 60,
    intrumento : "Todos",
    genialidad : true,
    saludar : function(){
        return "Hola, soy " + musico2.nombre + " y tengo " + musico2.edad + " años."; 
    }
};
console.log(musico2.saludar()); // Para ejecutar el método de un objeto usamos la notación objeto.metodo(), los paréntesis del final son los que hacen que el metodo se ejecute.

// TRABAJANDO DENTRO DEL OBJETO

/** La palabra reservada this hace referencia al objeto en sí desde el cual estamos invocando la palabra. Con la notación 'this.propiedad' accedemos al valor de cada propiedad interna de ese objeto. */

let musico3 = {
    nombre : "Gustavo Cerati",
    edad : 50,
    intrumento : "Todos",
    genialidad : true,
    saludar : function(){
        return "Hola, soy " + this.nombre + " y tengo " + this.edad + " años."; 
    }
}    

console.log(musico3.saludar());

// CONSTRUIR UN OBJETO

/** JS nos da una opción más para crear un objeto y es a través del uso de una función constructora. La función constructora nos permite armar un molde y luego crear todos los objetos que necesitemos. La función recibe un parámetro por cada propiedad que queramos asignarle al objeto */

function Auto(marca, modelo){ //definimos un nombre para la función, que será el nombre de nuestro objeto. Por convención, solemos nombrar a los objetos con la primera letra mayúscula. También definimos la cantidad de parámetros que consideremos necesarios para crear nuestro objeto.
    this.marca = marca; // Con la notación this.propiedad definimos la propiedad del ojeto que estamos creando en ese momento.
    this.modelo = modelo;
};

function MusicoNuevo (nombre, edad, saludo){
    this.nombre = nombre;
    this.edad = edad;
    this.saludo = saludo    
}

// INSTANCIAR UN OBJETO 

/** La función constructora MusicoNuevo() espera tres parámetros: nombre, edad y saludo. Para crear un objeto MusicoNuevo debemos usar la palabra reservada new y llamar a la función pasándole los parámetros que espera.*/

let agregarMusico = new MusicoNuevo("Pappo", 24, "Hola");
 console.log(agregarMusico);
 
// Cuando ejecutamos el método new para crear un objeto, lo que nos devuelve es una instancia. Es decir, en la variable agragarMusico tendremos almacenada una instancia del objeto MusicoNuevo. Usando la misma función, podremos instanciar cuantos músicos queramos.

