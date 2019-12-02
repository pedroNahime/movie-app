import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
    getMovie: [],
    showMovie: ["search"],
    successMovie: ["data"],
    errorMovie: ["error"]
});

/**
 * Handlers
 */
const INITIAL_STATE = {
    data: [],
    loading: false,
    search: '',
    error: ''
};

const get = (state = INITIAL_STATE) => ({
        ...state, loading: true
});
const show = (state = INITIAL_STATE, action) => ({
    ...state, action: action.search, loading: true
});
const success = (state = INITIAL_STATE, action) => ({
    ...state, data: action.data, loading: false
});
const error = (state = INITIAL_STATE, action) => ({
    ...state, error: action.error, loading: false
});

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
    [Types.GET_MOVIE]: get,
    [Types.SHOW_MOVIE]: show,
    [Types.SUCCESS_MOVIE]: success,
    [Types.ERROR_MOVIE]: error,
});
