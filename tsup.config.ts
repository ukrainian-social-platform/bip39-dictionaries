import { defineConfig } from 'tsup';
import yamlPluginStore from 'esbuild-plugin-yaml';

export default defineConfig({
	entry: [
		'src/index.ts'
	],
	splitting: true,
	sourcemap: false,
	clean: true,
	minify: true,
	dts: true,
	target: [
		'node18',
	],
	format: [
		'esm',
		'cjs',
	],
	esbuildPlugins: [
		yamlPluginStore.yamlPlugin({}),
	],
});
