const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Deck } = require('./Deck')
const { User } = require('./User')
const { db } = require('../db/config')

// define in global scope
let deck

// clear db and create new user before tests
beforeAll(async () => {
    await db.sync({ force: true })
  //TODO fill in arguments for new deck
    deck = await Deck.create({})
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('Deck', () => {
  it('has the correct properties', async () => {
      expect(deck).toHaveProperty('id')
      expect(deck).toHaveProperty('name')
      expect(deck).toHaveProperty('xp')
  })
    it('has one user', async () => {
        deck.user = await User.create(
            {username: "kimbo"}
        )
        expect(deck.user.username).toBe("kimbo")
    })

  /**
   * Create more tests
   * E.g. check that the username of the created user is actually gandalf
   */
})
