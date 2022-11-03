/**let heroes = require('./superheroes');
let nombre = heroes.nombre;
console.log("Nuestros super héroes se llaman " + heroes[1, nombre]);*/


let http = require('http');

http.createServer(function(req, res){

    res.writeHead(200,  {'Content-Type' : 'text/plain'});
    
    switch(req.url){
        case '/':
            res.end("Bienvenido a mi homepage");
            break;
        case '/productos':
            res.end("Estos son mis productos");
            break;
        default:
            res.end("Error");
            break    
    }

    res.end("Terminado")

}).listen(3030, 'localhost');
