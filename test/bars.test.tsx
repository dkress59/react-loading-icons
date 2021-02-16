import { render } from '@testing-library/react'
import React from 'react'

import Bars from '../src/components/bars'

describe('<Bars /> component', () => {
	it('renders and matches snapshot', () => {
		const { container } = render(<Bars />)
		expect(container).not.toBeNull()
		expect(container).toMatchSnapshot()
	})
})
