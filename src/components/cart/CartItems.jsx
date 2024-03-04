import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Logo from "../items/Logo.png"


function CartItems() {

    const [cart, setCart] = useState("");
  
    


    useEffect(() => {
      axios.get("http://localhost:8081/cart/get/1")
        .then(response => {
          setCart(response.data.items);
          console.log("http://localhost:8081/cart/get/1", response);
        })
        .catch(err => console.error(err));
    }, []);

 const cartItems = [];

 for (const cItem of cart) {


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
  
  
            {/* <Button variant="danger" > <strong><MdOutlineShoppingCart />  Add to basket </strong> </Button> */}
            </div>
  )
 }

    return (
        {cartItems}
      );
    }

export default CartItems;