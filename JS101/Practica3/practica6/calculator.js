let calculadora = {
    sumar:function(numeros){
        let resultado = numeros.reduce(function(acum, num){
            return acum + num
        })
        return console.log(resultado)
    },
    restar:function(numeros){
        let resultado = numeros.reduce(function(acum, num){
            return acum - num
        })
        return console.log(resultado)
    },
    multiplicar:function(numeros){
        let resultado = numeros.reduce(function(acum, num){
            return acum * num
        })
        return console.log(resultado)   
    },
    dividir:function(numeros){
        let resultado = numeros.reduce(function(acum, num){
            return acum / num
        })
        return console.log(resultado)
    }         
}

module.exports = calculadora;