let numeros = [1, 2, 3, 4, 5];

let peliculas = ['Zodiac', '7 Pecados Capitales', 'Perdida', 'Zoolander'];

let collage = ['Programación', 2020, true];

let autos = [
    {modelo: 'Gol', marca: 'VW'},
    {modelo: 'Golf', marca: 'VW'}
]
//peliculas.push('El curioso caso de Benjamin Button')//Agrega

//let peliculasEliminadas = peliculas.pop()//Elimina

//let peliculaEliminada = pelicula.shift()

//peliculas.unshift('Red Social','Mindhunter')

/*let autoNuevo = {
    modelo: 'Bora', 
    marca: 'VW'
}

autos.push(autoNuevo)

console.log(autos[1].modelo)*/

//let peliculasString = peliculas.join(' - ')

//console.log(peliculasString)
//Queremos agarrar el array de numeros y modificarlos para obtener uno que sume 1 a cada posicion
//let numerosMasUno = [];
//for(let i = 0; i<numeros.length; i++){
//    let numeroASumar = numeros[i] + 3;
 //   numerosMasUno.push(numeroASumar);
//}

//console.log(numerosMasUno)
//let numerosMasTres = numeros.map(function(numero){
//    return numero + 3;
//})

/*let arrayFiltrado = numeros.filter(function(numero){
    return numero >= 3;
})

let peliculasConZ = peliculas.filter(function(pelicula){
    return pelicula[0] == 'Z' 
})*/

//console.log(peliculasConZ)

//let multiplicacion = numeros.reduce(function(acumulador, numero){
//    return acumulador * numero;
//})

//console.log(multiplicacion)

/*peliculas.forEach(function(pelicula){
    console.log(pelicula)
})

//for(let i = 0; i<peliculas.length; i++){
//    console.log(peliculas[i]);
//}
console.log('Fin de la iteracion')

    console.log(pelicula);
    
}*/

let director = {
    nombre: 'David',
    apellido: 'Fincher',
    edad: 57
}
for(dato in director){
    console.log(dato + ': ' + director[dato]);
    
}