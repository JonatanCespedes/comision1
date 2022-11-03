//CICLO FOR
//Los ciclos nos permiten repetir instrucciones de manera sensilla. Podemos hacerlo una determinada cantidad de veces o mientras se cumpla una condición.

/*
for (inicio; condición; modificador){
    //codigo que se ejecutará en cada repetición
}
*/
for (let vuelta = 1; vuelta <= 5; vuelta++){
    console.log('Dando la vuelta número ' + vuelta);
}
/*let letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
for (let index = 0; index < letras.length; index++) {
    console.log('Las letras del abecedario son ' + index.valueOf(letras.map))
    
}*/

/*La función llamarse loro y debe recibir como parámetro el texto y repetirlo 5 veces por consola.*/

function loro(texto){
    for (let i = 0; i < 5; i++) {
        console.log(texto) ;   
    }
}
console.log(loro('Hola'))

/*    En este ejercicio deberas hacer dentro de la función noParesDeContarImparesHasta un for que cuente de 0 hasta un número. La función deberá retornar cuántos números impares se contaron hasta llegar al número.*/ 

function noParesDeContarImparesHasta(numero){ //creo la función y asigno un parámetro
    let contador = 0 //declaro la variable contador con valor 0
    for (let index = 0; index < numero; index++) { // creo el iterador que partirá desde la posicion 0 incrementando las posiciones hasta el numero que se ponga cómo parámetro.
        if(index%2!=0){ // creo el condicional if, en el cual se indica que si la diferencia(resto) de el numero de la posición que se está iterando dividido 2 NO es igual a 0, el contador se incrementa en 1. 
            contador++
        }
    }
    return contador // Cuando se termine el ciclo retorna el valor guardado en la variable contador.
}
console.log(noParesDeContarImparesHasta(1575));
