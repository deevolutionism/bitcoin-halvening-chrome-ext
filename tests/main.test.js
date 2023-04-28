import { expect, test } from 'vitest'
import { 
  nHalvings, 
  blocksUntilNextHalvening, 
  dateOfNextHalvening, 
  subsidy
} from '../src/utils'
import { HALVING_INTERVAL, INIT_SUBSIDY } from '../src/stores'

test('subsidy function', () => {
  expect(subsidy(0, INIT_SUBSIDY)).toBe('5000000000');
  expect(subsidy(1, INIT_SUBSIDY)).toBe('2500000000');
  expect(subsidy(2, INIT_SUBSIDY)).toBe('1250000000');
  expect(subsidy(3, INIT_SUBSIDY)).toBe('625000000');
  expect(subsidy(4, INIT_SUBSIDY)).toBe('312500000');
});

test('nHalvings', () => {
  expect(nHalvings(1, HALVING_INTERVAL)).toBe(0);
  expect(nHalvings(210000, HALVING_INTERVAL)).toBe(0);
  expect(nHalvings(210001, HALVING_INTERVAL)).toBe(1);
});

test('blocksUntilNextHalvening', () => {
  expect(blocksUntilNextHalvening(1, HALVING_INTERVAL)).toBe(209999);
});
