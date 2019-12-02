import {call, put} from 'redux-saga/effects'
import api from '../../services/api'
import {Creators as MoviesActions} from "../ducks/movies";

const key = '';

export function* getMovie() {
    try {
        const {data} = yield call(api.get, `trending/all/day?api_key=${key}`);
        yield put(MoviesActions.successMovie(data))
    } catch (e) {
        yield put(MoviesActions.errorMovie(e.response))
    }
}