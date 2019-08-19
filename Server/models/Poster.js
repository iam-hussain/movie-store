module.exports = function (sequelize, DataTypes) {
    var Poster = sequelize.define('poster', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        file: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        path: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        }
    }, {
        timestamps: true,
        freezeTableName: true
    });

    Poster.associate = function (db) {
         db.Poster.belongsTo(db.Movie, { foreignKey: "poster_id", sourceKey: "id" });
    }
    return Poster;
}