<script lang="ts">
    import Center from "./lib/Center.svelte";

	import _0 from './pages/_0_Welcome.svelte';
	import _1 from './pages/_1_Mode.svelte';
	import _2 from './pages/_2_Mode.svelte';
	import _3 from './pages/_3_Fraction.svelte';
	import _4 from './pages/_4_Weapons.svelte';
	import _5 from './pages/_5_Events.svelte';
	import _7 from './pages/_7_Vehicles.svelte';
	import _8 from './pages/_8_Entertaining.svelte';
	import _9 from './pages/_9_Training.svelte';
	import _10 from './pages/_10_Bye.svelte';
    import Button from "./lib/Button.svelte";
    import SwitchButton from "./lib/SwitchButton.svelte";
    import { onMount } from "svelte";

	const pages = [
		_0,
		_1,
		_2,
		_3,
		_4,
		_5,
		_7,
		_8,
		_9,
		_10,
	]

	let page = pages[0];
	let index = 0;

	function nextInArray<T>(arr: Array<T>, what: T, add: number = 1){
		const currentIndex = arr.indexOf(what);
		index = currentIndex + add
		if (index < 0) index = 0;
		if (index >= arr.length) index = arr.length - 1;
		//console.log(`NextIndex = ${index}`, arr);
		return arr[index];
	}

	let ping = true;

	function setNext(){
		ping = false;
		page = nextInArray(pages, page, 1);
	}

	function setPrev(){
		page = nextInArray(pages, page, -1);
	}


	onMount(() => {
		console.log(`[Guide] Mounted!`);
		/* window.addEventListener('keydown', (e) => {
			//console.log(`[Guide] Keydown = ${e.code}!`);
			// Вперёд
			if (e.code === 'ArrowRight') {
				page = nextInArray(pages, page, 1);
			}
			// Назад
			else if (e.code === 'ArrowLeft') {
				page = nextInArray(pages, page, -1);
			}
		}); */
	});

	function closeGuide(){
		if ('alt' in window){
			window.alt['emit']('pew', 'guide:hide');
		} else {
			// shit
			window.close();
		}
	}
</script>

<main class="">

	<div class="fixed top-0 left-0 p-4 text-white/60 flex w-screen justify-between z-10">
		<SwitchButton on:click={() => window.open("https://discord.com/invite/aA7JyDwTT4")}>
			Наш Discord
		</SwitchButton>
		<SwitchButton on:click={() => closeGuide()}>
			Закрыть гайд
		</SwitchButton>
	</div>

	<Center>
		<svelte:component this={page} />
	</Center>



	<div class="fixed bottom-0 left-0 p-4 text-white/60 w-screen text-center z-10">


		<div class="flex justify-center gap-2 pb-4">
			{#if index > 0}
			<SwitchButton on:click={setPrev}>
				← Назад
			</SwitchButton>
			{/if}
			{#if index < pages.length - 1}
			<SwitchButton on:click={setNext} cls={ping && 'animate-bounce'}>
				Дальше →
			</SwitchButton>
			{/if}
		</div>


			

	
		

		{index+1}/{pages.length}
	</div>

</main>
