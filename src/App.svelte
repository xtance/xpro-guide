<script lang="ts">
    import Center from "./lib/Center.svelte";
    import { onMount } from "svelte";

	import _1 from './pages/_1_Welcome.svelte';
	import _2 from './pages/_2_Mode.svelte';
	import _3 from './pages/_3_Fraction.svelte';
	import _4 from './pages/_4_Weapons.svelte';
	import _5 from './pages/_5_Events.svelte';
	import _6 from './pages/_6_Training.svelte';

	const pages = [
		_1,
		_2,
		_3,
		_4,
		_5,
		_6,
	]

	let page = pages[0];
	let index = 0;

	function nextInArray<T>(arr: Array<T>, what: T, add: number = 1){
		const currentIndex = arr.indexOf(what);
		index = currentIndex + add
		if (index < 0) index = 0;
		if (index >= arr.length) index = arr.length - 1;
		console.log(`NextIndex = ${index}`);
		return arr[index];
	}

	onMount(() => {
		console.log(`[Guide] Mounted!`);
		window.addEventListener('keydown', (e) => {
			//console.log(`[Guide] Keydown = ${e.code}!`);
			// Вперёд
			if (e.code === 'ArrowRight') {
				page = nextInArray(pages, page, 1);
			}
			// Назад
			else if (e.code === 'ArrowLeft') {
				page = nextInArray(pages, page, -1);
			}
		});
	});

</script>

<main class="">

	<Center>
		<svelte:component this={page} />
	</Center>

	<div class="fixed bottom-0 left-0 p-4 text-white/60 w-screen text-center pointer-events-none">
		{index+1}/{pages.length}
	</div>

</main>
