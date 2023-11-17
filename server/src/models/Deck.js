const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

// TODO - define the Deck model
let Deck = sequelize.define("Deck", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: DataTypes.STRING,
    xp: DataTypes.INTEGER
});

module.exports = {
    Deck
};