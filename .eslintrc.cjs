module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:react/recommended',
		'plugin:eslint-config-prettier',
		'prittier',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react'],
	rules: {
		'prettier/prettier': 'error',
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
		'no-debugger': 'warn',
	},
};
