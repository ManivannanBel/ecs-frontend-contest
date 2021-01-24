import React from "react";
import Header from "../../components/Header/Header";
import CartList from "../../components/Cart/CartList";

function CartPage() {
  return (
    <div>
      <Header />
      <div style={{ marginTop: "70px" }}></div>
      <CartList />
    </div>
  );
}

export default CartPage;
