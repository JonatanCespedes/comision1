let dia = "jueves";
function finDeSemana (dia){
    switch (dia){
        case "viernes":
            console.log("buen finde");
            break;
        case "lunes":
            console.log("buena semana");
            break;
        default:
            console.log("buen dia");
            break;        
    }
}
// Playground
function tengoClases(dia){
    switch(dia){
        case "lunes":
            case "miércoles":
                case "viernes":
                    console.log("tenés clases");
                    break;

    }
}

// Ciclos
// For
//for (let i = 0; i<=10; i+2){
 //   console.log(i)
//}

// do while

let contador = 1
while(contador > 2) {
console.log('Se ejecuta el ciclo while' + contador)
contador++;
}
do {
    console.log('Se ejecuto el ciclo do while cuando contador vale:' + contador)
contador++; 
} while(contador > 2);
