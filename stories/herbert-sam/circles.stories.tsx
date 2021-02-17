/* eslint-disable @typescript-eslint/ban-ts-comment */
import { IconFill, IconFillArgs, IconProps } from '../util'
import { Meta } from '@storybook/react'
import Circles from '../../src/components/circles'
import React from 'react'

export default {
	title: 'Sam Herbert/Circles',
	component: Circles,
	argTypes: IconFillArgs,
} as Meta

const Template = (args: IconProps) => <Circles {...args} />
export const Demo = Template.bind({})
//@ts-ignore
Demo.args = IconFill
