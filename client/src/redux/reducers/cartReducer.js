import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/type";

const initialState = {
  cartList: {}
};

/**
 * Reducer to store data into the redux store
 * @param {object} state
 * @param {object} actions
 */
export default (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartList: addBook(state.cartList, actions.payload)
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartList: removeBook(state.cartList, actions.payload)
      };
    default:
      return {
        ...state
      };
  }
};

/**
 * Helper to add book to cart
 *
 * @param {object} selectedUsers
 * @param {object} newUser
 */
const addBook = (cartList, newBook) => {
  console.log(cartList[newBook.bookID]);
  if (cartList[newBook.bookID]) {
    cartList[newBook.bookID] = {
      ...cartList[newBook.bookID],
      count: cartList[newBook.bookID].count + 1
    };
  } else {
    cartList[newBook.bookID] = { ...newBook, count: 1 };
  }

  return { ...cartList };
};

/**
 * Helper to remove books from cart
 *
 * @param {object} selectedUsers
 * @param {object} newUser
 */
const removeBook = (cartList, newBook) => {
  if (cartList[newBook.bookID].count > 1) {
    cartList[newBook.bookID] = {
      ...cartList[newBook.bookID],
      count: cartList[newBook.bookID].count - 1
    };
  } else {
    delete cartList[newBook.bookID];
  }
  return { ...cartList };
};
