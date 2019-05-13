import { ADD_ORDER, GET_ERRORS } from "../actions/types";

const inititalState = {
  orders: [],
  errors: []
};

export default function(state = inititalState, action) {
  switch (action.type) {
    case ADD_ORDER:
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
