import { writable, readable, derived } from 'svelte/store';
import { currentSubsidy, nHalvings, blocksUntilNextHalvening, timeOfNextHalvening, nextSubsidy } from './utils';

export const HALVING_INTERVAL = 210000;
export const COIN = 100000000;
export const INIT_SUBSIDY = COIN * 50
//787400
export const blockHeight = writable(10);

export const blockReward = derived(
  blockHeight, 
  $blockHeight => {
    return currentSubsidy($blockHeight, HALVING_INTERVAL, INIT_SUBSIDY)
  }
)

export const blocksRemaining = derived(
  blockHeight,
  $blockHeight => {
    return blocksUntilNextHalvening($blockHeight, HALVING_INTERVAL)
  }
)

export const nextSub = derived(
  blockHeight,
  $blockHeight => {
    return nextSubsidy($blockHeight, HALVING_INTERVAL, INIT_SUBSIDY)
  }
)

export const halvenings = derived(
  blockHeight,
  $blockHeight => {
    return nHalvings($blockHeight, HALVING_INTERVAL)
  }
)

export const daysUntilNextHalvening = derived(blockHeight, $blockHeight => {
  const milliseconds = timeOfNextHalvening($blockHeight)
  const days = milliseconds / (1000 * 60 * 60 * 24);
  return days
})
