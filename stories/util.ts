import { ArgTypes } from '@storybook/react/types-6-0'
import { SVGProps } from 'react'

export type IconProps = JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
export const IconFill: IconProps = {
	height: '3em',
	width: undefined,
	fill: '#06bcee',
	fillOpacity: 1,
	stroke: 'transparent',
}
export const IconStroke: IconProps = {
	height: '3em',
	width: undefined,
	stroke: '#06bcee',
	strokeWidth: 2,
	strokeOpacity: 1,
	fill: 'transparent',
}
export const IconStrokeFill: IconProps = {
	height: '3em',
	width: undefined,
	fill: '#06bcee',
	stroke: '#06bcee',
	strokeWidth: 2,
	strokeOpacity: 1,
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
		defaultValue: '',
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
	// FIXME:
	/* fillOpacity: {
		name: 'Fill-Opacity',
		control: 'range',
		min: 0,
		max: 1,
		step: '0.05',
		defaultValue: 1,
	}, */
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
		defaultValue: '',
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
	// FIXME:
	/* strokeOpacity: {
		name: 'Stroke-Opacity',
		control: 'range',
		min: 0,
		max: 1,
		step: '0.05',
		defaultValue: 1,
	}, */
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
		defaultValue: '',
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
	// FIXME:
	/* strokeOpacity: {
		name: 'Stroke-Opacity',
		control: 'range',
		min: 0,
		max: 1,
		step: '0.05',
		defaultValue: 1,
	}, */
}
