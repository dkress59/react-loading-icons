/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Meta } from '@storybook/react'
import React from 'react'

import Puff from '../../src/components/puff'
import { IconProps, IconStroke, IconStrokeArgs } from '../util'

export default {
	title: 'Sam Herbert/Puff',
	component: Puff,
	argTypes: IconStrokeArgs,
} as Meta

const Template = (args: IconProps) => <Puff {...args} />
export const Demo = Template.bind({})

// @ts-ignore
Demo.args = IconStroke
