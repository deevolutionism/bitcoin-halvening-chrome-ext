// import { nHalvings, blocksUntilNextHalvening, dateOfNextHalvening, currentSubsidy, progressTowardNextHalving, nextSubsidy } from "./utils.js"
// import { statusTypes, StatusMessage} from "./components/StatusMessage.js"
// import { ProgressBar } from "./components/ProgressBar.js"
// import { DataModule } from "./components/DataModule.svelte"
// import { HALVING_INTERVAL, COIN } from "./constants.js"

import App from './App.svelte';

const app = new App({
	target: document.body,
});

export default app;

// customElements.define("status-message", StatusMessage)
// customElements.define("progress-bar", ProgressBar)
// customElements.define("data-module", DataModule)

// const fetchBitcoinBlockCount = async () => {
//   try {
//     let data = await new Promise( (resolve) => setTimeout(() => resolve(5899849), 3000))
//     // const res = await fetch("https://blockchain.info/q/getblockcount?cors=true")
//     // if(res.status !== 200) throw new Error(res.statusText)
//     // // console.log(data)
//     // const data = await res.text()
//     // throw new Error('error!')
    
//     return data
//   } catch(e) {
//     console.log(e)
//     return e
//   }
// }



// var state = {
//   blockHeight: null,
//   blockHeightStatus: null
// }

// const main = async () => {
//   const {blockHeight} = state
  
//   if(blockHeight) {
//     const halvings = nHalvings(blockHeight)
//     document
//       .querySelector("#number-of-halvenings")
//       .setAttribute('value', halvings)
    
//     document
//       .querySelector('#blocks-until-next-halvening')
//       .setAttribute('value', `${blocksUntilNextHalvening(blockHeight, halvingInterval)}`)
      
//     document
//       .querySelector('#date-of-next-halvening')
//       .setAttribute('value', `${dateOfNextHalvening(blockHeight)}`)

//     document
//       .querySelector('#current-block-subsidy')
//       .setAttribute('value', `⚡ ${currentSubsidy(blockHeight, halvingInterval)}`)

//     document
//       .querySelector("progress-bar")
//       .setAttribute('percent', progressTowardNextHalving(blockHeight, halvingInterval))
  
//     document
//       .querySelector("#next-halvening-subsidy")
//       .setAttribute('value', `⚡ ${nextSubsidy(blockHeight, halvingInterval)}`)
//   }

//   if(!blockHeight) {
//     updateStatusMsg({type: statusTypes.LOADING, status: 'Fetching current block height...'})
//     let data = await fetchBitcoinBlockCount()
//     console.log(data)
//     if(data) {
//       updateStatusMsg({type: statusTypes.DONE, status: 'Latest block height received'})
//     } else {
//       updateStatusMsg({type: statusTypes.ERROR, status: 'Error fetching latest block'})
//     }
//     state = {
//       ...state,
//       blockHeight: data
//     }
//     main();
//   }

// }

// const updateStatusMsg = ({status, type}) => {
//   document.querySelector('status-message').setAttribute('status', status)
//   document.querySelector('status-message').setAttribute('type', type)
// }

// main()



// let data = await fetchBitcoinBlockCount()
// console.log('data', data)
