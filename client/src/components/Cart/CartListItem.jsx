import React from "react";
import style from "./cartList.module.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/cartAction";

/**
 * CartListItem component renders the individual item present in the cart
 *
 * @param {*} props
 */
function CartListItem(props) {
  const { book } = props;
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
          <div className={style.addCrtIcn}>
            <AddIcon
              style={{ cursor: "pointer" }}
              onClick={() => props.addToCart(book)}
            />
            <div style={{ width: "100px", textAlign: "center" }}>
              {book.count}
            </div>
            <RemoveIcon
              style={{ cursor: "pointer" }}
              onClick={() => props.removeFromCart(book)}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default connect(null, { addToCart, removeFromCart })(CartListItem);
