/* eslint-disable prettier/prettier */
const PORT = process.env.RLI_PORT ? process.env.RLI_PORT : 9009
const PUBLIC_URL = process.env.RLI_URL ? process.env.RLI_URL : 'http://127.0.0.1:9009'

const env = {
	PORT: PORT,
	PUBLIC_URL: PUBLIC_URL,
}
const env_development = { ...env }
const env_production = {...env }

module.exports = {
	apps: [{
		name: 'loading-icons',
		script: 'yarn',
		args: 'storybook:serve',
		interpreter: '/bin/bash',
		env,
		env_development,
		env_production,
	}]
}