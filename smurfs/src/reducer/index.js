import axios from 'axios';
import {ADD_SMURF, FETCHING_SMURF_ERROR, FETCHING_SMURF_START, FETCHING_SMURF_SUCCESS, POSTING_SMURF_ERROR, POSTING_SMURF_START, POSTING_SMURF_SUCCESS} from '../actions'


const initialState = []

console.log(initialState)

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_SMURF_START:
            return state;
        case FETCHING_SMURF_SUCCESS:
            console.log("payload", action.payload)
            return [...state, action.payload];
        case FETCHING_SMURF_ERROR:
            return { ...state, error: action.payload, isFetching: false };

        case POSTING_SMURF_START:
            return state;
        case POSTING_SMURF_SUCCESS:
            console.log("payload", action.payload)
            return [...state, action.payload];
        case POSTING_SMURF_ERROR:
            return { ...state, error: action.payload, isFetching: false };

        default:
            return state;
    }
}