/* eslint-disable @typescript-eslint/ban-ts-comment */
import { IconProps, IconStroke, IconStrokeArgs } from '../util'
import { Meta } from '@storybook/react'
import BallTriangle from '../../src/components/ball-triangle'
import React from 'react'

export default {
	title: 'Sam Herbert/Ball Triangle',
	component: BallTriangle,
	argTypes: IconStrokeArgs,
} as Meta

const Template = (args: IconProps) => <BallTriangle {...args} />
export const Demo = Template.bind({})
//@ts-ignore
Demo.args = IconStroke
