<script lang="ts">
    import type { Writable } from "svelte/store";
	import Button from "./lib/Button.svelte";
    import ButtonBar from "./lib/ButtonBar.svelte";
	import Details from "./lib/Details.svelte";
    import Editable from "./lib/Editable.svelte";
	import { categories } from "./stores/categories";
	import { drains } from "./stores/drains";
    import { faucets } from "./stores/faucets";
</script>

<main class="p-4">

	<Details title="Добро пожаловать!" cls="bg-red-200">
		<ButtonBar store={faucets} />
	</Details>

</main>
