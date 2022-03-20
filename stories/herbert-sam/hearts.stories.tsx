/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Meta } from '@storybook/react'
import React from 'react'

import Hearts from '../../src/components/hearts'
import { IconFill, IconFillArgs, IconProps } from '../util'

export default {
	title: 'Sam Herbert/Hearts',
	component: Hearts,
	argTypes: IconFillArgs,
} as Meta

const Template = (args: IconProps) => <Hearts {...args} />
export const Demo = Template.bind({})

// @ts-ignore
Demo.args = IconFill
