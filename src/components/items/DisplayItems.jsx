import axios from "axios";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { MdOutlineShoppingCart } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import Logo from "./Logo.png"


function DisplayItems() {
  const [items, setItems] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:8081/item/get")
      .then(response => {
        setItems(response.data);
        console.log("http://localhost:8081/item/get", response);
      })
      .catch(err => console.error(err));
  }, []);

  
  return (
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