import { render } from '@testing-library/react'
import React from 'react'

import SpinningCircles from '../src/components/spinning-circles'

describe('<SpinningCircles /> component', () => {
	it('renders and matches snapshot', () => {
		const { container } = render(<SpinningCircles />)
		expect(container).not.toBeNull()
		expect(container).toMatchSnapshot()
	})
})
