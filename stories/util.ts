import { ArgTypes } from '@storybook/react'
import { SVGProps } from 'react'

export type IconProps = JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
export const IconFill: IconProps = {
	fill: '#06bcee',
	fillOpacity: 1,
	height: '3em',
	speed: 1,
	stroke: 'transparent',
	strokeOpacity: 1,
	width: 'auto',
}
export const IconStroke: IconProps = {
	fill: 'transparent',
	fillOpacity: 1,
	height: '3em',
	speed: 1,
	stroke: '#06bcee',
	strokeOpacity: 1,
	strokeWidth: 2,
	width: 'auto',
}
export const IconStrokeFill: IconProps = {
	fill: '#06bcee',
	fillOpacity: 1,
	height: '3em',
	speed: 1,
	stroke: '#06bcee',
	strokeOpacity: 1,
	strokeWidth: 2,
	width: 'auto',
}

export const IconFillArgs: ArgTypes = {
	height: {
		name: 'Height',
		control: 'text',
		defaultValue: '3em',
	},
	width: {
		name: 'Width',
		control: 'text',
		defaultValue: 'auto',
	},
	fill: {
		name: 'Fill',
		control: 'color',
		defaultValue: '#06bcee',
	},
	stroke: {
		name: 'Stroke',
		control: 'color',
		defaultValue: 'transparent',
	},
	speed: {
		name: 'Speed',
		control: 'number',
		defaultValue: 1,
	},
}
export const IconStrokeArgs: ArgTypes = {
	height: {
		name: 'Height',
		control: 'text',
		defaultValue: '3em',
	},
	width: {
		name: 'Width',
		control: 'text',
		defaultValue: 'auto',
	},
	fill: {
		name: 'Fill',
		control: 'color',
		defaultValue: 'transparent',
	},
	stroke: {
		name: 'Stroke',
		control: 'color',
		defaultValue: '#06bcee',
	},
	speed: {
		name: 'Speed',
		control: 'number',
		defaultValue: 1,
	},
}
export const IconStrokeFillArgs: ArgTypes = {
	height: {
		name: 'Height',
		control: 'text',
		defaultValue: '3em',
	},
	width: {
		name: 'Width',
		control: 'text',
		defaultValue: 'auto',
	},
	fill: {
		name: 'Fill',
		control: 'color',
		defaultValue: '#06bcee',
	},
	stroke: {
		name: 'Stroke',
		control: 'color',
		defaultValue: '#06bcee',
	},
	speed: {
		name: 'Speed',
		control: 'number',
		defaultValue: 1,
	},
}
