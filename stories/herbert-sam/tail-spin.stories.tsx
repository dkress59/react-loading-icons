/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Meta } from '@storybook/react'
import React from 'react'

import TailSpin from '../../src/components/tail-spin'
import { IconProps, IconStrokeFill, IconStrokeFillArgs } from '../util'

export default {
	title: 'Sam Herbert/Tail Spin',
	component: TailSpin,
	argTypes: IconStrokeFillArgs,
} as Meta

const Template = (args: IconProps) => <TailSpin {...args} />
export const Demo = Template.bind({})

// @ts-ignore
Demo.args = IconStrokeFill
