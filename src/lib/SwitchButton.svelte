<script lang="ts">
	export let cls: string = '';
</script>

<button class="
	py-4 px-8 border border-white/5 rounded-md shadow 
	bg-white/5 hover:bg-white/10
	duration-100 {cls} cursor-pointer
" on:click>
	<slot/>
</button>