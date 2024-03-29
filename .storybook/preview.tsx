import React from 'react'
import { Story } from '@storybook/react'

const decorator = (Story: Story) => <div style={{
	width: '100%',
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
}}>
	<Story />
	Loading…
</div>

export const decorators = [ decorator ]
