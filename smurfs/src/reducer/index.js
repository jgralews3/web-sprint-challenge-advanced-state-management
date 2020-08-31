import axios from 'axios';
import {ADD_SMURF, FETCHING_SMURF_ERROR, FETCHING_SMURF_START, FETCHING_SMURF_SUCCESS} from '../actions'


const initialState = []

console.log(initialState)

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_SMURF_START:
            console.log("Get Smurfs Called");
            const smurfs = 
                axios.get("http://localhost.3333/smurfs")
                .then((res) => {return res.data})
                .catch(err => console.log(err));
            console.log(smurfs)
            return {...state, smurfs}
        case ADD_SMURF:
            console.log("called");
            console.log(state)
            return {...state, };
        case FETCHING_SMURF_START:
            console.log("fetching smurfs");
             return {
                  ...state,
                };
              case FETCHING_SMURF_SUCCESS:
                  console.log("payload", action.payload)
                return {...state, smurf: action.payload};
              case FETCHING_SMURF_ERROR:
                return { ...state, error: action.payload, isFetching: false };
        default:
            return state;
    }
}