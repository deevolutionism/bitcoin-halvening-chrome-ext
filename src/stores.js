import { writable, readable, derived } from 'svelte/store';
import BN from 'bn.js';
import { 
  nHalvings, 
  blocksUntilNextHalvening, 
  timeOfNextHalvening, 
  subsidy
} from './utils';

export const HALVING_INTERVAL = 210000;
/**
 * The initial subsidy per block.
 * @type {BN}
 */
export const INIT_SUBSIDY = new BN('5000000000');
//787400
export const blockHeight = writable(10);


export const blocksRemaining = derived(
  blockHeight,
  $blockHeight => {
    return blocksUntilNextHalvening(nHalvings($blockHeight, HALVING_INTERVAL), HALVING_INTERVAL)
  }
)

export const halvenings = derived(
  blockHeight,
  $blockHeight => {
    return nHalvings($blockHeight, HALVING_INTERVAL)
  }
)

export const blockSubsidy = derived(
  halvenings, 
  $halvenings => {
    return subsidy($halvenings, INIT_SUBSIDY)
  }
)

export const nextSubsidy = derived(
  halvenings,
  $halvings => {
    return subsidy($halvings + 1, INIT_SUBSIDY)
  }
)

export const daysUntilNextHalvening = derived(blockHeight, $blockHeight => {
  const milliseconds = timeOfNextHalvening($blockHeight, HALVING_INTERVAL)
  const days = milliseconds / (1000 * 60 * 60 * 24);
  return days
})
