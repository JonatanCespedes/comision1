const express = require ('express')

const app = express();

const productosController = {
    index: function(req,res){
        res.end('Pagina de inicio de tus productos')
    },
    listado: function(req,res){
        res.end('Éste en el listado de nuestros productos')  
    },
    detalle: function(req,res){
        res.end('Detalle de producto' + req.params.id)
    }
}

module.exports = productosController;