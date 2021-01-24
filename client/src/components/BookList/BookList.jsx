import React, { useState, useEffect } from "react";
import style from "./BookList.module.css";
import { connect } from "react-redux";
import { fetchBookList } from "../../redux/actions/booksAction";
import PropTypes from "prop-types";
import BookListItem from "./BookListItem";

/**
 * BookList component displays the list of available books from the API
 *
 * @param {object} props
 */
function BookList(props) {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("none");
  const [sortOrder, setSortOrder] = useState("ascending");
  const [cart, setCart] = useState({});
  /**
   * Hook to load the data from API only onlce while opening the app
   */
  useEffect(() => {
    props.fetchBookList();
  }, []);

  /**
   * Hook to sort the list
   */
  useEffect(() => {
    if (sortBy !== "none") {
      let order = sortOrder === "ascending" ? 1 : -1;

      books.sort((a, b) => order * (a[sortBy] > b[sortBy] ? 1 : -1));

      setBooks([...books]);
    }
  }, [sortBy, sortOrder]);

  /**
   * Hook to update the search query from the redux store
   */
  useEffect(() => {
    //If the search query is present, we display only the matching results, else all the results
    if (props.searchQuery !== "") {
      const query = props.searchQuery;
      setSearchQuery(query);

      const searchedList = props.books.filter(book => {
        const title = book.title.toString();
        return title.search(query) !== -1;
      });

      setBooks([...searchedList]);
    } else if (props.books.length > 0) {
      setBooks(props.books);
    }
  }, [props.searchQuery, props.books]);

  useEffect(() => {
    setCart(props.cart);
  }, [props.cart]);

  /**
   * Helper function to render book list
   * The book object is passed as prop to BookListItem component
   * IsInCart is passed as prop to display if the item is present in the cart already
   */
  const renderBookList = () => {
    return (
      <React.Fragment>
        {books.map(book => {
          const isInCart = cart[book.bookID];
          return (
            <div key={book.bookID}>
              <BookListItem book={book} isInCart={isInCart} />
            </div>
          );
        })}
      </React.Fragment>
    );
  };

  return (
    <div>
      <div>
        <h3 style={{ margin: "5px 0 0 0" }}>Books available</h3>
        <div>
          <span>Sort by </span>
          <select onChange={e => setSortBy(e.target.value)}>
            <option value="none">None</option>
            <option value="title">Title</option>
            <option value="authors">Author</option>
            <option value="price">Price</option>
            <option value="average_rating">Ratings</option>
            <option value="ratings_count">No of Rating</option>
            <option value="language_code">Language</option>
          </select>
          <select onChange={e => setSortOrder(e.target.value)}>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
      </div>
      <div>{renderBookList()}</div>
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  searchQuery: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  books: state.books.bookList,
  searchQuery: state.header.searchQuery,
  cart: state.cart.cartList
});

export default connect(mapStateToProps, { fetchBookList })(BookList);
