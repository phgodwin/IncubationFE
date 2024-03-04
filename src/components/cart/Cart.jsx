import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import CartItems from "./CartItems";

function Cart() {
  return (
    <div className="cart-container">
      <h2>
        <IoBagHandleOutline />
         My Cart
         <CartItems />
      </h2>
    </div>
  );
}

export default Cart;
