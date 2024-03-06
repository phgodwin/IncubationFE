import axios from "axios";
import { useEffect, useState } from "react";
import Logo from "../items/Logo.png";
import { Card } from "react-bootstrap";
import { IoTrashBin } from "react-icons/io5";
import Table from "react-bootstrap/Table";

function CartItems() {
  const [cart, setCart] = useState("");

  function getCart() {
    axios
      .get("http://localhost:8081/cart/get/1")
      .then((response) => {
        setCart(response.data.items);
        console.log("http://localhost:8081/cart/get/1", response);
      })
      .catch((err) => console.error(err));
  }
  useEffect(() => getCart(), []);

  const cartItems = [];
  let totalPrice = 0;
  let totalItems = 0;

  for (const cItem of cart) {
    totalPrice = totalPrice + cItem.price;
    totalItems = cart.length;

    cartItems.push(
      <div>
        <Table>
          <tbody>
            <tr width={50}>
              <td>
                <img
                  src={cItem.image}
                  width={1}
                  height={1}
                  className="item-images-cart"
                  alt="itemImage"
                />
              </td>
              <td>
                <h6>{cItem.name}</h6>
              </td>
              <td>
                <h6>£ {cItem.price}</h6>
              </td>
              <td>
                <button
                  onClick={() => RemoveFromCart(cItem.id)}
                  style={{
                    backgroundColor: "#E78587",
                    position: "inherit",
                    color: "#f7e1bf",
                    borderRadius: "50%",
                    padding: "2%",
                    display: "flex",
                    justifyContent: "normal",
                    cursor: "pointer",
                  }}
                >
                  <IoTrashBin size={15} />
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );

    function RemoveFromCart(id) {
      axios
        .patch("http://localhost:8081/item/updateCartItem/" + id)
        .then((response) => {
          getCart();
        })

        .catch((err) => console.error(err));
    }
  }

  return (
    <div>
    <h4>Total Cart Price: £{parseFloat(totalPrice).toFixed(2)}</h4>
      <br></br>
      {cartItems}
      <h4>Total Items: {totalItems} </h4>
    </div>
  );
}

export default CartItems;
