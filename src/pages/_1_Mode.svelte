<script lang="ts">
    import Title from "../lib/Title.svelte";
	import Key from "../lib/Key.svelte";
    import Paragraph from "../lib/Paragraph.svelte";
    import Subtitle from "src/lib/Subtitle.svelte";

</script>

<Title>
	Выбор режима игры
</Title>

<Paragraph>
	Общий мир со всеми игроками делится на <br>
	<b>Активный</b> и <b>Пассивный</b> режим.
</Paragraph>

<Paragraph>
	В активном режиме можно всё: перестрелки, ограбления, и так далее. <br>
	В пассивном режиме вы неуязвимы, но криминальные действия недоступны. <br>
</Paragraph>

<Subtitle>
	Изменить режим можно в любое время на кнопку <Key>M</Key> или <Key>F3</Key>
</Subtitle>
