import axios from "axios";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";


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
      {/* <h2>A list of Items</h2> */}
      {items.map(item => (
        <Card key={item.id} className="col-sm-6 col-md-4 col-lg-3 m-4">
          <img src={item.uploadImages} className="Item-images" alt="itemImage" />
          {item.name} {item.price} {item.quantity}
        </Card>
      ))}
    </div>
  );
}

export default DisplayItems;