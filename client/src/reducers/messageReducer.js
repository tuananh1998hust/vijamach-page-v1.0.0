import { ADD_MESSAGES, GET_ERRORS } from "../actions/types";

const inititalState = {
  messages: [],
  errors: []
};

export default function(state = inititalState, action) {
  switch (action.type) {
    case ADD_MESSAGES:
      return state;

    case GET_ERRORS:
      return {
        ...state,
        errors: action.payload.msg
      };
    default:
      return state;
  }
}
