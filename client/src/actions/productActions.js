import axios from "axios";
import { GET_PRODUCTS, LOAD_PRODUCTS } from "./types";

export const getProducts = () => dispatch => {
  dispatch({ type: LOAD_PRODUCTS });

  axios.get("/api/products").then(res =>
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data
    })
  );
};
