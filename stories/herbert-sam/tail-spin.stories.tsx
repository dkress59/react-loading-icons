import { IconProps, IconStrokeFill, IconStrokeFillArgs } from '../util'
import { Meta } from '@storybook/react'
import React from 'react'
import TailSpin from '../../src/components/tail-spin'

export default {
	title: 'Sam Herbert/Tail Spin',
	component: TailSpin,
	argTypes: IconStrokeFillArgs,
} as Meta

const Template = (args: IconProps) => <TailSpin {...args} />
export const Demo = Template.bind({})

Demo.args = IconStrokeFill
