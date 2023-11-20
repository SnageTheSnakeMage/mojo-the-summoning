const { User } = require('./User')
const { Card } = require('./Card')
const { Deck } = require('./Deck')
const { Attack } = require('./Attack')
// import the rest of your models above

//set up the associations here
User.hasOne(Deck)
Deck.belongsTo(User)
Deck.hasMany(Cards)
Card.belongsTo(Deck)
Card.hasMany(Attack, { through: 'CardAttacks' })
Attack.hasMany(Card, { through: 'CardAttacks' })


// and then export them all below
module.exports = { User, Card, Deck, Attack }
