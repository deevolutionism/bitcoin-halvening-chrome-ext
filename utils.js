export const blocksRemaining = (blockHeight, halvingInterval) => {
  const nHalvings = Math.floor(blockHeight % halvingInterval)
  const nextHalving = halvingInterval * (nHalvings + 1)
  return nextHalving - blockHeight
}

export const progressTowardNextHalving = (currentBlockHeight = 1, halvingInterval) => {
  const percentComplete = (currentBlockHeight % halvingInterval) / halvingInterval
  return percentComplete
}

export const nHalvings = (blockHeight, halvingInterval) => {
  // halving occurs ~after~ 210,000 blocks, so subtract 1 from blockHeight
  // otherwise we'd get a halving at block 210,000, which is incorrect
  return Math.floor( (blockHeight-1) / halvingInterval )
}

export const blocksUntilNextHalvening = (blockHeight, halvingInterval) => {
  const halvings = nHalvings(blockHeight, halvingInterval)
  // (210,000 * (halvings + 1)) - blockHeight
  return (halvingInterval * (halvings + 1) - blockHeight)
}

export const dateOfNextHalvening = (blockHeight) => {
  const blockTime = 600000
  const remainingBlocks = blocksUntilNextHalvening(blockHeight)
  const currentTime = new Date().getTime()
  const halvingTime = new Date(currentTime + (blockTime * remainingBlocks))
  const halvingDate = new Date(halvingTime.getFullYear(), halvingTime.getMonth(), halvingTime.getDate()).toDateString()
  return halvingDate
}

export const currentSubsidy = (blockHeight, halvingInterval, coin) => {
  const halvings = nHalvings(blockHeight, halvingInterval)
  return coin >> halvings
}

export const nextSubsidy = (blockHeight, halvingInterval, coin) => {
  const halvings = nHalvings(blockHeight, halvingInterval) + 1
  return coin >> halvings
}