/*let numeros = [6,9,100,5 ]
function encontreUn5(numeros){
    let i = 0
    do{
        if(numeros[ i ] == 5){
            return console.log("Se encontró un 5!");
        }

        i++;
        console.log(i);
    }while(i <=numeros.length)
}

encontreUn5(numeros)*/

function tablaDeMultiplicar(numero) {
	let i =1;
  while(i<=10){
      console.log(numero + " * " + i + " = " + numero * i)
      i++
  }
}
tablaDeMultiplicar(7)