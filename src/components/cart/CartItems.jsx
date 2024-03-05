import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Logo from "../items/Logo.png"
import { useParams } from "react-router";


function CartItems() {

  const [cart, setCart] = useState("");
  const params = useParams();
  const [cartId, setCartId] = useState(null);


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


    cartItems.push(
      <Card><div style={{ display: 'flex', alignItems: 'center', padding: '1rem', maxWidth: '200px' }}>
      <img src={cItem.image} className="item-images" alt="itemImage" style={{ flex: 1 }} />
      <div style={{ flex: 2, marginLeft: '1rem' }}>
        <h6>{cItem.name}</h6>
        <h4>£ {cItem.price}</h4>
        <button className="my-button-create" onClick={() => RemoveFromCart(cItem.id)}>
X        </button>
      </div>
    </div>
    </Card>

    )

    function RemoveFromCart(id){

      axios.patch("http://localhost:8081/item/updateCartItem/" + id)
      .then(response => {
      })
    
      .catch(err => console.error(err))
    };
  }

  return (  <div>
    {cartItems}
    </div>
  );
}

export default CartItems;