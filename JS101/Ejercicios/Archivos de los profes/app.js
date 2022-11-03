let calculadora = require('./calculadora');

//console.log(calculadora.dividir(9,0))

let persona = {
    nombre: 'Julian',
    apellido: 'Aquino',
    salioDeSuCasa: true,
    temperatura: 38,
    presentaSintomas: true,
    telefono: 114656686,
    familiaresConvivientes: ['Padre', 'Madre'],
    edad: 25,
    direccion: 'Sucre',
    altura: 4567,
    saludar: function() {
        return 'Hola ' + this.nombre + " !" ;
    },
    diagnostico: function(){
        if(this.presentaSintomas){
            console.log('Quedate en casa!')
        } else {
            console.log('Podes salir!!');
        }
    }
}

/*

9 == "9" true

9 === 9 true
9 === "9" false


*/


// Funcion declarada
function saludar(nombre = 'Desconocido'){
    return 'Hola ' + nombre;
}
// Funcion expresada
let despedir = function(){
    return 'Chau ' + 'Maria';
}

saludar('Pio')
despedir()

// Ejemplo IF
let edad = 19;
let acceso;
// && siempre tiene que dar verdadero en ambas condiciones
// || una de alas condiciones tiene que ser verdadera para que se ejecute el codigo
if(edad < 16){
    acceso = 'Aca o podes etrar';
} else if (edad >= 16 && edad <= 18){
    acceso = 'Algunas cosas permitidas'
} else {
    acceso = 'Permitido';
}

// Eemplo que incluye el uso de funciones declaradas y la utilizacion de los ifs
function evaluarExamen(nota){
    let resultado = '';

    if(nota > 10 || nota < 1){
        return resultado = 'Hubo un error al ingresar la nota';
    }

    if(nota < 4){
        return resultado = 'Muy mal';
    } else if(nota >= 4 && nota <= 6) {
        return resultado = 'Desaprobado, pero te falto un poco'
    } else if(nota > 6 && nota <8){
        return resultado = 'Aprobado'
    } else {
        return resultado = 'Exelente'
    }
}

let nota = 5;


// If ternario

// condicion ? resultado si es verdadero : resultado si es falso

// nota < 7 ? console.log('Desaprobado') : console.log('Aprobado');

// La expresión de arriba es igual a la de abajo!!

// if(nota < 7){
//     console.log('Desaprobado');
// } else {
//     console.log('Aprobado');
// }

// console.log(evaluarExamen(0))



// Mumuki
function retornoDelBooleano(numero){
    if(numero > 0 && numero < 100 && numero != 15){
        return true;
    } else {
        return false;
    }
}

// Switch
// En este ejemplo desarrollamos un switch para evaluar los distintos escenarios para la temperatura de una persona
// Fijense que para la variable temperatura estoy utilizando uno de los datos de el objeto persona

function testeoTemperatura(temperatura){
    switch(temperatura){
        case 36:
            return console.log('Estas bien');
            break;
        case 37:
            return console.log('Cuidate!');
            break;
        case 38:
            return console.log('Llamar para evaluar');
            break;
        case 39:
            return console.log('Enviar testeo');
            break;
        default:
           return console.log('Enaviar ambulancia')
    }
}

testeoTemperatura(persona.temperatura);

//For
for (let i = 0; i < 10; i++) {
    console.log('El valor de la variable i es:' + i)
}

function tablaDel2(){
    for (let i = 0; i < 20; i = i+2) {
        console.log(i)       
    }
}

// clear

// console.log('Salimos de ciclo!')

let contador = 11

while(contador <= 10){
    console.log('Se ejecuto el ciclo while ' + contador)
    contador++;
}

do{
    console.log('Se ejecuto el ciclo do while cuando contador vale:' + contador)
    contador++;
} while(contador < 10);