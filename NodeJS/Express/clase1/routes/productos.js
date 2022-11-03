const express = require('express');

const router = express.Router();

const productosController = require('../controllers/productosController')

router.get('/', productosController.index)

router.get('/listado', productosController.listado)

router.get('/detalle/:id', productosController.detalle)


module.exports = router;