/* eslint-disable @typescript-eslint/ban-ts-comment */
import { IconFill, IconFillArgs, IconProps } from '../util'
import { Meta } from '@storybook/react'
import Audio from '../../src/components/audio'
import React from 'react'

export default {
	title: 'Sam Herbert/Audio',
	component: Audio,
	argTypes: IconFillArgs,
} as Meta

const Template = (args: IconProps) => <Audio {...args} />
export const Demo = Template.bind({})
//@ts-ignore
Demo.args = IconFill
