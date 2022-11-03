module.exports = function(sequelize, dataTypes){
    let alias = 'Actor_episodes';

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
        episode_id:{
            type:dataTypes.INTEGER(10),
            allowNull:false
        }
        
    }

    let config = {
        tableName: "actor_episode",
        timestamps:true
    }

    const Actor_episode = sequelize.define(alias, cols, config);

    

    return Actor_episode;
}