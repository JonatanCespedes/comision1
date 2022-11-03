const fs = require('fs');

const heroesJSON = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

const heroes = {
    index: function (req, res){
        res.send(heroesJSON)
    },
    detalle: function(req, res){
        res.set({'content-type': 'text/plain; charset=utf-8'});
        let id= req.params.id
        heroesJSON.forEach(elemento => {
            if(elemento.id == id){
                res.send('Hola, mi nombre es ' + elemento.nombre + 'y soy ' + elemento.profesion)
            }
        });
        res.end('Lo siento, no hemos encontrado al heroe que buscabas');
    },
    bio: function(req, res){
        res.set({'content-type': 'text/plain; charset=utf-8'});
        let id=req.params.id;
        let ok = req.params.ok;

        heroesJSON.forEach(elemento =>{
            if(elemento.id ==id) {
                if(ok == 'ok'){
                    res.write('Nombre:' + elemento.nombre + 'Reseña: ' + elemento.resenia);
                }else{
                    res.write(elemento.nombre + 'dice: Lamento que no hayas querido saber más de mi.')
                    res.end()
                }
            }
        });
        res.end('No encontramos un heroe para mostrarte su biografía')
    }

      
}

module.exports = heroes