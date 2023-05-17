import { defineConfig, PluginOption } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import postcss from 'postcss';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 7878,
	},
	plugins: [
		svelte({
			onwarn: (warning, handler) => {
				if (warning.code === 'a11y-click-events-have-key-events') return; // console.log(`[Warn]`, warning.code);
				handler(warning);
			}
		}),
		postcss() as unknown as PluginOption,
	],
	build: {
		outDir: 'docs',
	},
	base: './',
	// унылый костыль для импортов вида "src/.."
	resolve: {
        alias: {
            src: path.resolve('src/'),
        },
    }
})
