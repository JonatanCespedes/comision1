module.exports = function(sequelize, dataTypes){
    let alias = 'Movies';

    let cols= {
        id:{
            type:dataTypes.INTEGER(10),
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        title:{
            type:dataTypes.STRING(500),
            allowNull:false,
            validate:{
                notNull:{
                    args:true,
                    msg: 'El campo tiene title no puede ser null'
                },
                notEmpty:{
                    args:true,
                    msg:''
                }
            }
        },
        rating:{
            type:dataTypes.DECIMAL(3,1)
        },
        awards:{
            type:dataTypes.INTEGER(10)
        },
        release_date:{
            type:dataTypes.DATE
        },
        length:{
            type:dataTypes.INTEGER(10)
        },
        genre_id:{
            type:dataTypes.INTEGER(10)
        }
    }

    let config = {
        tableName: "movies",
        timestamps:false
    }

    const Movie = sequelize.define(alias, cols, config);

    Movie.associate = modelos=>{
        Movie.belongsTo(modelos.Genres,{
            as:'genre',
            foreignKey:'genre_id'
        })
    }

    return Movie;
}