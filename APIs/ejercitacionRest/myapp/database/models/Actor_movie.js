module.exports = function(sequelize, dataTypes){
    let alias = 'Actor_movies';

    let cols= {
        id:{
            type:dataTypes.INTEGER(10),
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        actor_id:{
            type:dataTypes.INTEGER(10),
            allowNull:false
        },
        movie_id:{
            type:dataTypes.INTEGER(10),
            allowNull:false
        }
        
    }

    let config = {
        tableName: "actor_movie",
        timestamps:true
    }

    const Actor_movie = sequelize.define(alias, cols, config);

    

    return Actor_movie;
}