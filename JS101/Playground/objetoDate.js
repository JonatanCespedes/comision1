var miFecha = new Date //Primero hay que crear una instancia del objeto Date.

console.log(miFecha);

var diaDeMiFecha = miFecha.getDate() // Creo la variable donde se almacenará lo que devuelve el método getDate (día del mes)

console.log(diaDeMiFecha);

var mesDeMiFecha = miFecha.getMonth()

console.log(mesDeMiFecha); // si agrego + 1 imprime por pantalla el número correcto del mes

var diaSemanaDeMiFecha = miFecha.getDay() // devuelve el día de la semana teniendo en cuenta que parte del día 0 que es el domingo.

console.log(diaSemanaDeMiFecha);

var anioDeMiFecha = miFecha.getFullYear();

console.log(anioDeMiFecha);

var anio=miFecha.getYear(); // getYear cuenta los años desde 1900, por eso se usa el método getFullYear

console.log(anio);


let fecha = new Date();

let anioDeFecha = fecha.setYear(1985)
let mesDeFecha = fecha.setMonth(10)
let diaDeFecha = fecha.setDate(6)

console.log(anioDeFecha);
console.log(mesDeFecha);
console.log(diaDeFecha)
