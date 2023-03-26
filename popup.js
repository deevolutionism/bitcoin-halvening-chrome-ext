const fetchBitcoinBlockCount = async () => {
  try {
    const res = await fetch("https://blockchain.info/q/getblockcount?cors=true")
    if(res.status !== 200) throw new Error(res.statusText)
    // console.log(data)
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
  return 500000000 >> halvings
}

const nextSubsidy = (blockHeight) => {
  const halvings = nHalvings(blockHeight) + 1
  return 500000000 >> halvings
}

let state = {
  blockHeight: null
}

const main = () => {
  const {blockHeight} = state
  
  if(blockHeight) {
    const halvings = nHalvings(blockHeight)
    const percent = progressTowardNextHalving(blockHeight)
    document
      .querySelector("#number-of-halvenings")
      .setAttribute('value', halvings)
    
    document
      .querySelector('#blocks-until-next-halvening')
      .setAttribute('value', `${blocksUntilNextHalvening(blockHeight)}`)
      
    document
      .querySelector('#date-of-next-halvening')
      .setAttribute('value', `${dateOfNextHalvening(blockHeight)}`)

    document
      .querySelector('#current-block-subsidy')
      .setAttribute('value', `⚡ ${currentSubsidy(blockHeight)}`)

    document
      .querySelector("progress-bar")
      .setAttribute('percent', progressTowardNextHalving(blockHeight))
  
    document
      .querySelector("#next-halvening-subsidy")
      .setAttribute('value', `⚡ ${nextSubsidy(blockHeight)}`)
  }
  
  
  


}

main()

// let data = await fetchBitcoinBlockCount()
// console.log('data', data)
