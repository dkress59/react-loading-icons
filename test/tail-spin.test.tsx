import { render } from '@testing-library/react'
import React from 'react'

import TailSpin from '../src/components/tail-spin'

describe('<TailSpin /> component', () => {
	it('renders and matches snapshot', () => {
		const { container } = render(<TailSpin />)
		expect(container).not.toBeNull()
		expect(container).toMatchSnapshot()
	})
})
