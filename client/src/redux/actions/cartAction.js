import { ADD_TO_CART, REMOVE_FROM_CART } from "./type";

export const addToCart = book => dispatch => {
  dispatch({
    type: ADD_TO_CART,
    payload: book
  });
};

export const removeFromCart = book => dispatch => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: book
  });
};
