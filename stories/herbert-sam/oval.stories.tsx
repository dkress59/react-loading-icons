/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Meta } from '@storybook/react'
import React from 'react'

import Oval from '../../src/components/oval'
import { IconProps, IconStroke, IconStrokeArgs } from '../util'

export default {
	title: 'Sam Herbert/Oval',
	component: Oval,
	argTypes: IconStrokeArgs,
} as Meta

const Template = (args: IconProps) => <Oval {...args} />
export const Demo = Template.bind({})
export const Radar = Template.bind({})

// @ts-ignore
Demo.args = IconStroke
// @ts-ignore
Radar.args = { ...IconStroke, strokeWidth: 36 }
