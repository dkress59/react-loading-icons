import { render } from '@testing-library/react'
import React from 'react'

import Rings from '../src/components/rings'

describe('<Rings /> component', () => {
	it('renders and matches snapshot', () => {
		const { container } = render(<Rings />)
		expect(container).not.toBeNull()
		expect(container).toMatchSnapshot()
	})
})
