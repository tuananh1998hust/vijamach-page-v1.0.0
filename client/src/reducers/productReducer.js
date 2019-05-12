import { GET_PRODUCTS, LOAD_PRODUCTS, DETAIL_PRODUCT } from "../actions/types";

const initialState = {
  products: [],
  loading: false,
  detailProduct: []
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

    case DETAIL_PRODUCT:
      return {
        ...state,
        detailProduct: [action.payload],
        loading: false
      };

    default:
      return state;
  }
}
