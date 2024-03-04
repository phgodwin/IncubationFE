import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Logo from "../items/Logo.png"

function CartItems() {

    const [cartItems, setCartItems] = useState([]);


    useEffect(() => {
      axios.get("http://localhost:8081/item")
        .then(response => {
          setCartItems(response.data);
          console.log("http://localhost:8081/item", response);
        })
        .catch(err => console.error(err));
    }, []);



    return (
        <div className="container">
        {cartItems.filter(cartItem => cartItem.cart?.id ===1 ).map(cartItem => (
          <Card key={cartItem.id}
            className="col-sm-6 col-md-4 col-lg-3 m-4"
            style={{ textAlign: "center" }}>
              <div style={{ position: "absolute", top: 10, right: 10, transform: "scale(2)" }}>
          <img src={Logo} alt="Watermark" style={{ opacity: 0.65, width: 50 }} />
        </div>
            <img src={cartItem.uploadImages} className="item-images" alt="itemImage" />
            
            <br />
            <h4>{cartItem.name}</h4>
            <h6> £ {cartItem.price}</h6>
            Items left: {cartItem.quantity}
            <br />
            <br />
  
  
            {/* <Button variant="danger" > <strong><MdOutlineShoppingCart />  Add to basket </strong> </Button> */}
          </Card>
        ))}
      </div>
      );
}

export default CartItems;