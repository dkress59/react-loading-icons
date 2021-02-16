import { render } from '@testing-library/react'
import React from 'react'

import Hearts from '../src/components/hearts'

describe('<Hearts /> component', () => {
	it('renders and matches snapshot', () => {
		const { container } = render(<Hearts />)
		expect(container).not.toBeNull()
		expect(container).toMatchSnapshot()
	})
})
