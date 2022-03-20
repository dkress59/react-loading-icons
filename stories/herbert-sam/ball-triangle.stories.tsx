/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Meta } from '@storybook/react'
import React from 'react'

import BallTriangle from '../../src/components/ball-triangle'
import { IconProps, IconStroke, IconStrokeArgs } from '../util'

export default {
	title: 'Sam Herbert/Ball Triangle',
	component: BallTriangle,
	argTypes: IconStrokeArgs,
} as Meta

const Template = (args: IconProps) => <BallTriangle {...args} />
export const Demo = Template.bind({})

// @ts-ignore
Demo.args = IconStroke
