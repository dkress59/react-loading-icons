/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Meta } from '@storybook/react'
import React from 'react'

import Audio from '../../src/components/audio'
import { IconFill, IconFillArgs, IconProps } from '../util'

export default {
	title: 'Sam Herbert/Audio',
	component: Audio,
	argTypes: IconFillArgs,
} as Meta

const Template = (args: IconProps) => <Audio {...args} />
export const Demo = Template.bind({})

// @ts-ignore
Demo.args = IconFill
