const express = require ('express')

const app = express()

const rutasProductos = require('./routes/productos')
const rutasUsuarios = require('./routes/usuarios')


app.listen(3000, () => {console.log('El servidor está levantado en el puerto 3000')})

app.get('/', (req, res) => {
    res.send('Bienvenidos a mi primer sitio en Express!')
})

app.get('/contactos', (req, res) => {
    res.send('Bienvenidos a nuestro punto de contacto')
})

app.use('/productos', rutasProductos);
app.use('/usuarios', rutasUsuarios)