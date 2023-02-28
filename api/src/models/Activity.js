const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Activity', {
        id: {
            primaryKey: true,
            allowNull: false,
            type: DataTypes.UUID
        },
        name: {
            type: DataTypes.STRING,
            allowNull:false
        },
        difficulty: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                max: 1,
                min: 5
            }
        },
        duration: {
            type: DataTypes.TIME,
            allowNull: false
        },
        season: {
            type: DataTypes.ENUM('Summer','Autumn','Winter','Spring'),
            allowNull: false,

        }
    })
}