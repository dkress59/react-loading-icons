import { render, screen } from '@testing-library/react'
import React from 'react'

import Audio from '../src/components/audio'
import { testProps } from './util'

describe('<Audio /> component', () => {
	it('renders and matches snapshot', () => {
		render(<Audio data-testid="icon" />)
		const svg = screen.getByTestId('icon')
		expect(svg).not.toBeNull()
		expect(svg).toMatchSnapshot()
		expect(svg.getAttributeNames()).toContain('viewBox')
		expect(svg.getAttribute('class')).toBe('icon-loading')
	})
	it('inherits props', () => {
		render(<Audio {...{ ...testProps, speed: undefined }} />)
		const svg = screen.getByTestId('icon')
		expect(svg).toMatchSnapshot()
		expect(svg.getAttribute('height')).toBe('2em')
		expect(svg.getAttribute('width')).toBe('auto')
		expect(svg.getAttribute('class')).toBe('icon-loading test')
	})
})
