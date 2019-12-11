import React from 'react'
import { render } from '@testing-library/react'
import Movie from '../index'

const mockProps = {
  movie: {
    media_type: 'movie',
    poster_path: 'some_path',
    title: 'some_title'
  }
}

describe('<Header/>', () => {
  test('render the component', () => {
    const { container } = render(<Movie {...mockProps} />)
    expect(container).toMatchSnapshot()
  })
})
