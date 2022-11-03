
let celulares = [
    {
        nombre: 'Motorola Moto E6 Plus',
        precio: 14999
    },
    {
        nombre: 'Motorola Moto G7',
        precio: 19999
    },
    {
        nombre: 'Alcatel 5033A',
        precio: 6999
    },
    {
        nombre: 'Samsung Galaxy A50',
        precio: 33499
    }
];


   let prueba = function(valor){
       let celusFiltrados = []
       celulares.forEach(element => {
        if(element.precio > valor){
            celusFiltrados.push(element.precio)   
        }
        return celusFiltrados.nombre
     })
    }
      
       
    console.log(prueba(10068))
