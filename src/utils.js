import BN from 'bn.js';
/**
 * Calculates the number of blocks remaining until the next halving event for a given block height and halving interval.
 *
 * @param {number} blockHeight - The height of the current block.
 * @param {number} halvingInterval - The number of blocks between halvings.
 * @returns {number} The number of blocks remaining until the next halving event.
 */
export const blocksRemaining = (blockHeight, halvingInterval) => {
  const nHalvings = Math.floor(blockHeight % halvingInterval)
  const nextHalving = halvingInterval * (nHalvings + 1)
  return nextHalving - blockHeight
}

/**
 * Calculates the number of blocks until the next halving occurs for a given block height and halving interval.
 *
 * @param {number} blockHeight - The height of the block for which to calculate the next halving.
 * @param {number} halvingInterval - The number of blocks between halvings.
 * @returns {number} The number of blocks until the next halving occurs.
 */
export const blocksUntilNextHalvening = (nHalvings, halvingInterval) => {
  // (210,000 * (halvings + 1)) - blockHeight
  return (halvingInterval * (nHalvings + 1) - blockHeight)
}


/**
 * Calculates the progress towards the next halving event for a given block height and halving interval.
 *
 * @param {number} currentBlockHeight - The height of the current block.
 * @param {number} halvingInterval - The number of blocks between halvings.
 * @returns {number} The progress towards the next halving event, as a decimal between 0 and 1.
 */
export const progressTowardNextHalving = (currentBlockHeight, halvingInterval) => {
  const percentComplete = (currentBlockHeight % halvingInterval) / halvingInterval
  return percentComplete
}

/**
 * Calculates the number of times a halving occurs for a given block height and halving interval.
 *
 * @param {number} blockHeight - The height of the block for which to calculate the halvings.
 * @param {number} halvingInterval - The number of blocks between halvings.
 * @returns {number} The number of times a halving has occurred.
 */
export const nHalvings = (blockHeight, halvingInterval) => {
  // halving occurs ~after~ 210,000 blocks, so subtract 1 from blockHeight
  // otherwise we'd get a halving at block 210,000, which is incorrect
  return Math.floor( (blockHeight-1) / halvingInterval )
}

/**
 * Calculates the time of the next halving event for a given block height and halving interval.
 *
 * @param {number} blockHeight - The height of the block for which to calculate the next halving time.
 * @param {number} halvingInterval - The number of blocks between halvings.
 * @returns {number} The Unix timestamp of the time of the next halving event.
 */
export const timeOfNextHalvening = (blockHeight, halvingInterval) => {
  const blockTime = 600000
  const remainingBlocks = blocksUntilNextHalvening(blockHeight, halvingInterval)
  const currentTime = new Date().getTime()
  const halvingTime = new Date(currentTime + (blockTime * remainingBlocks)).getTime()
  //const halvingDate = new Date(halvingTime.getFullYear(), halvingTime.getMonth(), halvingTime.getDate()).toDateString()
  return halvingTime
}

/**
 * Calculates the expected subsidy for a given halving.
 *
 * @param {number} nHalvings - number of halvings that have occurred.
 * @param {BN} initSubsidy - The initial subsidy per block.
 * @returns {string} The current subsidy per block.
 */
export const subsidy = (nHalvings, initSubsidy) => {
  return initSubsidy.shrn(nHalvings).toString(); // shift right by 1 bit
}