import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';
import scss from 'rollup-plugin-scss';
import inlineSvg from 'rollup-plugin-inline-svg';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import url from 'rollup-plugin-url';

const pkg = require('./package.json');

export default {
	input: 'src/index.ts',
	output: [
		{
			file: pkg.main,
			format: 'cjs',
			// exports: 'named',
			sourcemap: true
		},
		{
			file: pkg.module,
			format: 'es',
			// exports: 'named',
			sourcemap: true
		},
		{
			file: pkg.browser,
			format: 'iife',
			// exports: pkg.name,
			name: 'UploaderUi',
			sourcemap: true
		}
	],
	plugins: [
		inlineSvg(),
		scss(),
		external(),
		postcss({
			modules: false,
			extract: true,
			minimize: true,
			sourceMap: true
		}),
		url({
			exclude: [/\.(inline.svg)/]
		}),
		resolve(),
		typescript({
			rollupCommonJSResolveHack: true
			// clean: true,
		}),
		commonjs(),
		sourceMaps()
	]
};
