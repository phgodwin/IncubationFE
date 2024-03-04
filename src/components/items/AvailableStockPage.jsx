import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { MdOutlineShoppingCart } from "react-icons/md";
import Logo from "./Logo.png";

function AvailableStockPage() {
  // State for storing items and search value
  // items: An array to store item data fetched from the server.
  const [items, setItems] = useState([]);
  // filterItemName: A string to store the search value for filtering items.
  const [filterItemName, setFilterItemName] = useState("");
  

// The component fetches items from the server using an 
// HTTP GET request when it mounts (using the useEffect hook with an empty dependency array).
  useEffect(() => {
    axios.get("http://localhost:3001/items")
      .then(response => {
        setItems(response.data);
        console.log("http://localhost:3001/items", response);
      })
      .catch(err => console.error(err));
  }, []);

// It also filters items based on the search
//  value whenever filterItemName changes (using another useEffect hook).
  useEffect(() => {
    const filteredItems = items.filter(item =>
      item.name.toLowerCase().includes(filterItemName.toLowerCase())
    );
    setItems(filteredItems);
  }, [filterItemName]);



  return (
    // An input field for searching items.

    <div className="container">
    <input
    type="text"
    onChange={e => setFilterItemName(e.target.value)}
    value={filterItemName}
    placeholder="Search Items"
    className="form-control" 
  />
{/* A list of cards, each representing an item:
// Each card displays an image, item name, and price.
// A button allows adding the item to the basket.
// A watermark image (Logo.png) is positioned in the top-right corner of each card.

 */}
      {items.map(item => (
        <Card
          key={item.id}
          className="col-sm-6 col-md-4 col-lg-3 m-4"
          style={{ textAlign: "center" }}
        >
          <div style={{ position: "absolute", top: 10, right: 10, transform: "scale(2)" }}>
            <img src={Logo} alt="Watermark" style={{ opacity: 0.65, width: 50 }} />
          </div>
          <img src={item.uploadImages} className="item-images" alt="itemImage" />
          <br />
          <h4>{item.name}</h4>
          <h6>£ {item.price}</h6>
          <Button variant="danger">
            <strong><MdOutlineShoppingCart /> Add to basket</strong>
          </Button>
        </Card>
      ))}
    </div>
  );
}

export default AvailableStockPage;
// The component dynamically updates the UI based on 
// the state variables (items and filterItemName).
// When the user types in the search input, the filterItemName state changes, 
// triggering the second useEffect to filter the displayed items.
// Overall, this code creates a React component that fetches and displays a list of items,
//  allowing users to search and add items to their basket. The UI is styled using Bootstrap components. 
// The watermark image adds a visual element to each item card.