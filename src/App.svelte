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

	function nextInArray<T>(arr: Array<T>, what: T, add: number = 1){
		const currentIndex = arr.indexOf(what);
		let nextIndex = (currentIndex + add) % arr.length;
		if (nextIndex < 0) nextIndex = 0;
		console.log(`NextIndex = ${nextIndex}`);
		return arr[nextIndex];
	}

	onMount(() => {
		console.log(`[Guide] Mounted!`);
		window.addEventListener('keypress', (e) => {
			//console.log(`[Guide] Keypress = ${e.code}!`);
			// Вперёд
			if (e.code === 'Period') {
				page = nextInArray(pages, page, 1);
			}
			// Назад
			else if (e.code === 'Comma') {
				page = nextInArray(pages, page, -1);
			}
		});
	});

</script>

<main class="">

	<Center>
		<svelte:component this={page} />
	</Center>

</main>
