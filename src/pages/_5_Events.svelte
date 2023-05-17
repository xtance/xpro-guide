<script lang="ts">
    import Key from "src/lib/Key.svelte";
	import Paragraph from "src/lib/Paragraph.svelte";
    import Subtitle from "src/lib/Subtitle.svelte";
	import Title from "src/lib/Title.svelte";
    import { onMount } from "svelte";

	function genmp(name: string){
		return ({
			name,
			top: sample([
				random(5, 30),
				random(70, 95),
			]),
			left: sample([
				random(5, 30),
				random(70, 95),
			]),
			dirTop: sample([true, false]),
			dirLeft: sample([true, false]),
		})
	}

	let mps = [
		genmp('Королевская битва'),
		genmp('Поставка материалов'),
		genmp('Поставка медикаментов'),
		genmp('Ограбление банка'),
		genmp('Нападение на Форт'),
		genmp('Перехват ТС'),
		genmp('Уличная гонка'),
	]

	function random(minimum: number, maximum: number){
        return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    };

	function sample<T>(arr: Array<T>) : T {
		return arr[Math.floor(Math.random()*arr.length)];
	}

	onMount(() => {
		let id = setInterval(() => {
			mps.forEach(mp => {
				mp.left = mp.left + (mp.dirLeft ? 0.1 : -0.1);
				mp.top = mp.top + (mp.dirTop ? 0.1 : -0.1);
				if (mp.left <= 5 || mp.left >= 95) mp.dirLeft = !mp.dirLeft;
				if (mp.top <= 5 || mp.top >= 95) mp.dirTop = !mp.dirTop;
			});
			mps = mps;
		}, 100);
		return () => clearInterval(id);
	});


</script>

<Title>
	Мероприятия
</Title>

<Paragraph>
	Разные интересные события запускаются несколько раз в день. <br>
	Высокая конкуренция и приятный заработок. <br>
	Это лучше увидеть самому, чем читать об этом.
</Paragraph>

<Subtitle>
	Календарь мероприятий доступен в <Key>M</Key> Планшете. <br>
</Subtitle>


{#each mps as mp}
	<div class="
		absolute
		uppercase
		opacity-20
		duration-100
	" style="top: {mp.top}%; left: {mp.left}%;">
		{mp.name}
	</div>
{/each}
