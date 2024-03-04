// import React from "react";: This line imports the React library, which is essential for creating React components.

import React from "react";
// This line imports the IoBagHandleOutline icon from the react-icons/io5 package.
import { IoBagHandleOutline } from "react-icons/io5";

function Cart() {
  return (
    // <div className="cart-container">: This creates a div element with the CSS class name “cart-container”.
    <div className="cart-container">
      <h2>
        <IoBagHandleOutline />
         My Cart
      </h2>
    </div>
  );
}
// This exports the Cart component as the default export from this module. It means that other parts of your application can import and use this component.
export default Cart;
