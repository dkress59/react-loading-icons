import { render } from '@testing-library/react'
import React from 'react'

import ThreeDots from '../src/components/three-dots'

describe('<ThreeDots /> component', () => {
	it('renders and matches snapshot', () => {
		const { container } = render(<ThreeDots />)
		expect(container).not.toBeNull()
		expect(container).toMatchSnapshot()
	})
})
