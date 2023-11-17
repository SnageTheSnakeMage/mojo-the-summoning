const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

// TODO - define the Attack model
let Attack = sequelize.define("Attack", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    title: DataTypes.STRING,
    mojoCost: DataTypes.INTEGER,
    staminaCost: DataTypes.INTEGER
});

module.exports = {
    Attack
};
