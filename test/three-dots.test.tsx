import { render, screen } from '@testing-library/react'
import { testProps } from './util'
import React from 'react'
import ThreeDots from '../src/components/three-dots'

describe('<ThreeDots /> component', () => {
	it('renders and matches snapshot', () => {
		render(<ThreeDots data-testid="icon" />)
		const svg = screen.getByTestId('icon')
		expect(svg).not.toBeNull()
		expect(svg).toMatchSnapshot()
		expect(svg.getAttributeNames()).toContain('viewBox')
		expect(svg.getAttribute('class')).toBe('icon-loading')
	})
	it('inherits props', () => {
		render(<ThreeDots {...testProps} />)
		const svg = screen.getByTestId('icon')
		expect(svg.getAttribute('height')).toBe('2em')
		expect(svg.getAttribute('width')).toBe('auto')
		expect(svg.getAttribute('class')).toBe('icon-loading test')
	})
})
