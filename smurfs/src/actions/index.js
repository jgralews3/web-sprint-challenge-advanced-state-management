import axios from 'axios';

export const ADD_SMURF = "ADD_SMURF";
export const GET_SMURFS = "GET_SMURFS";
export const FETCHING_SMURF_START = "FETCHING_SMURF_START"
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS"
export const FETCHING_SMURF_ERROR = "FETCHING_SMURF_ERROR"

export const newSmurf = (smurf) => {
    return {type: ADD_SMURF, payload: smurf}
}

export const getSmurfs = () => (dispatch) => {
    console.log("getSmurfs action");
    dispatch({ type: FETCHING_SMURF_START });
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
          console.log(res);
        dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: FETCHING_SMURF_ERROR,
          payload: `${err}`
        });
        console.log(err);
      });
  };