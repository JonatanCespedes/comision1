// Require de Express
const express = require('Express');

// Require de FS
const fs = require('fs');

// Ejecución de Express
const app = express();

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync(__dirname + '/data/heroes.json', 'utf-8'));

// Ruta Raíz / ➝ Home
app.get('/', function (req, res) {
	res.send('Ni Superman, IronMan o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne yhueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan comoinspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.')
})


// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
app.get('/heroes', (req, res) => {
	res.send(heroes);
	res.end();
});

// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
app.get('/heroes/detalle/:idHeroe', (req, res) => {
	// Acá lo primero será encontrar al héroe que corresponda
	let idHeroe = req.params.idHeroe;
	res.set({'content-type': 'text/plain; charset=utf-8'});
	heroes.forEach(function(heroe) {
		if (heroe.id == idHeroe) {
			//res.send ('Hola, mi nombre es ' + heroe.nombre + ' y soy ' + heroe.profesion)
			res.send(`Hola, mi nombre es ${heroe.nombre} y soy ${heroe.profesion}`)
			res.end()
		} 			
})
res.end('Lo siento, no hemos encontrado el heroe que buscabas')

	});

// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
app.get('/heroes/bio/:id/:ok?', (req, res) => {
	res.set({'content-type': 'text/plain; charset=utf-8'});
	// Acá lo primero será encontrar al héroe que corresponda
	let id = req.params.id;
	let ok = req.params.ok;
	
	heroes.forEach(function(registro){
		if (registro.id == id) {
			if(ok == 'ok'){
				res.write(`
Nombre: ${registro.nombre}
Reseña: ${registro.resenia} `);
				
			}else{
				res.write(registro.nombre + ' dice: Lamento que no desees saber más de mi:(');
				res.end()
			}
		}
	});

	// Si NO se encuentra al héroe se envía un mensaje
	// Si se encuentra al héroe:
		// Se pregunta si vino el parámetro Y el valor esperado y se envía la información
		// Si nó vino el parámetro se envía el mensaje de error
	res.end('No encontramos un heroe para mostrarte su biografía')
});

// Ruta Créditos
app.get('/creditos', (req, res) => {
	res.send('Jonatan Céspedes')
})

// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
})
