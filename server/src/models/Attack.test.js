const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Attack } = require('./Attack')
const { Card } = require('./Card')
const { db } = require('../db/config')
const index = require('./index')

// define in global scope
let attack

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
    attack = await Attack.create({ title: "Piledriver", mojoCost: 2, staminaCost: 1 })
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('Attack', () => {
  it('has the correct properties', async () => {
      expect(attack).toHaveProperty('id')
      expect(attack).toHaveProperty('title')
      expect(attack).toHaveProperty('mojoCost')
      expect(attack).toHaveProperty('staminaCost')
  })
    it('can have multiple cards', async () => {
        attack.cards = await Card.bulkCreate([
            { title: "huge", mojo: 10, stamina: 0 },
            { title: "aver", mojo: 5, stamina: 5 },
            {title:"tinny", mojo: 1, stamina: 2}
        ])
        expect(attack.cards.length).toBe(3)
    })
  /**
   * Create more tests
   * E.g. check that the username of the created user is actually gandalf
   */
})
