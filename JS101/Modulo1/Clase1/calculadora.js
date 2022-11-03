let calculadora = {
sumar : function (numA, numB){
    return numA + numB
},
restar : function (numA, numB){
    return numA - numB
},
multiplicar : function (numA, numB){
    return numA * numB
},
dividir : function (numA, numB){
    if(numA != 0 && numB != 0){
        return numA / numB
    }else {
        let mensaje = "ERROR DE DIVISION POR CERO";
        return mensaje
    }
}
}

module.exports = calculadora;

/*let persona = {
    nombre : "Jonatan",
    apellido : "Cespedes",
    nombreCompleto : function (nombre, apellido){
        return this.nombre + " " + persona.apellido
    }
}
console.log(persona.nombreCompleto());*/