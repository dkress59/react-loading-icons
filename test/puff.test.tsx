import { render } from '@testing-library/react'
import React from 'react'

import Puff from '../src/components/puff'

describe('<Puff /> component', () => {
	it('renders and matches snapshot', () => {
		const { container } = render(<Puff />)
		expect(container).not.toBeNull()
		expect(container).toMatchSnapshot()
	})
})
