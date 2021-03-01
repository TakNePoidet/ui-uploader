import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';
import inlineSvg from 'rollup-plugin-inline-svg';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import url from 'rollup-plugin-url';
import { terser } from 'rollup-plugin-terser';

const pkg = require('./package.json');

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const plagins = [];

if (!isDev) {
	plagins.push(
		terser({
			compress: {
				// unsafe: true,
				inline: true,
				passes: 1,
				keep_fargs: false,
				drop_console: true
			},
			output: {
				beautify: false,
				comments: false
			},
			mangle: true
		})
	);
} else {
	plagins.push(sourceMaps());
}
export default [
	{
		input: './src/index.ts',
		output: [
			{
				file: pkg.main,
				exports: 'named',
				format: 'cjs',
				sourcemap: isDev
			},
			{
				file: pkg.module,
				format: 'es',
				sourcemap: isDev
			}
			// {
			// 	file: pkg.browser,
			// 	format: 'iife',
			// 	exports: 'named',
			// 	name: 'UploaderUi',
			// 	sourcemap: true
			// }
		],
		plugins: [
			...plagins,
			commonjs({}),
			inlineSvg(),
			external(),
			postcss({
				modules: false,
				extract: false,
				minimize: !isDev,
				sourceMap: false
			}),
			url({
				exclude: [/\.(inline.svg)/]
			}),
			resolve(),
			typescript({
				rollupCommonJSResolveHack: true,
				clean: true,
				sourceMap: false,
				useTsconfigDeclarationDir: true,
				emitDeclarationOnly: false
			})
		]
	}
];
