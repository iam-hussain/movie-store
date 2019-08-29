module.exports = function (sequelize, DataTypes) {
    var ActorMovie = sequelize.define('actormovie', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
    }, {
        timestamps: true,
        freezeTableName: true
    });

    ActorMovie.associate = function (db) {
        db.Actor.belongsToMany(db.Movie, {
            as: 'Movie',
            through: db.ActorMovie,
            foreignKey: 'actor_id'
        });
        db.Movie.belongsToMany(db.Actor, {
            as: 'Actor',
            through: db.ActorMovie,
            foreignKey: 'movie_id'
        });
    }

    return ActorMovie;
}