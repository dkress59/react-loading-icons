module.exports = {
	root: true,
	extends: ['@tool-belt/eslint-config', 'plugin:storybook/recommended'],
	parserOptions: {
		project: './tsconfig.json',
	},
	plugins: ['jam3', 'jsx-a11y', 'unused-imports'],
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
			},
		},
	},
}
