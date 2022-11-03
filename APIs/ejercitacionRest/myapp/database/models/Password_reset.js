module.exports = function(sequelize, dataTypes){
    let alias = 'Password_resets';

    let cols= {
        email:{
            type:dataTypes.STRING(255)
        },
        token:{
            type:dataTypes.STRING(255)
        }

    }

    let config = {
        tableName: "password_resets",
        timestamps:true
    }

    const Password_resets = sequelize.define(alias, cols, config);

    

    return Password_resets;
}