const { DataTypes } = require('sequelize');
const { db } = require("../db/config")

// TODO - define the User model
let User = db.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    username: DataTypes.STRING
});

module.exports = {
    User
};
