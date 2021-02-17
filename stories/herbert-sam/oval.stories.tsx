/* eslint-disable @typescript-eslint/ban-ts-comment */
import { IconProps, IconStroke, IconStrokeArgs } from '../util'
import { Meta } from '@storybook/react'
import Oval from '../../src/components/oval'
import React from 'react'

export default {
	title: 'Sam Herbert/Oval',
	component: Oval,
	argTypes: IconStrokeArgs,
} as Meta

const Template = (args: IconProps) => <Oval {...args} />
export const Demo = Template.bind({})
//@ts-ignore
Demo.args = IconStroke
