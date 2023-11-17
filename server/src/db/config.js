const { Sequelize, Model } = require('sequelize');

// TODO - create the new sequelize connection
const db = new Sequelize('sqlite::memory:')
module.exports = {
    db,
    Sequelize
};
