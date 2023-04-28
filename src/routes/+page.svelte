<script>
	import DataModule from "./DataModule.svelte";
  import { blockHeight, blockReward, halvenings, nextSub, HALVING_INTERVAL, blocksRemaining } from "../stores";
  const modules = [
    { description: 'block height', value: $blockHeight },
    { description: 'current block reward', value: $blockReward, sats: true},
    { description: 'next block reward', value: `${$nextSub}`, sats: true},
    { description: 'halvenings', value: `${$halvenings}/32` },
    { description: 'blocks until next halvening', value: `${$blocksRemaining}/${HALVING_INTERVAL}`},
    { description: 'time until next halvening', value: 'TBD'}
  ];
</script>

<svelte:head>
	<title>halvening dashboard</title>
	<meta name="description" content="bitcoin halvening" />
</svelte:head>

<section>
	<!-- <Counter /> -->
  {#each modules as props}
    <DataModule {...props} />
  {/each}
  
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
