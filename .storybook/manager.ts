import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'
// @ts-ignore // IDE sometimes does not pick up its shim:
import Logo from '../stories/assets/React-Loading-Icons-logo.svg'

const theme = create({
	base: 'dark',
	brandTitle: 'Loading Icons',
	brandUrl: 'https://github.com/dkress59/react-loading-icons',
	brandImage: Logo,
	appBg: '#282c34',
	barBg: '#282c34',
	inputBg: '#282c34',
	appContentBg: '#20232a',
  })
addons.setConfig({
	isFullscreen: false,
	panelPosition: 'right',
	isToolshown: false,
	theme: theme,
})
