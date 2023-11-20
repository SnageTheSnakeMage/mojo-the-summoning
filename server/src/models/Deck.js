const { Sequelize, DataTypes } = require('sequelize');
const { db } = require("../db/config")

// TODO - define the Deck model
let Deck = db.define("Deck", {
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