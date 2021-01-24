import React from "react";
import style from "./BookList.module.css";
import Rating from "./Rating";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { addToCart, removeFromCart } from "../../redux/actions/cartAction";
import { connect } from "react-redux";
/**
 * BookListItem component renders individual books details
 *
 * @param {object} props
 */
function BookListItem(props) {
  const { book, isInCart } = props;

  return (
    <React.Fragment>
      <div className={style.card}>
        <h4 className={style.bkTtl}>{book.title}</h4>
        <h5 className={style.bkAuth}>By {book.authors}</h5>
        <div className={style.dtlWrpr}>
          <div>
            <div className={style.othDtls}>ISBN: {book.isbn}</div>
            <div className={style.othDtls}>Language: {book.language_code}</div>
            <h4 className={style.price}>$ {book.price}</h4>
          </div>
          <div>
            <div>
              <Rating
                average_rating={book.average_rating}
                ratings_count={book.ratings_count}
              />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div className={style.addCrtIcn}>
              <AddShoppingCartIcon onClick={() => props.addToCart(book)} />
            </div>
            {isInCart && (
              <React.Fragment>
                {" "}
                <h4 style={{ margin: "0 5px 0 5px" }}>
                  {isInCart.count} item in cart
                </h4>
                <div className={style.addCrtIcn}>
                  <RemoveShoppingCartIcon
                    onClick={() => props.removeFromCart(book)}
                  />
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default connect(null, { addToCart, removeFromCart })(BookListItem);
