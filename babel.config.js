module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				modules: 'umd',
				useBuiltIns: 'entry',
				corejs: 3
			}
		]
	],
	plugins: ['babel-plugin-add-module-exports', 'babel-plugin-class-display-name', '@babel/plugin-transform-runtime']
};
