import { render } from '@testing-library/react'
import React from 'react'

import Circles from '../src/components/circles'

describe('<Circles /> component', () => {
	it('renders and matches snapshot', () => {
		const { container } = render(<Circles />)
		expect(container).not.toBeNull()
		expect(container).toMatchSnapshot()
	})
})
