import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import Logo from "./Logo.png"


function CreateItem() {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");
  const [items, setItems] = useState([]);
  const navigate = useNavigate();


  function getItems() {
    axios.get("http://localhost:8081/item/get")
      .then(response => {
        setItems(response.data);
        console.log("http://localhost:8081/item/get", response);
      })
      .catch(err => console.error(err));
  }

  useEffect(() => getItems());

  const handleSubmit = (event) => {
    event.preventDefault();

    // update
    const formattedPrice = parseFloat(price).toFixed(2);

    axios
      .post("http://localhost:8081/item/create", {
        name,
        price: formattedPrice, // update
        quantity,
        image
      })
      .then((response) => {
        setName("");
        setPrice("");
        setQuantity("");
        setImage("");
        getItems();


      })
      .catch((error) => console.error(error));
  };



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Create your Items</h3>

        <input type="text" className="form-control" placeholder="Item Name" value={name} onChange={event => setName(event.target.value)}></input>
        <br />
        <input type="number" className="form-control" defaultValue="0.00" min="0" step="0.01" placeholder="Price in £" value={price} onChange={event => setPrice(event.target.value)} ></input>
        <br />
        <input type="number" className="form-control" min="0" placeholder="Please enter quantity" value={quantity} onChange={event => setQuantity(event.target.value)}></input>
        <br />
        <input
          id="propertyUploadImages"
          name="uploadimages"
          className="form-control"
          type="text"
          placeholder="Paste your URL here"
          value={image}
          onChange={e => setImage(e.target.value)}

        />
        <br />
        <button type="submit" className="btn btn-success btn-md" style={{ backgroundColor: "#1C2938", borderColor: "white", color: "white" }}
        >Create!</button>

      </form>
      <br />
      <br />
      <div className="container">
        {items.map(item => (
          <Card key={item.id}
            className="col-sm-6 col-md-4 col-lg-3 m-4"
            style={{ textAlign: "center" }}>
            <div style={{ position: "absolute", top: 10, right: 10, transform: "scale(2)" }}>
              <img src={Logo} alt="Watermark" style={{ opacity: 0.65, width: 50 }} />
            </div>
            <img src={item.image} className="item-images" alt="itemImage" />

            <br />
            <h4>{item.name}</h4>
            <h6> £ {item.price}</h6>
            Items left: {item.quantity}
            <br />
            <br />

            <button onClick={() => navigate("/edit/" + item.id)}>Edit Item</button>

          </Card>
        ))}
      </div>
    </div>
  );
}

export default CreateItem;