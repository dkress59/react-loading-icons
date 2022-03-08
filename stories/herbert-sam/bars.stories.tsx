import { IconFill, IconFillArgs, IconProps } from '../util'
import { Meta } from '@storybook/react'
import Bars from '../../src/components/bars'
import React from 'react'
export default {
	title: 'Sam Herbert/Bars',
	component: Bars,
	argTypes: IconFillArgs,
} as Meta

const Template = (args: IconProps) => <Bars {...args} />
export const Demo = Template.bind({})

Demo.args = IconFill
