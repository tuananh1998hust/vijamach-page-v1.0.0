import { GET_PRODUCTS, LOAD_PRODUCTS } from "../actions/types";

const initialState = {
  products: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false
      };

    case LOAD_PRODUCTS:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
}
