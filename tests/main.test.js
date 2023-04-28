import { assert, it } from 'vitest'
import { nHalvings, blocksUntilNextHalvening, dateOfNextHalvening, currentSubsidy, nextSubsidy } from '../src/utils'
import { HALVING_INTERVAL, COIN } from '../constants'

describe('nHalvings', () => {
  it('should return 0 for blockHeight less than 210000', () => {
    assert.equal(nHalvings(1, HALVING_INTERVAL), 0)
  })
  it('should return 0 for blockHeight 210000', () => {
    assert.equal(nHalvings(210000, HALVING_INTERVAL), 0)
  })  
  it('should return 1 for blockHeight 210001', () => {
    assert.equal(nHalvings(210001, HALVING_INTERVAL), 1)
  })
})

describe('blocksUntilNextHalvening', () => {
  it('should return 209999 for blockHeight 1', () => {
    assert.equal(blocksUntilNextHalvening(1, HALVING_INTERVAL), 209999)
  })
})

describe('currentSubsidy', () => {
  it('should return 500000000 for blockHeight 1', () => {
    assert.equal(currentSubsidy(1, HALVING_INTERVAL, COIN), COIN)
  })
  it('should return 0 for blockHeight 210000', () => {
    assert.equal(currentSubsidy(HALVING_INTERVAL+1, HALVING_INTERVAL, COIN), COIN >> 1)
  })
})

describe('nextSubsidy', () => {
  it('should return 250000000 for blockHeight 210000', () => {
    assert.equal(nextSubsidy(210000, HALVING_INTERVAL, COIN), COIN >> 1)
  })
  it('should return 0 for blockHeight 6720000', () => {
    assert.equal(nextSubsidy(HALVING_INTERVAL * 32, HALVING_INTERVAL, COIN), 0)
  })
})

// describe('nextSubsidy', () => {
//   it('should return 250000000 for blockHeight 210000', () => {
//     assert.equal(nextSubsidy(HALVING_INTERVAL, HALVING_INTERVAL), COIN >> 1)
//   })
// })
