import { render } from '@testing-library/react'
import React from 'react'

import Audio from '../src/components/audio'

describe('<Audio /> component', () => {
	it('renders and matches snapshot', () => {
		const { container } = render(<Audio />)
		expect(container).not.toBeNull()
		expect(container).toMatchSnapshot()
	})
})
