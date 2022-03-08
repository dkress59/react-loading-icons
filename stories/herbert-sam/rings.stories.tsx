import { IconProps, IconStroke, IconStrokeArgs } from '../util'
import { Meta } from '@storybook/react'
import React from 'react'
import Rings from '../../src/components/rings'

export default {
	title: 'Sam Herbert/Rings',
	component: Rings,
	argTypes: IconStrokeArgs,
} as Meta

const Template = (args: IconProps) => <Rings {...args} />
export const Demo = Template.bind({})

Demo.args = IconStroke
