import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function EditItem() {

    const params = useParams();
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
        axios.get("http://localhost:8081/item/get/" + params.id)
            .then((response) => {
                setName(response.data.name);
                setPrice(response.data.price);
                setQuantity(response.data.quantity);
                setImage(response.data.image);
                console.log(response);

            }).catch(error => console.error(error));
    }, []);


    const handleSubmit = (event) => {
        event.preventDefault();

        axios.patch("http://localhost:8081/item/update/" + params.id, { name, price, quantity, image })
            .then(() => {
                navigate("/AddStock")
            }).catch(error => console.error(error))
    }


    return (
        <form onSubmit={handleSubmit}>
            <h3>Edit your Item</h3>

            <input type="text" className="form-control" placeholder="Item Name" value={name} onChange={event => setName(event.target.value)}></input>
            <br />
            <input type="number" className="form-control" defaultValue="0.00" min="0" step="0.01" placeholder="Price in £" value={price} onChange={event => setPrice(event.target.value)} ></input>
            <br />
            <input type="number" className="form-control" min="0" placeholder="Please enter quantity" value={quantity} onChange={event => setQuantity(event.target.value)}></input>
            <br />
            <input
                name="image"
                className="form-control"
                type="text"
                placeholder="Paste your URL here"
                value={image}
                onChange={e => setImage(e.target.value)}

            />
            <br />
            <button type="submit" className="btn btn-success btn-md" style={{ backgroundColor: "#1C2938", borderColor: "white", color: "white" }}
            >Submit Edit!</button>
        </form>);
}

export default EditItem;