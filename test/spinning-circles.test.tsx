import { render, screen } from '@testing-library/react'
import React from 'react'

import SpinningCircles from '../src/components/spinning-circles'
import { testProps } from './util'

describe('<SpinningCircles /> component', () => {
	it('renders and matches snapshot', () => {
		render(<SpinningCircles data-testid="icon" />)
		const svg = screen.getByTestId('icon')
		expect(svg).not.toBeNull()
		expect(svg).toMatchSnapshot()
		expect(svg.getAttributeNames()).toContain('viewBox')
		expect(svg.getAttribute('class')).toBe('icon-loading')
	})
	it('inherits props', () => {
		render(<SpinningCircles {...testProps} />)
		const svg = screen.getByTestId('icon')
		expect(svg.getAttribute('height')).toBe('2em')
		expect(svg.getAttribute('width')).toBe('auto')
		expect(svg.getAttribute('class')).toBe('icon-loading test')
	})
})
