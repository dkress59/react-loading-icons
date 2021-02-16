import { render } from '@testing-library/react'
import React from 'react'

import Grid from '../src/components/grid'

describe('<Grid /> component', () => {
	it('renders and matches snapshot', () => {
		const { container } = render(<Grid />)
		expect(container).not.toBeNull()
		expect(container).toMatchSnapshot()
	})
})
