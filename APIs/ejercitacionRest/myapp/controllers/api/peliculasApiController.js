const db = require('../../database/models')

module.exports = {
    listar:(req,res)=>{
        db.Movies.findAll()
        .then((result)=>{
            return res.status(200).json(result)
        })
        .catch((error)=>{
            res.send(error)
        })
    },
    detalles:(req,res)=>{
       db.Movies.findByPk(req.params.id) 
       .then((result)=>{
        return res.status(200).json(result)
       })
    },
    crear:(req,res)=>{
       db.Movies.create({
           title:req.body.title.trim(),
           rating:req.body.rating,
           awards:Number(req.body.awards),
           release_date:req.body.release_date,
           length:Number(req.body.length),
           genre_id:Number(req.body.genre_id)
       })
       .then((result)=>{
           return res.status(200).json(result)
       })
       .catch(error=>{
           res.send(error)
       }) 
    },
    actualizar:(req,res)=>{

    },
    borrar:(req,res)=>{

    }


}