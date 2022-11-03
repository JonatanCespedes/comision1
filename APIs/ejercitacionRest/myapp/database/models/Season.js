module.exports = function(sequelize, dataTypes){
    let alias = 'Seasons';

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
            type:dataTypes.INTEGER(10)
        },
        release_date:{
            type:dataTypes.DATE
        },
        end_date:{
            type:dataTypes.DATE
        },
        serie_id:{
            type:dataTypes.INTEGER(10)
        }
    }

    let config = {
        tableName: "seasons",
        timestamps:true
    }

    const Season = sequelize.define(alias, cols, config);

    return Season;
}