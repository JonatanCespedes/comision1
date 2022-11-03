 let sumar = (n1, n2) => n1 + n2;
 let restar = (n1, n2) => n1 - n2;
 let multiplicar = (n1, n2) => n1 * n2;
 let dividir = (n1, n2) => n1 / n2

 let calculadora = (n1, n2, operacion) =>operacion (n1, n2);
 console.log(calculadora(8, 8, multiplicar))

/*let doble = numero => numero * 2;
let triple = numero => numero * 3;
let apply = (numero, operacion) => operacion(numero)

//console.log(apply(8, triple))*/

function doble(numero){
    return numero * 2;}

function triple(numero) {
  return numero * 3;  
} 

function apply(numero, operacion){
    return operacion(numero)
}

console.log(apply(8, doble))

function agregarHttp(url) {
    return "http://" + url;
}
console.log(agregarHttp("jonisch.com"))

function procesar(url1, agregarHttp){
   return agregarHttp + [url1];
}
console.log(procesar("www.google.com", "www.yahoo.com"))