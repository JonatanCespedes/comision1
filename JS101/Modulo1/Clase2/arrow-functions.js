let laMitad = numero => numero / 2;

console.log(laMitad(10));

let dividir = (numeroA, numeroB) => numeroA / numeroB;

console.log(dividir(20, 7));

let tengoQueIraTrabajar = dia => {
    if(dia == 'Sábado' || dia == 'Domingo'){
        return 'No tenes que trabajar';
    }else{
        return 'Si, Jonatan, tenés que ir a trabajar';
    }
}

console.log(tengoQueIraTrabajar('Sábado'));

// Ejercicios de Playground

function dameCinco() {
    return [1,2,3,4,5];
}
console.log(dameCinco());

let dameCincoa = () => [ 1, 2, 3, 4, 5];

console.log(dameCincoa());