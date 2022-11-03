let moduloTareas = require('./tareas')

let process = require('process');
let comando = process.argv[2];

switch (comando) {
    case 'listar':
        let tareas = moduloTareas.leerJSON();
        console.log('---------------')
        console.log("Lista de Tareas");
        console.log('---------------');

        for (let i = 0; i < tareas.length; i++) {
            console.log("Titulo: " + tareas[i].titulo)
        }
        break;
    case 'agregar':
        let nuevoTitulo = process.argv[3];
        if (nuevoTitulo == undefined){
            console.log('---------------')
            console.log("Tenés que escribir un título");
            console.log('---------------');
            break;
        }
        let nuevaTarea = {
            titulo: nuevoTitulo,
            estado: "pendiente"
        }

        moduloTareas.escribirJSON(nuevaTarea);
        console.log('------------------------')
        console.log("Tu tarea ha sido añadida");
        console.log('------------------------');

        break
    case "filtrar":
        var estado = process.argv[3];
        if (estado == undefined){
        console.log('--------------------------')
        console.log("Tenés que filtrar por algo");
        console.log('--------------------------');

        } 
        let listaFiltrada = moduloTareas.filtarJSON(estado);
        listaFiltrada.forEach(function(tarea){
            console.log(tarea.titulo + " - " + tarea.estado)
        })
        break  
    case "cambiar":
        var estado = process.argv[3];
        var nuevoEstado = process.argv[4];
        moduloTareas.cambiarEstado(estado, nuevoEstado)
        console.log('--------------------------')
        console.log("Se realizaron todos los cambios");
        console.log('--------------------------');
        break    
        
    case undefined:
        console.log('--------------------------');
        console.log("Escribime un comando porfa");
        console.log('--------------------------');
        break
        
    default:
        console.log('---------------------------');
        console.log("Escribime un comando válido");
        console.log('---------------------------')

}