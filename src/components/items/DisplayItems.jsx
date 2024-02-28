import axios from "axios";
import { useState, useEffect } from "react";


function DisplayItems() {
    
    const [items, setItems] = useState();


        axios.get("http://localhost:3001/items")
            .then(response => {
                setItems(response.data)
                console.log("http://localhost:3001/items", response);
            })
            .catch(err => console.error(err))

        const itemArray = [];
        for (const item of items) {
            itemArray.push(
                <  ItempsPT
                    Name={item.name}
                    Price={item.price}
                    Quantity={item.quantity}

                />

            )
        
    };
    return ( 
        <div>
            <h2>A list of Items</h2>
            <br/>
            {itemArray}
        </div>
     );
}

export default DisplayItems ;