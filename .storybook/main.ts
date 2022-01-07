module.exports = {
	addons: ['@storybook/addon-essentials'],
	core: {
	  builder: 'webpack5',
	},
	staticDirs: [ '../stories/assets' ],
	stories: [
		'../stories/**/*.stories.tsx',
	],
}
