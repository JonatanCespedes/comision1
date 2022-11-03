/*let peliculas1 = ['Titanic', 'Loco por Mary', 'La máscara']
let peliculas2 = ['El día de la Bestia', 'El extraño mundo de Jack'];
let peliculasTotales = [...peliculas1, ...peliculas2];
console.log(peliculasTotales);

let datosPersonales = {
    nacimiento: new Date(1985, 11, 06),
    pais: 'Argentina',
    provincia: 'Buenos Aires'
}
let persona = {
    nombre: 'Jonatan',
    apellido: 'Céspedes'
}
let usuario = {...datosPersonales, ...persona}
console.log(usuario);*/

//Rest
function sumarTodo(...num){
    let resultado = num.reduce(function(acum, numero){
        return acum += numero
    })
    return resultado
}
console.log(sumarTodo(1, 3, 6, 7, 90))