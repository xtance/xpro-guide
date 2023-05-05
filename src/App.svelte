<script lang="ts">
    import Center from "./lib/Center.svelte";
    import { onMount } from "svelte";

	import _1_Welcome from './pages/_1_Welcome.svelte';
	import _2_Welcome from './pages/_2_Welcome.svelte';
	import _3_Welcome from './pages/_3_Welcome.svelte';

	const pages = [
		_1_Welcome,
		_2_Welcome,
		_3_Welcome,
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

	<div class="fixed top-0 left-0 p-4 text-white/60">
		{index+1}/{pages.length}
	</div>

</main>
