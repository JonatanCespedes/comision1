function sumar3 (a,b,c) {
    if (c){
        return a+b+c;

    }else if (!a && !b && !c){
        return "no ingreso ningun numero";
    } else {
        return a + b + "olvido numero";
    }
}
console.log (sumar3(2, 3, ))