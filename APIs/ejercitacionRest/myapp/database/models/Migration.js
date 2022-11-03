module.exports = function(sequelize, dataTypes){
    let alias = 'Migrations';

    let cols= {
        id:{
            type:dataTypes.INTEGER(10),
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        migration:{
            type:dataTypes.STRING(255)
        },
        batch:{
            type:dataTypes.INTEGER(11)
        }
    }

    let config = {
        tableName: "migrations",
        timestamps:true
    }

    const Migration = sequelize.define(alias, cols, config);

    

    return Migration;
}