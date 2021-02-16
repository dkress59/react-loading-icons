import { render } from '@testing-library/react'
import React from 'react'

import BallTriangle from '../src/components/ball-triangle'

describe('<BallTriangle /> component', () => {
	it('renders and matches snapshot', () => {
		const { container } = render(<BallTriangle />)
		expect(container).not.toBeNull()
		expect(container).toMatchSnapshot()
	})
})
