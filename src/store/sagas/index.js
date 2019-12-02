import { all, takeLatest } from 'redux-saga/effects';

import { Types as MovieTypes } from '../ducks/movies';
import { getMovie } from './movies';

export default function* rootSaga() {
    yield all([takeLatest(MovieTypes.GET_MOVIE, getMovie)]);
}