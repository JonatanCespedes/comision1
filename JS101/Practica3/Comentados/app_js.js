let moduloTareas = require('./tareas') //requiero el moduloTareas usando el método require() cuyo parámetro es la ruta donde se encuentra el archivo
let process = require('process'); //requiero el módulo nativo de Node 'process' que me da acceso a la información del proceso de node
let comando = process.argv[2]; //asigno a comandos la tercera posición del array que me devuelve la propiedad argv del módulo process
switch (comando){ //creo un switch de la variable comando
    case 'listar' : //en el caso que comando tenga valor 'listar'
        let tareas = moduloTareas.leerJSON(); //lee el json usando el metodo leerJSON del moduloTareas
    for(let i = 0 ; i < tareas.length ; i++){ //recorro el json parseado que es un array de objetos para mostrar en consola cada uno de sus elementos
        console.log("Titulo: " + tareas[i].titulo)
    }
    break;
    case 'agregar': //en el caso que comandos tenga valor 'agregar'
    let nuevoTitulo = process.argv[3]; //mediante la propiedad argv del modulo process asigno la posición 4 del mismo
    let nuevaTarea = { //creo un objeto literal que luego pasaré como parametro para ser añadido 
        titulo  :   nuevoTitulo, //la propiedad titulo recibe como valor lo escrito en la cuarta posición de argv.
        estado  :   "pendiente" //por defecto la nueva tarea tendrá como estado 'pendiente'
    }
    moduloTareas.escribirJSON(nuevaTarea); //llamo al metodo escribirJSON del moduloTareas pasandole como parametro el objeto literal que es la nueva tarea a añadir
    
    break
    case undefined:
        console.log("Escribime un comando porfa");
        break
    default:
        console.log("Escribime un comando válido")
}