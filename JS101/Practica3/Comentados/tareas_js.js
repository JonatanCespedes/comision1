
let fs = require('fs'); //requiero el modulo nativo de node 'fs' (file system) el cual permite trabajar con archivos
let moduloTareas = { //creo un objeto literal que será mi modulo a implementar
    archivo:'./tareas.json', //creo la primera propiedad 'archivo' que contiene la ruta al archivo json sobre el cual voy a trabjar
    leerJSON:function(){ //creo el método leerJSON
        let listaDeTareas = fs.readFileSync(this.archivo,'utf-8'); //a la variable listaDeTareas le asingo el contenido del archivo json, leyendo el mismo por medio del método readFileSync de fs
        let tareas = JSON.parse(listaDeTareas); //a tareas le asigno el json 'parseado' usando el método .parse() del objeto JSON de JS
        return tareas //el metodo leerJSON me devuelve el json parseado
    },
    escribirJSON: function(nuevaTarea){ //creo el método escribirJSON
        let tareasAnteriores = this.leerJSON(); //por medio del método leerJSON() asgino a la variable el json parseado
        tareasAnteriores.push(nuevaTarea) //agrego el nuevo elemento que viene como argumento 'nuevaTarea' al fina del json parseado
        let tareasActualizadas = JSON.stringify(tareasAnteriores); //convierto a json el array de objetos (json parseado) a formato json usando el método stringify del objeto JSON de JS
        fs.writeFileSync(this.archivo, tareasActualizadas, 'utf-8') //usando el método writeFileSync del modulo fs escribo el json pasandole tres parametros: (1) el archivo que quiero escribir (2) el contenido, y (3) la codificación de caracteres
        console.log ("Tu tarea ha sido añadida"); //muestro por consola que la tarea fue añadida
    }
}
module.exports = moduloTareas; //como ultima linea exporto el moduloTaras para ser usado cada vez que se requiera