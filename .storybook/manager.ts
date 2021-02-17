import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'

const theme = create({
	base: 'dark',
	brandTitle: 'Loading Icons',
	brandUrl: 'https://github.com/dkress59/react-loading-icons',
	//brandImage: 'https://loading.damiankress.de/React-Loading-Icons-logo.png',
	brandImage: 'http://127.0.0.1:9009/React-Loading-Icons-logo.png',
	appBg: '#282c34',
  })
addons.setConfig({
	//isFullscreen: false,
	//showNav: true,
	//showPanel: true,
	panelPosition: 'right',
	//sidebarAnimations: true,
	//enableShortcuts: true,
	//isToolshown: true,
	theme: theme,
	//selectedPanel: undefined,
	//initialActive: 'sidebar',
	//showRoots: false,
})
