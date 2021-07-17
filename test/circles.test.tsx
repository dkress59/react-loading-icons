import { render, screen } from '@testing-library/react'
import { testProps } from './util'
import Circles from '../src/components/circles'
import React from 'react'

describe('<Circles /> component', () => {
	it('renders and matches snapshot', () => {
		render(<Circles data-testid="icon" />)
		const svg = screen.getByTestId('icon')
		expect(svg).not.toBeNull()
		expect(svg).toMatchSnapshot()
		expect(svg.getAttributeNames()).toContain('viewBox')
		expect(svg.getAttribute('class')).toBe('icon-loading')
	})
	it('inherits props', () => {
		render(<Circles {...testProps} />)
		const svg = screen.getByTestId('icon')
		expect(svg.getAttribute('height')).toBe('2em')
		expect(svg.getAttribute('width')).toBe('auto')
		expect(svg.getAttribute('class')).toBe('icon-loading test')
	})
})
