import { FETCH_BOOK_LIST_DATA } from "./type";
import axios from "axios";

/**
 * Action creator to load the book list from API and storing it in the redux
 */
export const fetchBookList = () => async dispatch => {
  try {
    const response = await axios.get(
      `https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json`
    );
    //console.log(response.data);
    dispatch({
      type: FETCH_BOOK_LIST_DATA,
      payload: response.data
    });
  } catch (err) {
    console.log(err);
  }
};
