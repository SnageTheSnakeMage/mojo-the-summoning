const { User } = require('./User')
const { Card } = require('./Card')
const { Deck } = require('./Deck')
const { Attack } = require('./Attack')
// import the rest of your models above

//set up the associations here
User.hasOne(Deck)
Deck.belongsTo(User)

Deck.hasMany(Card)
Card.belongsTo(Deck)

Card.belongsToMany(Attack, { through: 'CardAttacks' })
Attack.belongsToMany(Card, { through: 'CardAttacks' })

console.log("HERE!! set up relations")
// and then export them all below
module.exports = { User, Card, Deck, Attack }
