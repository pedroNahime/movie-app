import React from 'react'
import { render } from '@testing-library/react'
import Header from '../index'

describe('<Header/>', () => {
  test('render the component', () => {
    const { container } = render(<Header />)
    expect(container).toMatchSnapshot()
  })
})
