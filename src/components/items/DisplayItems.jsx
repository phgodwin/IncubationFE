import axios from "axios";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { MdOutlineShoppingCart } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import Logo from "./Logo.png"

// React component that displays a list of items
function DisplayItems() {
  // items: An array that will hold the data fetched from the server.
  // setItems: A function to update the items state.


  const [items, setItems] = useState([]);

// he useEffect hook is used to fetch data from 
// the server when the component mounts. It makes an HTTP GET request to “http://localhost:3001/items”.
// If the request is successful, the response data is stored in the items state.
// If there’s an error, it’s logged to the console.
  useEffect(() => {
    axios.get("http://localhost:3001/items")
      .then(response => {
        setItems(response.data);
        console.log("http://localhost:3001/items", response);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    // Each Card contains:
// An optional watermark image (located at the top right corner).
// An image (item.uploadImages) representing the item.
// The item’s name (item.name).
// The item’s price (item.price).
// The quantity of items left (item.quantity).
    <div className="container">
      {items.map(item => (
        <Card key={item.id}
          className="col-sm-6 col-md-4 col-lg-3 m-4"
          style={{ textAlign: "center" }}>
            <div style={{ position: "absolute", top: 10, right: 10, transform: "scale(2)" }}>
        <img src={Logo} alt="Watermark" style={{ opacity: 0.65, width: 50 }} />
      </div>
          <img src={item.uploadImages} className="item-images" alt="itemImage" />
          
          <br />
          <h4>{item.name}</h4>
          <h6> £ {item.price}</h6>
          Items left: {item.quantity}
          <br />
          <br />


          {/* <Button variant="danger" > <strong><MdOutlineShoppingCart />  Add to basket </strong> </Button> */}
        </Card>
      ))}
    </div>
  );
}

export default DisplayItems;
// Overall, this code fetches item data from a server, displays it in a grid of cards, 
// and includes an optional watermark image and a commented-out button for adding items to a basket. 
// The styling is based on React Bootstrap components