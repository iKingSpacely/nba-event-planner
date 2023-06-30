const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Search extends Model { };

Search.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    team_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    game_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id',
        },
    },
});

module.exports = Search;