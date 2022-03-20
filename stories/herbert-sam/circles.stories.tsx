/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Meta } from '@storybook/react'
import React from 'react'

import Circles from '../../src/components/circles'
import { IconFill, IconFillArgs, IconProps } from '../util'

export default {
	title: 'Sam Herbert/Circles',
	component: Circles,
	argTypes: IconFillArgs,
} as Meta

const Template = (args: IconProps) => <Circles {...args} />
export const Demo = Template.bind({})

// @ts-ignore
Demo.args = IconFill
