const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Results extends Model { };

Results.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    day: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    date_time: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    away_team: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    home_team: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    away_score: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    home_score: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id',
        },
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'results',
  }
);

module.exports = Results;