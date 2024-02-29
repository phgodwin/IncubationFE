import axios from "axios";
import { useState, useEffect } from "react";
// import ItemsPT from "./ItemsPT"
import Card from "react-bootstrap/Card";


function DisplayItems() {

    const [items, setItems] = useState([]);


    axios.get("http://localhost:3001/items")
        .then(response => {
            setItems(response.data)
            console.log("http://localhost:3001/items", response);
        })
        .catch(err => console.error(err))

    const itemArray = [];
    for (const item of items) {
        itemArray.push(
        // <div className="container">
        
        //     <div className="row">
        //         <div className="col">
        //     <Card className="col-sm-6 col-md-4 col-lg-3 m-4">                
        //     <img
        //         src={item.uploadImages}
        //         className="Item-images"
        //         alt="itemImage" />
        //         {item.name}
        //         {item.price}
        //         {item.quantity}





        //     </Card>

            
        // </div>
        // </div>
        <div className="container">
<div className="col-3">
<div className="card">
<img src={item.uploadImages}
                                className="card-img-top" alt="item"/>
<div className="card-body">
<h5 className="card-title"> {item.name}</h5>
<p className="card-text">{item.price} {item.quantity}</p>
</div>
</div>
</div>
</div>

        )

    };
    return (
        <div>
            <h2>A list of Items</h2>
            <br />
            {itemArray}
        </div>
    );
}

export default DisplayItems;