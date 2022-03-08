module.exports = {
	extends: [
		'@sprylab/eslint-config/react',
		'plugin:import/typescript',
		'plugin:storybook/recommended',
	],
	parserOptions: {
		project: './tsconfig.eslint.json',
	},
	rules: {
		'eslint-comments/disable-enable-pair': 'off',
	},
}
