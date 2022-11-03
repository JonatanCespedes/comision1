module.exports = function(sequelize, dataTypes){
    let alias = 'Episodes';

    let cols= {
        id:{
            type:dataTypes.INTEGER(10),
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        title:{
            type:dataTypes.STRING(500) 
        },
        number:{
            type:dataTypes.INTEGER(10),
        },
        release_date:{
            type:dataTypes.DATE
        },
        rating:{
            type:dataTypes.DECIMAL(3,1)
        },
        season_id:{
            type:dataTypes.INTEGER(10)
        }
    }

    let config = {
        tableName: "episodes",
        timestamps:true
    }

    const Episode = sequelize.define(alias, cols, config);

    

    return Episode;
}