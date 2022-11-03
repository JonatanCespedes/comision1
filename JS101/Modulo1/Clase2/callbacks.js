let sumar = (n1, n2) => n1 + n2;
let restar = (n1, n2) => n1 - n2;
let multiplicar = (n1, n2) => n1 * n2;
let dividr = (n1, n2) => n1 / n2;

function calcular(n1, n2, operacion){
    return operacion(n1, n2);
}
console.log(calcular(10, 5, multiplicar));

//setTimeOut

setTimeout(function(){
    console.log("Hola")
}, 3000);
