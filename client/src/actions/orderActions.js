import axios from "axios";
import { ADD_ORDER, GET_ERRORS, CLEAR_CARTS } from "./types";

export const addOrder = newOrder => dispatch => {
  axios
    .post("/api/orders", newOrder)
    .then(res => {
      dispatch({
        type: ADD_ORDER,
        payload: res.data
      });

      dispatch({ type: CLEAR_CARTS });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
