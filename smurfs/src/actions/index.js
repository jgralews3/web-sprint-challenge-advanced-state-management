import axios from 'axios';

export const ADD_SMURF = "ADD_SMURF";
export const GET_SMURFS = "GET_SMURFS";
export const FETCHING_SMURF_START = "FETCHING_SMURF_START"
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS"
export const FETCHING_SMURF_ERROR = "FETCHING_SMURF_ERROR"
export const POSTING_SMURF_START = "POSTING_SMURF_START"
export const POSTING_SMURF_SUCCESS = "POSTING_SMURF_SUCCESS"
export const POSTING_SMURF_ERROR = "POSTING_SMURF_ERROR"

export const newSmurf = (smurf) => (dispatch) => {
    console.log("new smurf payload: ", smurf)
    dispatch({ type: POSTING_SMURF_START });
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then((res) => {
          console.log("Posting res: ", res.data);
        dispatch({ type: POSTING_SMURF_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: POSTING_SMURF_ERROR,
          payload: `${err}`
        });
        console.log(err);
      });
  };

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
          type: FETCHING_SMURF_ERROR
        //   ,
        //   payload: `${err}`
        });
        console.log(err);
      });
  };