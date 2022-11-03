module.exports = function(sequelize, dataTypes){
    let alias = 'Series';

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
        release_date:{
            type:dataTypes.DATE
        },
        end_date:{
            type:dataTypes.DATE
        },
        genre_id:{
            type:dataTypes.INTEGER(10)
        }
    }

    let config = {
        tableName: "series",
        timestamps:true
    }

    const Serie = sequelize.define(alias, cols, config);

    return Serie;
}