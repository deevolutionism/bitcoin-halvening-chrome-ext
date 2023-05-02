import App from './App.svelte';

const app = new App({
	target: document.body,
});

export default app;

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
