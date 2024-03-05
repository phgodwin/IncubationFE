import axios from "axios";
import { useState } from "react";


function CreateItem() {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");
                     
  
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

      })
      .catch((error) => console.error(error));
  };



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>CREATE YOUR ITEMS</h3>

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
        <button  class="my-button-create">
<strong>CREATE</strong></button>

      </form>

    </div>
  );
}

export default CreateItem;