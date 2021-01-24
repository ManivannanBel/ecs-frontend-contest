import { SEARCH } from "./type";

/**
 * Search book action creator
 *
 * @param {string} searchQuery
 */
export const searchBooks = searchQuery => dispatch => {
  dispatch({
    type: SEARCH,
    payload: searchQuery
  });
};
