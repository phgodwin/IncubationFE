import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Logo from "../items/Logo.png"


function CartItems() {
//  there are two main parts: data fetching using Axios and rendering the cart items.

// This initializes a state variable called cart with an empty string.
//  The setCart function will be used to update this state.
    const [cart, setCart] = useState("");
  
    
// The useEffect hook is used to fetch data when the component mounts. 
// It makes an HTTP GET request to http://localhost:8081/cart/get/1.

    useEffect(() => {
      axios.get("http://localhost:8081/cart/get/1")
        .then(response => {
          // If the request is successful, the response data’s 
          // items property is stored in the cart state using setCart(response.data.items).
          setCart(response.data.items);
          console.log("http://localhost:8081/cart/get/1", response);
        })
        // Any errors are caught and logged to the console.
        .catch(err => console.error(err));
    }, []);
//An empty array cartItems is created to hold JSX elements representing individual cart items.
 const cartItems = [];
// A loop iterates over each item in the cart state.
// For each item (cItem), the following JSX is added to cartItems:
 for (const cItem of cart) {

// watermark, image,name, price,quantity
  cartItems.push (
    <div> 
           
              <div style={{ position: "absolute", top: 10, right: 10, transform: "scale(2)" }}>
          <img src={Logo} alt="Watermark" style={{ opacity: 0.65, width: 50 }} />
        </div>
            <img src={cItem.uploadImages} className="item-images" alt="itemImage" />
            
            <br />
            <h4>{cItem.name}</h4>
            <h6> £ {cItem.price}</h6>
            Items left: {cItem.quantity}
            <br />
            <br />
  
  
            </div>
  )
 }

    return (<div>
        {cartItems}
        </div>
      );
    }

export default CartItems;