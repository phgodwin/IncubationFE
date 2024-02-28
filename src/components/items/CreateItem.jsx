import axios from "axios";
import { useState } from "react";


function CreateItem() {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
      
        // update
        const formattedPrice = parseFloat(price).toFixed(2);
      
        axios
          .post("http://localhost:3001/items", {
            name,
            price: formattedPrice, // update
            quantity,
          })
          .then((response) => {
            setName("");
            setPrice("");
            setQuantity("");
          })
          .catch((error) => console.error(error));
      };



    return (
        <div>

            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" value={name} onChange={event => setName(event.target.value)}></input>
                <br />
                <label>Price:</label>
                <input type="number" defaultValue="0.00" min="0" step="0.01" value={price} onChange={event => setPrice(event.target.value)} ></input>
                <br />
                <input type="number" min="0" placeholder="Please enter quantity" value={quantity} onChange={event => setQuantity(event.target.value)}></input>
                <br />
                <button type="submit">Submit</button>
            </form>

        </div>
    );
}

export default CreateItem;