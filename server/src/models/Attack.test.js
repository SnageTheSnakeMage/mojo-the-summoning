const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Attack } = require('./Attack')
const { db } = require('../db/config')

// define in global scope
let attack

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
    attack = await Attack.create({})
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

  /**
   * Create more tests
   * E.g. check that the username of the created user is actually gandalf
   */
})
