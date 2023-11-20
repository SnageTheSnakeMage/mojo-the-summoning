const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Card } = require('./Card')
const { db }  = require('../db/config')

// define in global scope
let card

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
    card = await Card.create({ name: "Bulk Brogan", mojo: 10, stamina: 5 })
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('Card', () => {
    it('has the correct properites', async () => {
        expect(card).toHaveProperty('id')
        expect(card).toHaveProperty('name')
        expect(card).toHaveProperty('mojo')
        expect(card).toHaveProperty('stamina')
        expect(card).toHaveProperty('imgUrl')
    })

  /**
   * Create more tests
   * E.g. check that the username of the created user is actually gandalf
   */
})
