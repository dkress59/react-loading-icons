/* eslint-disable @typescript-eslint/ban-ts-comment */
import { IconProps, IconStrokeFill, IconStrokeFillArgs } from '../util'
import { Meta } from '@storybook/react'
import React from 'react'
import SpinningCircles from '../../src/components/spinning-circles'

export default {
	title: 'Sam Herbert/Spinning Circles',
	component: SpinningCircles,
	argTypes: IconStrokeFillArgs,
} as Meta

const Template = (args: IconProps) => <SpinningCircles {...args} />
export const Demo = Template.bind({})
//@ts-ignore
Demo.args = IconStrokeFill
