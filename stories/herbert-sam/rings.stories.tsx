/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Meta } from '@storybook/react'
import React from 'react'

import Rings from '../../src/components/rings'
import { IconProps, IconStroke, IconStrokeArgs } from '../util'

export default {
	title: 'Sam Herbert/Rings',
	component: Rings,
	argTypes: IconStrokeArgs,
} as Meta

const Template = (args: IconProps) => <Rings {...args} />
export const Demo = Template.bind({})

// @ts-ignore
Demo.args = IconStroke
