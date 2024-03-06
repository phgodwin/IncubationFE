import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import CartItems from "./CartItems";

function Cart() {
  return (
    <div>
    <div className="cart-container" >
      <h2>
        <IoBagHandleOutline size={50}/>
         My Cart
         </h2>
</div>
<div className="cart-container">
         <CartItems />
    </div>
    </div>
  );
}

export default Cart;
