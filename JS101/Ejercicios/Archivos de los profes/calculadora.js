/* let calculadora = {
    sumar: function (numeroA, numeroB){
        return numeroA + numeroB;
    },
    restar: function (numeroA, numeroB){
        return numeroA - numeroB;
    },
    multiplicar: function (numeroA, numeroB){
        return numeroA * numeroB;
    },
    dividir: function(numeroA, numeroB){
        if(numeroA != 0 && numeroB != 0){
            return numeroA/numeroB;
        } else {
            return "Error :/"
        }
    }
}

module.exports = calculadora; */
let calculadora = {
    sum : (n1, n2) => {
        return (n1+n2)
    },
    res : (n1, n2) => {
        return (n1-n2)
    },
    div : (n1, n2) => {
         if (n2 !== 0){
            return (n1/n2)
         }
         else {
            console.error("No se puede dividir x 0");
         }
    },
    mul : (n1, n2) => {
        return (n1*n2)
    }
}
console.log(calculadora.div(0,45));

