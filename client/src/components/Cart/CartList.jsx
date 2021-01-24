import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/cartAction";
import PropTypes from "prop-types";
import CartListItem from "./CartListItem";

/**
 * Cartlist component displays the list of books present in the cart
 *
 * @param {*} props
 */
function CartList(props) {
  /**
   * List of books is cart
   */
  const [cart, setCart] = useState([]);
  /**
   * total amount for the books present in the cart
   */
  const [total, setTotal] = useState(0);

  /**
   * Hook to update the cart list and calculate the total amount
   */
  useEffect(() => {
    if (props.cart) {
      let cartList = Object.values(props.cart);
      setCart(cartList);

      let sum = 0;
      for (let i = 0; i < cartList.length; i++) {
        sum += cartList[i].price * cartList[i].count;
      }
      setTotal(sum);
    }
  }, [props.cart]);

  /**
   * Helper function to render the cart list
   */
  const renderCartList = () => {
    return (
      <React.Fragment>
        {cart.map(book => (
          <div key={book.bookID}>
            <CartListItem book={book} />
          </div>
        ))}
      </React.Fragment>
    );
  };

  return (
    <div>
      <div>
        <h3 style={{ margin: "5px 0 0 0" }}>Books on cart</h3>
      </div>
      <div>{renderCartList()}</div>
      <h3>Total: {total}</h3>
    </div>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.cartList
});

export default connect(mapStateToProps, { addToCart, removeFromCart })(
  CartList
);
