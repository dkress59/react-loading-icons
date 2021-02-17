/* eslint-disable @typescript-eslint/ban-ts-comment */
import { IconFill, IconFillArgs, IconProps } from '../util'
import { Meta } from '@storybook/react'
import Hearts from '../../src/components/hearts'
import React from 'react'

export default {
	title: 'Sam Herbert/Hearts',
	component: Hearts,
	argTypes: IconFillArgs,
} as Meta

const Template = (args: IconProps) => <Hearts {...args} />
export const Demo = Template.bind({})
//@ts-ignore
Demo.args = IconFill
