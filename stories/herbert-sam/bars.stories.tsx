/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Meta } from '@storybook/react'
import React from 'react'

import Bars from '../../src/components/bars'
import { IconFill, IconFillArgs, IconProps } from '../util'

export default {
	title: 'Sam Herbert/Bars',
	component: Bars,
	argTypes: IconFillArgs,
} as Meta

const Template = (args: IconProps) => <Bars {...args} />
export const Demo = Template.bind({})

// @ts-ignore
Demo.args = IconFill
