import {
  GET_PRODUCTS,
  LOAD_PRODUCTS,
  DETAIL_PRODUCT,
  ADD_TO_CART,
  DELETE_CART_ITEM
} from "../actions/types";

const initialState = {
  products: [],
  loading: false,
  detailProduct: [],
  carts: localStorage.getItem("carts")
    ? JSON.parse(localStorage.getItem("carts"))
    : []
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

    case ADD_TO_CART:
      let updateCarts = state.carts.concat(action.payload);
      localStorage.setItem("carts", JSON.stringify(updateCarts));
      return {
        ...state,
        carts: updateCarts
      };

    case DELETE_CART_ITEM:
      return {
        ...state,
        carts: state.carts.filter(cart => cart._id !== action.payload)
      };

    default:
      return state;
  }
}
