import { useState } from "react";
import axios from "axios";

function Home() {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post("/cart/create", { fullName, email, password })
            .then(response => {

                setFullName("");
                setEmail("");
                setPassword("");
            })
            .catch((error) => console.error(error));

    }


return (
    <div >


        
        
            <form onSubmit={handleSubmit}  style={{ width: "20%" }}>
                <h2>CREATE A NEW ACC</h2>
                <input placeholder="Full Name" type="text" className="form-control" value={fullName} onChange={event => setFullName(event.target.value)} ></input>
                <br/>
                <input placeholder="Email" type="email"className="form-control" value={email} onChange={event => setEmail(event.target.value)} ></input>
                <br/>
                <input placeholder="Password" type="password"className="form-control" value={password} onChange={event => setPassword(event.target.value)} ></input>
                <br/>
                <button class="my-button" type="submit">CREATE</button>
            </form>
       

    </div>

);
}

export default Home;