/* eslint-disable @typescript-eslint/ban-ts-comment */
import { IconFill, IconFillArgs, IconProps } from '../util'
import { Meta } from '@storybook/react'
import React from 'react'
import ThreeDots from '../../src/components/three-dots'

export default {
	title: 'Sam Herbert/Three Dots',
	component: ThreeDots,
	argTypes: IconFillArgs,
} as Meta

const Template = (args: IconProps) => <ThreeDots {...args} />
export const Demo = Template.bind({})
//@ts-ignore
Demo.args = { ...IconFill, height: '1em', style: { margin: '2em' } }
