import axios from "axios";
import { useState } from "react";


function CreateItem() {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [uploadImages, setUploadImages] = useState("");



    const handleSubmit = (event) => {
        event.preventDefault();
      
        // update
        const formattedPrice = parseFloat(price).toFixed(2);
      
        axios
          .post("http://localhost:3001/items", {
            name,
            price: formattedPrice, // update
            quantity,
            uploadImages
          })
          .then((response) => {
            setName("");
            setPrice("");
            setQuantity("");
            setUploadImages("");

          })
          .catch((error) => console.error(error));
      };



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" className="form-control" value={name} onChange={event => setName(event.target.value)}></input>
                <br />
                <label>Price:</label>
                <input type="number" className="form-control" defaultValue="0.00" min="0" step="0.01" value={price} onChange={event => setPrice(event.target.value)} ></input>
                <br />
                <input type="number" className="form-control" min="0" placeholder="Please enter quantity" value={quantity} onChange={event => setQuantity(event.target.value)}></input>
                <br />
                <label htmlFor="PropertyUploadImages" className="form-label">Upload images</label>
        <input
            id="propertyUploadImages"
            name="uploadimages"
            className="form-control"
            type="text"
            value={uploadImages}
            onChange={e => setUploadImages(e.target.value)}

        />
        <br/>
                <button type="submit"  className="btn btn-success btn-md">Create!</button>
                
            </form>

        </div>
    );
}

export default CreateItem;