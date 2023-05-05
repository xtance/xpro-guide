<script>
    import Key from "../lib/Key.svelte";

</script>
<div class="">
	Управление
</div>

<div class="grid grid-cols-2 gap-4 justify-center mt-8">

	<div class="text-4xl text-right">
		Движение
	</div>
	<div class="flex gap-4 justify-start text-2xl">
		<Key>W, A, S, D</Key>
	</div>

	<div class="text-4xl text-right">
		Инвентарь
	</div>
	<div class="flex gap-4 justify-start text-2xl">
		<Key>I</Key>
	</div>

	<div class="text-4xl text-right">
		Планшет
	</div>
	<div class="flex gap-4 justify-start text-2xl">
		<Key>M</Key>
	</div>

	<div class="text-4xl text-right">
		Чат
	</div>
	<div class="flex gap-4 justify-start text-2xl">
		<Key>T</Key>
	</div>

</div>

<div class="text-2xl opacity-50">
	Ещё больше кнопок где-то слева сбоку.
</div>

