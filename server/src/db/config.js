const { Sequelize, Model } = require('sequelize');
const path = require("path")

// TODO - create the new sequelize connection
const db = new Sequelize({
    dialect: "sqlite",
    storage: path.join(__dirname, "db.sqlite"),
    logging: false
})

module.exports = {
    db,
    Model,
    Sequelize
};
