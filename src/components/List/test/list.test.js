import React from 'react'
import { Creators as MoviesActions } from '../../../store/ducks/movies'
import { render } from '@testing-library/react'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from '../index'
import List from '../index'

describe('<List component/>', () => {
  describe('#mapDispatchToProps', () => {
    let dispach
    let props

    beforeEach(() => {
      dispach = jest.fn()
      props = mapDispatchToProps(dispach)
    })
    test('binds actions', () => {
      props.getMovie()
      expect(dispach).toHaveBeenCalledWith(MoviesActions.getMovie())
    })
  })

  describe('#mapStateToProps', () => {
    let state

    beforeEach(() => {
      state = { movies: [{ id: 1, title: 'someTitle', name: 'someName' }] }
    })

    test('should return state with movies', () => {
      expect(mapStateToProps(state).movies[0].id).toEqual(1)
    })
  })

  test('render component', () => {
    let l = {
      getMovie: jest.fn(),
      movies: {
        data: { results: [{ id: 1, title: 'someTitle', name: 'someName' }] }
      }
    }
    const mockStore = configureStore()
    let store = mockStore(l)
    let { container } = render(
      <Provider store={store}>
        <List />
      </Provider>
    )
    expect(container).toMatchSnapshot()
  })
})
