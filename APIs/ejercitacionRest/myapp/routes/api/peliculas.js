var express = require('express');
var router = express.Router();

const peliculasApiController = require('../../controllers/api/peliculasApiController')

/* PELICULAS */
router.get('/movies', peliculasApiController.listar);

router.get('/movies/:id', peliculasApiController.detalles);

router.post('/movies/crear', peliculasApiController.crear)

module.exports = router;
