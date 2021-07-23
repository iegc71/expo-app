module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		env: {
			production: {
				plugins: ['react-native-paper/babel'],
			},
		},
		// CONFIGURAR LOS ALIAS
		plugins: [
			[
				'module-resolver',
				{
					root: ['./'],
					alias: {
						assets: './assets',
						components: './src/components',
						elements: './src/elements',
						screens: './src/screens',
						navigation: './src/navigation',
						utils: './src/utils',
					},
				},
			],
		],
	};
};
