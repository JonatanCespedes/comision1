var tenista = {
    nombre: 'Roger',
    apellido: 'Federer',
    edad: 38,
    // Método saludar
    saludar: function() {
        return "¡Hola! Mi nombre es Roger";
    }
} 


 var tenista = {
    nombre: 'Roger',
    apellido: 'Federer',
    edad: 38,
    saludar: function() {
        // Accedemos a la propiedad "nombre" de ESTE objeto con la palabra reservada THIS
        return "¡Hola! Mi nombre es " + this.nombre;
    }
}
console.log(saludar);