module.exports = function(sequelize, dataTypes){
    let alias = 'Genres';

    let cols= {
        id:{
            type:dataTypes.INTEGER(10),
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        name:{
            type:dataTypes.STRING(100) 
        },
        rating:{
            type:dataTypes.INTEGER(10)
        },
        active:{
            type:dataTypes.INTEGER(1)
        }
    }

    let config = {
        tableName: "genres",
        timestamps:true
    }

    const Genre = sequelize.define(alias, cols, config);

    Genre.associate = modelos=>{
        Genre.hasMany(modelos.Movies,{
            as:'movie',
            foreignKey:'genre_id'
        })
    }

    return Genre;
}