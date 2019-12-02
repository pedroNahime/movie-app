import {call, put} from 'redux-saga/effects'
import api from '../../services/api'
import {Creators as MoviesActions} from "../ducks/movies";

const key = '';

export function* getMovie() {
    try {
        const {data} = yield call(api.get, `trending/all/day?api_key=${key}`);
        yield put(MoviesActions.successMovie(data))
    } catch (e) {
        const {status_message, status_code} = e.response.data;
        const response = {
            status: e.response.status,
            data: {
                status_message,
                status_code
            }
        };
        yield put(MoviesActions.errorMovie(response))
    }
}