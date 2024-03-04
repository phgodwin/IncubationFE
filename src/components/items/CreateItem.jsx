// A popular JavaScript library for making HTTP requests. 
// It allows you to send and receive data from APIs or other servers.
import axios from "axios";
// A hook that allows functional components to manage state.
import { useState } from "react";

// function responsible for creating new items with specific properties
function CreateItem() {
// several state variables defined using the useState hook
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [uploadImages, setUploadImages] = useState("");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

// The component defines a handleSubmit function that is called when the form is submitted.
  const handleSubmit = (event) => {
    // It prevents the default form submission behavior (page reload).
// ?????????????????
    event.preventDefault();

    // update
    // Formats the price value to have two decimal places using parseFloat(price).toFixed(2).

    const formattedPrice = parseFloat(price).toFixed(2);
// Makes an HTTP POST request to the URL "http://localhost:3001/items" with the following data:
// name, formattedPrice, quantity, and uploadImages.
    axios
      .post("http://localhost:3001/items", {
        name,
        price: formattedPrice, // update
        quantity,
        uploadImages
      })
      // If the request is successful, it clears the state variables (name, price, quantity, and uploadImages).

      .then((response) => {
        setName("");
        setPrice("");
        setQuantity("");
        setUploadImages("");

      })
      // If there’s an error, it logs the error to the console.

      .catch((error) => console.error(error));
  };



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Create your Items</h3>
{/* Three input fields:
Item name input (<input type="text">) with a controlled value (value={name}).
Price input (<input type="number">) with a controlled value (value={price}).
Quantity input (<input type="number">) with a controlled value (value={quantity}). 
The onChange event handler updates the name/price/quantity/image*/}
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
          value={uploadImages}
          onChange={e => setUploadImages(e.target.value)}

        />
        <br />
        <button type="submit" className="btn btn-success btn-md" style={{ backgroundColor: "#1C2938", borderColor: "white", color: "white" }}
>Create!</button>

      </form>

    </div>
  );
}

export default CreateItem;