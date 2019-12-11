import PropTypes from 'prop-types'
import React, { useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as MoviesAction } from '../../store/ducks/movies'
import { connect } from 'react-redux'
import Movie from '../Movie'
import { Container, Title, Wrapper } from './styles.js'

const List = props => {
  const dispatch = useDispatch()
  const initFetchMethod = useCallback(() => {
    return dispatch(props.getMovie())
  }, [dispatch])
  useEffect(() => {
    initFetchMethod()
  }, [initFetchMethod])
  return (
    <Container>
      <Title>Movies</Title>
      <Wrapper>
        {props.movies.data.results
          ? props.movies.data.results.map(movie => (
              <Movie key={movie.id} movie={movie} />
            ))
          : null}
      </Wrapper>
    </Container>
  )
}

export const mapStateToProps = state => ({
  movies: state.movies
})

export const mapDispatchToProps = dispatch =>
  bindActionCreators(MoviesAction, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(List)

List.propTypes = {
  getMovie: PropTypes.func.isRequired,
  movies: PropTypes.object.isRequired
}
