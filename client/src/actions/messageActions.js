import axios from "axios";
import { ADD_MESSAGES, GET_ERRORS } from "./types";

export const addMessage = newMessage => dispatch => {
  axios
    .post("/api/messages", newMessage)
    .then(res =>
      dispatch({
        type: ADD_MESSAGES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
