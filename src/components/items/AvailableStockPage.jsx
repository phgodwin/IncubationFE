import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { MdOutlineShoppingCart } from "react-icons/md";
import Logo from "./Logo.png";

function AvailableStockPage() {
  // State for storing items and search value
  const [items, setItems] = useState([]);
  const [filterItemName, setFilterItemName] = useState("");
  


  // Fetch items from the server on component 
  useEffect(() => {
    axios.get("http://localhost:3001/items")
      .then(response => {
        setItems(response.data);
        console.log("http://localhost:3001/items", response);
      })
      .catch(err => console.error(err));
  }, []);

  // Filter items based on search value
  useEffect(() => {
    const filteredItems = items.filter(item =>
      item.name.toLowerCase().includes(filterItemName.toLowerCase())
    );
    setItems(filteredItems);
  }, [filterItemName]);



  return (
    
    <div className="container">
    <input
    type="text"
    onChange={e => setFilterItemName(e.target.value)}
    value={filterItemName}
    placeholder="Search Items"
    className="form-control" 
  />

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