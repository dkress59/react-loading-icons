import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'
import Logo from '../stories/assets/React-Loading-Icons-logo.svg'

const theme = create({
	base: 'dark',
	brandTitle: 'Loading Icons',
	brandUrl: 'https://github.com/dkress59/react-loading-icons',
	//brandImage: 'https://loading.damiankress.de/React-Loading-Icons-logo.png',
	brandImage: Logo,
	appBg: '#282c34',
	barBg: '#282c34',
	inputBg: '#282c34',
	appContentBg: '#20232a',
  })
addons.setConfig({
	panelPosition: 'right',
	theme: theme,
})
