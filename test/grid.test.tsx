import { render, screen } from '@testing-library/react'
import React from 'react'

import Grid from '../src/components/grid'

describe('<Grid /> component', () => {
	it('renders and matches snapshot', () => {
		render(<Grid data-testid="icon" />)
		const svg = screen.getByTestId('icon')
		expect(svg).not.toBeNull()
		expect(svg).toMatchSnapshot()
		expect(svg.getAttributeNames()).toContain('viewBox')
		expect(svg.getAttribute('class')).toBe('icon-loading')
	})
	it('inherits props', () => {
		render(
			<Grid
				data-testid="icon"
				height="2em"
				width="auto"
				className="test"
			/>,
		)
		const svg = screen.getByTestId('icon')
		expect(svg.getAttribute('height')).toBe('2em')
		expect(svg.getAttribute('width')).toBe('auto')
		expect(svg.getAttribute('class')).toBe('icon-loading test')
	})
})
