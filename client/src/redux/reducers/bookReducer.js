import { FETCH_BOOK_LIST_DATA } from "../actions/type";

const initialState = {
  bookList: []
};

/**
 * Reducer to store data into the redux store
 * @param {object} state
 * @param {object} actions
 */
export default (state = initialState, actions) => {
  switch (actions.type) {
    case FETCH_BOOK_LIST_DATA:
      return {
        ...state,
        bookList: actions.payload
      };
    default:
      return {
        ...state
      };
  }
};
