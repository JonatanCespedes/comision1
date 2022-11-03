let fs = require('fs')

let moduloTareas = {
    archivo: './tareas.json',
    leerJSON: function() {
        let listaDeTareas = fs.readFileSync(this.archivo, 'utf-8');
        let tareas = JSON.parse(listaDeTareas);
        return tareas
    },
    escribirJSON: function(nuevaTarea) {
        let tareasAnteriores = this.leerJSON();
        tareasAnteriores.push(nuevaTarea);
        let tareasActualizadas = JSON.stringify(tareasAnteriores);
        fs.writeFileSync(this.archivo, tareasActualizadas, 'utf-8')
    },
    filtarJSON: function(estado){
        let listaDeTareas = this.leerJSON();
        let listaFiltrada = listaDeTareas.filter(function(tarea){
            return tarea.estado == estado
        })
        return listaFiltrada
    },
    cambiarEstado:function(estado, nuevoEstado){
        let listaDeTareas = this.leerJSON();

        let Tarea = function(titulo, estado){
            this.titulo = titulo, 
            this.estado = estado
        }
        
        let listaModificada = listaDeTareas.map(function(tarea){
            if(tarea.estado == estado){
                tarea.estado = nuevoEstado
            }
            return new Tarea(tarea.titulo, tarea.estado)
        })
        let tareasActualizadas = JSON.stringify(listaModificada);
        fs.writeFileSync(this.archivo, tareasActualizadas, 'utf-8')
    }

}
    



module.exports = moduloTareas;