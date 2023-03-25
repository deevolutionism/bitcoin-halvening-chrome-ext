const fetchBitcoinBlockCount = async () => {
  try {
    const res = await fetch("https://blockchain.info/q/getblockcount?cors=true")
    if(res.status !== 200) throw new Error(res.statusText)
    console.log(data)
    const data = await res.text()
    return data
  } catch(e) {
    console.log(e)
  }
}

const blocksRemaining = (blockHeight) => {
  const halvingInterval = 21000
  const nHalvings = Math.floor(blockHeight % halvingInterval)
  const nextHalving = halvingInterval * (nHalvings + 1)
  return nextHalving - blockHeight
}

const progressTowardNextHalving = (currentBlockHeight = 1) => {
  const halvingInterval = 210000
  const percentComplete = (currentBlockHeight % halvingInterval) / halvingInterval
  return percentComplete
}

const nHalvings = (blockHeight) => {
  return Math.floor( blockHeight / 210000 )
}

const blocksUntilNextHalvening = (blockHeight) => {
  const halvings = nHalvings(blockHeight)
  // (210,000 * (halvings + 1)) - blockHeight
  return (210000 * (halvings + 1) - blockHeight)
}

const dateOfNextHalvening = (blockHeight) => {
  const blockTime = 600000
  const remainingBlocks = blocksUntilNextHalvening(blockHeight)
  const currentTime = new Date().getTime()
  const halvingTime = new Date(currentTime + (blockTime * remainingBlocks))
  const halvingDate = new Date(halvingTime.getFullYear(), halvingTime.getMonth(), halvingTime.getDate()).toDateString()
  return halvingDate
}

const currentSubsidy = (blockHeight) => {
  const halvings = nHalvings(blockHeight)
  return 50000000 >> halvings
}



const main = () => {
  const blockHeight = 900000
  const halvings = nHalvings(blockHeight)
  
  document
    .querySelector("#number-of-halvenings")
    .setAttribute('value', halvings)
  
  document
    .querySelector('#blocks-until-next-halvening')
    .setAttribute('value', `blocks: ${blocksUntilNextHalvening(blockHeight)}`)
  
  document
    .querySelector('#date-of-next-halvening')
    .setAttribute('value', `${dateOfNextHalvening(blockHeight)}`)
  
  document
    .querySelector('#current-block-subsidy')
    .setAttribute('value', `sats: ${currentSubsidy(blockHeight)}`)

  document
    .querySelector("progress-bar")
    .setAttribute('percent', `height: ${progressTowardNextHalving(blockHeight)}`)

}

main()
