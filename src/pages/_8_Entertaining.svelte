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
				random(10, 30),
				random(70, 90),
			]),
			left: sample([
				random(10, 30),
				random(70, 90),
			]),
			dirTop: sample([true, false]),
			dirLeft: sample([true, false]),
		})
	}

	let mps = [
		genmp('Казино'),
		genmp('Рыбалка'),
		genmp('Садоводство'),
		genmp('Тюнинг'),
		genmp('Одежда'),
		genmp('Алкоголь'),
		genmp('Семья'),
		genmp('Работа'),
		genmp('Криминал'),
		genmp('Знакомства'),
		genmp('Бизнес'),
		genmp('Ограбления'),
		genmp('Крафт'),
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
	Развлечения и заработок
</Title>

<Paragraph>
	Представьте, чем бы вам хотелось заниматься. <br>
	Возможно, это уже есть на нашем проекте! <br>
</Paragraph>


<Subtitle>
	Используйте <Key>Esc</Key> карту, чтобы исследовать открытый мир сервера, <br>
	изучайте возможности сервера в <Key>M</Key> Планшете,<br>
	общайтесь с другими игроками в <Key>T</Key> чате,<br>
	и открывайте для себя новые занятия.
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
