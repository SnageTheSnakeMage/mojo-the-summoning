const { Sequelize, DataTypes } = require('sequelize');
const { db } = require("../db/config")

// TODO - define the Card model
let Card = db.define("Card", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: DataTypes.STRING,
    mojo: DataTypes.INTEGER,
    stamina: DataTypes.INTEGER,
    imgUrl: DataTypes.STRING

});

module.exports = {
    Card
};