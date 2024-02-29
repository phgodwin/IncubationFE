import axios from "axios";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { FaShoppingCart } from "react-icons/fa";
import Button from 'react-bootstrap/Button';

function DisplayItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/items")
      .then(response => {
        setItems(response.data);
        console.log("http://localhost:3001/items", response);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      {items.map(item => (
        <Card key={item.id} 
        className="col-sm-6 col-md-4 col-lg-3 m-4"
        style={{textAlign:"center"}}>
          <img src={item.uploadImages} className="item-images" alt="itemImage" />

          <h4>{item.name}</h4> 
          <h6> £ {item.price}</h6> 
          Items left: {item.quantity}
          <Button variant="warning" > <FaShoppingCart /></Button>
        </Card>
      ))}
    </div>
  );
}

export default DisplayItems;