module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'off',
		'prettier/prettier': 'error',
		'arrow-body-style': 'off',
		'prefer-arrow-callback': 'off',
		'no-use-before-define': 'off',
		'no-nested-ternary': 'off',
		'react/jsx-filename-extension': [
			1,
			{ extensions: ['.js', '.jsx', '.ts', '.tsx'] },
		],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				ts: 'never',
				tsx: 'never',
			},
		],
		'func-names': ['error', 'never'],
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
};

// https://github.com/prettier/eslint-plugin-prettier/issues/102
