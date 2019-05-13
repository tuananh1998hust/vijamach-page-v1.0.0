import {
  GET_PRODUCTS,
  LOAD_PRODUCTS,
  DETAIL_PRODUCT,
  ADD_TO_CART,
  DELETE_CART_ITEM,
  CLEAR_CARTS
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
      let updateAddToCarts = state.carts.concat(action.payload);
      localStorage.setItem("carts", JSON.stringify(updateAddToCarts));
      return {
        ...state,
        carts: updateAddToCarts
      };

    case DELETE_CART_ITEM:
      let updateDeleteCarts = state.carts.filter(
        cart => cart._id !== action.payload
      );
      localStorage.setItem("carts", JSON.stringify(updateDeleteCarts));
      return {
        ...state,
        carts: updateDeleteCarts
      };

    case CLEAR_CARTS:
      localStorage.removeItem("carts");
      return {
        ...state,
        carts: []
      };

    default:
      return state;
  }
}
