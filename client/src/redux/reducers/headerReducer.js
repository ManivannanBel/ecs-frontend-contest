import { SEARCH } from "../actions/type";

const initialState = {
  searchQuery: ""
};

/**
 * Reducer to store data into the redux store
 * @param {object} state
 * @param {object} actions
 */
export default (state = initialState, actions) => {
  switch (actions.type) {
    case SEARCH:
      return {
        ...state,
        searchQuery: actions.payload
      };
    default:
      return {
        ...state
      };
  }
};
