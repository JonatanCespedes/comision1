
let nombre = 'Maria';

// Funcion declarada
function saludar(nombre){
    return "Hola" + nombre;
}
// Funcion expresada
let despedir = function(nombre){
    return "Chau" + nombre;
}
console.log(saludar("Jonatan"))
console.log(despedir("Jonatan"))

//If (condicion)
//Else if (nueva condición)
// && siempre tiene que dar verdadero en ambas condiciones
// || 

let edad = 10;
let acceso = ''
if(edad < 16){
    acceso = 'Aca no podes entrar'
} else if (edad >=10 && edad <=13) {
    acceso = 'Algunas cosas permitidas'
}
 else {
    acceso = 'permitido'
}
console.log(acceso)

// if ternario
// condicón ? resultado si es verdadero : resultado si es falso
let nota = 8;
nota <= 7 ? console.log('desaprobado') : console.log('Aprobado');

//invocar una funcion

let hacerSushi = function(cantidad){
    return 'sushi '.repeat(cantidad)
}
console.log(hacerSushi(8))

//Scope

let lenguaje =  "javascript"
function lenguaje1(variable){
    if (variable === "javascript"){
        return "Estoy aprendiendo";
    } else (variable !=="javascript")
    {
        return "Lo aprenderé mas adelante";
    }
} 
console.log(lenguaje1("javascript"))