
module.exports = function (sequelize, DataTypes) {
    var moment = require('moment')
    var Actor = sequelize.define('actor', {
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
                'male',
                'female',
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

    Actor.associate = function (db) {
    }
    return Actor;
}