import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Creators as MoviesAction} from "../../store/ducks/movies";

export const Main = (props) => {
    useEffect(() => {
        props.getMovie();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            {props.movies.data.results ? props.movies.data.results.map(movie => <h1 key={movie.id}>{movie.title}</h1>) : null}
        </>
    )
};

const mapStateToProps = state => ({
    movies: state.movies
});

const mapDispatchToProps = dispatch => bindActionCreators(MoviesAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main)