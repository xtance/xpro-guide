<script lang="ts">
    import Title from "../lib/Title.svelte";
	import Key from "../lib/Key.svelte";
    import Paragraph from "../lib/Paragraph.svelte";
    import Subtitle from "src/lib/Subtitle.svelte";

</script>

<Title>
	Дополнительные режимы
</Title>

<Paragraph>
	В этих режимах игра идёт по своим правилам. <br>
	Участвуя в них, вы получаете деньги или RP-очки!
</Paragraph>

<Paragraph>
	Арена: <span class="opacity-60">режим для тренировки с бесплатным оружием. </span> <br>
	Паблик: <span class="opacity-60">командный режим с закладкой бомбы. </span> <br>
	Захват территории: <span class="opacity-60">режим для фракций. </span> <br>
	Война за бизнес: <span class="opacity-60">режим для семей. </span>
</Paragraph>

<Subtitle>
	Изменить режим можно в любое время на кнопку <Key>M</Key> или <Key>F3</Key>
</Subtitle>
