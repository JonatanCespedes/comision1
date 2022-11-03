function reemplazoFastFast(texto, palabra, reemplazo){
    return texto.replace(palabra, reemplazo);
}
//console.log(reemplazoFastFast("Hola, buen día", "buen", "mal"))

function menciona(texto, palabra){
    switch {
        case texto.indexOf(palabra):
            console.log(true);
            break;
        default: 
        console.log(false);
        break;    
    }
}

//console.log(menciona("Hoy aprenderé algo nuevo", "nada"))

let alumnos = [
    {
     "nombre": "Jonatan",
     "apellido": "Cespedes",
     "comision": 1
   },
   {
     "nombre": "Jonathan",
     "apellido": "Rodriguez",
     "comision": 1   
   },
   {
     "nombre": "Tobias",
     "apellido": "Cespedes",
     "comision": 1
   }
 ]
 console.log(typeof alumnos)