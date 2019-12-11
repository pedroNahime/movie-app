import Creators, {
  MoviesTypes,
  INITIAL_STATE,
  get,
  show,
  success,
  error,
  reducers
} from '../index'

describe('Types', () => {
  test('should export the expected action types', () => {
    expect(MoviesTypes).toEqual({
      GET_MOVIE: 'GET_MOVIE',
      SHOW_MOVIE: 'SHOW_MOVIE',
      SUCCESS_MOVIE: 'SUCCESS_MOVIE',
      ERROR_MOVIE: 'ERROR_MOVIE'
    })
  })
})

describe('Creators', () => {
  describe('getMovie', () => {
    test('should return the expected action', () => {
      expect(Creators.getMovie()).toEqual({
        type: MoviesTypes.GET_MOVIE
      })
    })
  })
  describe('showMovie', () => {
    test('should return the expected action', () => {
      expect(Creators.showMovie()).toEqual({
        type: MoviesTypes.SHOW_MOVIE
      })
    })
  })
  describe('successMovie', () => {
    test('should return the expected action', () => {
      expect(Creators.successMovie()).toEqual({
        type: MoviesTypes.SUCCESS_MOVIE
      })
    })
  })
  describe('successMovie', () => {
    test('should return the expected action', () => {
      expect(Creators.successMovie()).toEqual({
        type: MoviesTypes.SUCCESS_MOVIE
      })
    })
  })
  describe('errorMovie', () => {
    test('should return the expected action', () => {
      expect(Creators.errorMovie()).toEqual({
        type: MoviesTypes.ERROR_MOVIE
      })
    })
  })
})

describe('INITIAL_STATE', () => {
  test('should set the initial state ', () => {
    expect(INITIAL_STATE).toEqual({
      data: [],
      loading: false,
      search: '',
      error: ''
    })
  })
})

describe('reducers', () => {
  describe('get', () => {
    test('should do nothing (Only call saga)', () => {
      expect(get(INITIAL_STATE, {})).toEqual({
        ...INITIAL_STATE,
        loading: true
      })
    })
    test('should ignore extra args', () => {
      expect(get(INITIAL_STATE, { extra: 'arg' })).toEqual({
        ...INITIAL_STATE,
        loading: true
      })
    })
  })

  describe('show', () => {
    test('should get one movie', () => {
      expect(show(INITIAL_STATE, { search: 'some_movie' })).toEqual({
        ...INITIAL_STATE,
        search: 'some_movie',
        loading: true
      })
    })
    test('should ignore extra args', () => {
      expect(
        show(INITIAL_STATE, { search: 'some_movie', extra: 'some_extra_value' })
      ).toEqual({
        ...INITIAL_STATE,
        search: 'some_movie',
        loading: true
      })
    })
  })
  describe('success', () => {
    test('should set movies', () => {
      expect(
        success(INITIAL_STATE, { data: [{ movie: { title: 'title' } }] })
      ).toEqual({
        ...INITIAL_STATE,
        loading: false,
        data: [{ movie: { title: 'title' } }]
      })
    })
    test('should ignore extra args', () => {
      expect(
        success(INITIAL_STATE, {
          data: [{ movie: { title: 'title' } }],
          extra: 'some_extra_value'
        })
      ).toEqual({
        ...INITIAL_STATE,
        loading: false,
        data: [{ movie: { title: 'title' } }]
      })
    })
    describe('error', () => {
      test('Should set error to true', () => {
        expect(error(INITIAL_STATE, { error: 'some_error' })).toEqual({
          ...INITIAL_STATE,
          loading: false,
          error: 'some_error'
        })
      })
      test('should ignore extra args', () => {
        expect(
          error(INITIAL_STATE, {
            error: 'some_error',
            extra: 'some_extra_value'
          })
        ).toEqual({
          ...INITIAL_STATE,
          loading: false,
          error: 'some_error'
        })
      })
    })
  })
})

describe('reducers', () => {
  test('should return initial state if passed nothing', () => {
    expect(reducers()).toEqual(INITIAL_STATE)
  })
  test('should route SHOW_MOVIE to getMovie', () => {
    expect(reducers(INITIAL_STATE, Creators.getMovie())).toEqual({
      ...INITIAL_STATE,
      loading: true
    })
  })
  test('should route GET_MOVIE to showMovie', () => {
    expect(reducers(INITIAL_STATE, Creators.showMovie('some_movie'))).toEqual({
      ...INITIAL_STATE,
      search: 'some_movie',
      loading: true
    })
  })
  test('should route SUCCESS_MOVIE to successUser', () => {
    expect(
      reducers(
        INITIAL_STATE,
        Creators.successMovie([{ movie: { title: 'title' } }])
      )
    ).toEqual({
      ...INITIAL_STATE,
      loading: false,
      data: [{ movie: { title: 'title' } }]
    })
  })
  test('should route ERROR_MOVIE to errorMovie', () => {
    expect(reducers(INITIAL_STATE, Creators.errorMovie('some_error'))).toEqual({
      ...INITIAL_STATE,
      loading: false,
      error: 'some_error'
    })
  })
})
