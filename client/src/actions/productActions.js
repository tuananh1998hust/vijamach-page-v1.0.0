import axios from "axios";
import {
  GET_PRODUCTS,
  LOAD_PRODUCTS,
  DETAIL_PRODUCT,
  ADD_TO_CART,
  DELETE_CART_ITEM
} from "./types";

export const getProducts = () => dispatch => {
  dispatch({ type: LOAD_PRODUCTS });

  axios.get("/api/products").then(res =>
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data
    })
  );
};

export const loadDetailProduct = id => dispatch => {
  dispatch({ type: LOAD_PRODUCTS });

  axios.get(`/api/products/${id}`).then(res =>
    dispatch({
      type: DETAIL_PRODUCT,
      payload: res.data
    })
  );
};

export const addToCart = product => dispatch => {
  dispatch({
    type: ADD_TO_CART,
    payload: product
  });
};

export const deleteCartItem = id => dispatch => {
  dispatch({
    type: DELETE_CART_ITEM,
    payload: id
  });
};
