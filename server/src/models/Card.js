const { DataTypes } = require('sequelize');
const { Sequelize, sequelize } = require('../db/config');

// TODO - define the Card model
let Card = sequelize.define("Card", {


});

module.exports = {
    Card
};