/* eslint-disable @typescript-eslint/ban-ts-comment */
import { IconFill, IconFillArgs, IconProps } from '../util'
import { Meta } from '@storybook/react'
import Grid from '../../src/components/grid'
import React from 'react'

export default {
	title: 'Sam Herbert/Grid',
	component: Grid,
	argTypes: IconFillArgs,
} as Meta

const Template = (args: IconProps) => <Grid {...args} />
export const Demo = Template.bind({})
//@ts-ignore
Demo.args = IconFill
