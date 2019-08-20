
module.exports = function (sequelize, DataTypes) {
    var moment = require('moment')
    var Producer = sequelize.define('producer', {
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
        sex: {
            type: DataTypes.ENUM,
            values: [
                'Male',
                'Female',
            ],
            defaultValue: 'male'
        },
        dob: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: { isDate: true },
            get: function () {
                return moment.utc(this.getDataValue('dob')).format('YYYY-MM-DD')
            },
            set: function (val) {
                this.setDataValue('dob', new Date(val))
            }
        },
        biodata: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        }
    }, {
        timestamps: true,
        freezeTableName: true
    });

    Producer.associate = function (db) {
        db.Producer.hasMany(db.Movie,{ foreignKey: "producer_id", sourceKey: "id" });
    }
    return Producer;
}