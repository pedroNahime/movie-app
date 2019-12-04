import PropTypes from 'prop-types'
import React from 'react'
import { Content } from './styles'

const Movie = props => {
  const renderMovies = () => {
    if (props.movie.media_type === 'movie') {
      return (
        <>
          <img
            src={`https://image.tmdb.org/t/p/original/${props.movie.poster_path}`}
            alt={props.movie.title}
          />
          <strong>{props.movie.title}</strong>
        </>
      )
    } else if (props.movie.media_type === 'tv') {
      return (
        <>
          <img
            src={`https://image.tmdb.org/t/p/original/${props.movie.poster_path}`}
            alt={props.movie.title}
          />
          <strong>{props.movie.name}</strong>
        </>
      )
    }
  }
  return <Content>{renderMovies()}</Content>
}

export default Movie

Movie.propTypes = {
  movie: PropTypes.object.isRequired
}
