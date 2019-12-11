import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
  getMovie: [],
  showMovie: ['search'],
  successMovie: ['data'],
  errorMovie: ['error']
})

export const MoviesTypes = Types
export default Creators
/**
 * Handlers
 */
export const INITIAL_STATE = {
  data: [],
  loading: false,
  search: '',
  error: ''
}

export const get = (state = INITIAL_STATE) => ({
  ...state,
  loading: true
})
export const show = (state = INITIAL_STATE, action) => ({
  ...state,
  search: action.search,
  loading: true
})
export const success = (state = INITIAL_STATE, action) => ({
  ...state,
  data: action.data,
  loading: false
})
export const error = (state = INITIAL_STATE, action) => ({
  ...state,
  error: action.error,
  loading: false
})

/**
 * Reducer
 */
export const reducers = createReducer(INITIAL_STATE, {
  [Types.GET_MOVIE]: get,
  [Types.SHOW_MOVIE]: show,
  [Types.SUCCESS_MOVIE]: success,
  [Types.ERROR_MOVIE]: error
})
