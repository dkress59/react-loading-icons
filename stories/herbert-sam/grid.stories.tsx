/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Meta } from '@storybook/react'
import React from 'react'

import Grid from '../../src/components/grid'
import { IconFill, IconFillArgs, IconProps } from '../util'

export default {
	title: 'Sam Herbert/Grid',
	component: Grid,
	argTypes: IconFillArgs,
} as Meta

const Template = (args: IconProps) => <Grid {...args} />
export const Demo = Template.bind({})

// @ts-ignore
Demo.args = IconFill
