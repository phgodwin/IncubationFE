import axios from "axios";
import { useEffect, useState } from "react";
import Logo from "../items/Logo.png"


function CartItems() {

  const [cart, setCart] = useState("");
 

  function getCart() {
    axios.get("http://localhost:8081/cart/get/1")
      .then(response => {
        setCart(response.data.items);
        console.log("http://localhost:8081/cart/get/1", response);
      })
      .catch(err => console.error(err));
  }
  useEffect(() => getCart(), []);


  const cartItems = [];
  let totalPrice = 0;

  for (const cItem of cart) {

    totalPrice=totalPrice+cItem.price;
   
    cartItems.push(
      <div>

        <div style={{ position: "absolute", top: 10, right: 10, transform: "scale(2)" }}>
          <img src={Logo} alt="Watermark" style={{ opacity: 0.65, width: 50 }} />
        </div>
        <img src={cItem.image} className="item-images" alt="itemImage" />
        <br />
        <h4>{cItem.name}</h4>
        <h6> £ {cItem.price}</h6>
        <br />
        <button onClick={() => RemoveFromCart(cItem.id)}>Remove From Cart</button>
        <br />


        {/* <Button variant="danger" > <strong><MdOutlineShoppingCart />  Add to basket </strong> </Button> */}
      </div>
    )



    function RemoveFromCart(id) {

      axios.patch("http://localhost:8081/item/updateCartItem/" + id)
        .then(response => {
          getCart();
        })

        .catch(err => console.error(err))
    };
  }

  return (<div>
    <h4>Total Cart Price: £{parseFloat(totalPrice).toFixed(2)}</h4>
    {cartItems}
  </div>
  );
}

export default CartItems;