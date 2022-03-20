module.exports = {
	collectCoverageFrom: ['src/components/**/*.(js|jsx|ts|tsx)'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	globals: {
		'ts-jest': {
			babelConfig: true,
		},
	},
	cacheDirectory: '.jest/cache',
	testEnvironment: 'jsdom',
	testRegex: '(/test/*|(\\.|/)(test|spec))\\.tsx?$',
}
