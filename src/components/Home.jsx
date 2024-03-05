import { useState } from "react";
import homeBackground from "./pictures/homeBackground.png"
import axios from "axios";

function Home() {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post("http://localhost:8081/cart/create", { fullName, email, password })
            .then(response => {

                setFullName("");
                setEmail("");
                setPassword("");
            })
            .catch((error) => console.error(error));

    }


return (
    <div className="container">
       
            <img
                src={homeBackground}
                alt="HomeBackground"
                width="80%"
                height="80%"

            />
        
        
            <form onSubmit={handleSubmit}>
                <h2>Create A New Account</h2>
                <input placeholder="Full Name" type="text" className="form-control" value={fullName} onChange={event => setFullName(event.target.value)} ></input>
                <br/>
                <input placeholder="Email" type="email"className="form-control" value={email} onChange={event => setEmail(event.target.value)} ></input>
                <br/>
                <input placeholder="Password" type="password"className="form-control" value={password} onChange={event => setPassword(event.target.value)} ></input>
                <br/>
                <button type="submit">Create</button>
            </form>
       

    </div>

);
}

export default Home;