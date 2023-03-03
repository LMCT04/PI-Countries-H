const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('activity', {
        
        name: {
            type: DataTypes.STRING,
            allowNull:false
        },
        difficulty: {
            type: DataTypes.ENUM('1', '2', '3', '4', '5'),
            allowNull:false,
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                min: 1,
                max: 24,
            }
        },
        season: {
            type: DataTypes.ENUM('Summer','Autumn','Winter','Spring'),
            allowNull: false,

        }
    })
}