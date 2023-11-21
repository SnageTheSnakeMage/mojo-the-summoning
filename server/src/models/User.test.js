const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { User } = require('./User.js')
const { Deck } = require('./Deck.js')
const { db } = require('../db/config.js')
const index = require('./index.js')

// define in global scope
let user
// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
    user = await User.create({ username: 'gandalf' })
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('User', () => {
  it('has correct properties', async () => {
      expect(user).toHaveProperty('id')
      expect(user).toHaveProperty('username')
  })
  it('has 1 deck', async () => {
      user.deck = await Deck.create({ name: "lala", xp: 5 })
      expect(user.deck.name).toBe("lala")
  })

  /**
   * Create more tests
   * E.g. check that the username of the created user is actually gandalf
   * TESTS TODO:
   * Associations (Deck)
   * Creation & Deletion is possible
   * 
   */
})
