let calculadora = require('./calculator')
let readlineSync = require('readline-sync'),
    operaciones = ['SUMAR', 'RESTAR', 'MULTIPLICAR', 'DIVIDIR'],
    index = readlineSync.keyInSelect(operaciones, 'Que quiere hacer?');

let datos = readlineSync.question(`Ingrese los numeros a ${operaciones[index]}: `);

datos = datos.split(' ');
datos = datos.filter(function(elemento){
    return elemento != ''
})

//console.log(datos)

let numeros = datos.map(function(elemento){
    return parseInt(elemento)
})
//console.log(numeros)

switch(index){
    case 0:
        calculadora.sumar(numeros)
        break
    case 1:
        calculadora.restar(numeros)
        break
    case 2:
        calculadora.multiplicar(numeros)
        break
    case 3:
        calculadora.dividir(numeros)
        break
    case -1:
        console.log("Gracias por usar CALCULATOR");
        break                
}