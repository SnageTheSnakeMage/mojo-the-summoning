const { Sequelize, DataTypes } = require('sequelize');
const { db } = require("../db/config")

// TODO - define the Attack model
let Attack = db.define("Attack", {
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
