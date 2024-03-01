import './App.css';
import Items from './components/items/Items';
import Cart from './components/cart/Cart';
import Home from './components/Home';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Logo from './Logo.png'
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import { FaShoppingCart } from "react-icons/fa";


function App() {
  return (

    <Router>

        <Navbar expand="lg" className="bg-light"className="navbar">
        <Container>

            {/* <Navbar.Brand href="/" >
              <img
                alt="Logo Icon"
                src={Logo}
                width="15%"
                height="15%"
                className="d-inline-block align-top"
              />
            </Navbar.Brand> */}
            <Nav
              className="me-auto"
            >
              <Nav.Link href="/"><strong>Home</strong></Nav.Link>
              </Nav>
            <Nav
              className="me-auto"
            >
              <Nav.Link href="/Items"><strong>Create Items</strong></Nav.Link>
              </Nav>
              
              <Nav>
              <Nav.Link href="/Cart" ><strong><FaShoppingCart /> </strong></Nav.Link >
            </Nav>

            </Container>

        </Navbar>

        

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Items' element={<Items />}></Route>
        <Route path='/Cart' element={<Cart />}></Route>
      </Routes>
    </Router>

  );
}

export default App;