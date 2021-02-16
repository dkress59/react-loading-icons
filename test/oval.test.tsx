import { render } from '@testing-library/react'
import React from 'react'

import Oval from '../src/components/oval'

describe('<Oval /> component', () => {
	it('renders and matches snapshot', () => {
		const { container } = render(<Oval />)
		expect(container).not.toBeNull()
		expect(container).toMatchSnapshot()
	})
})
