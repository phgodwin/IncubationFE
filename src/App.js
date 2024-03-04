import './App.css';
import Cart from './components/cart/Cart';
import Home from './components/Home';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Logo from './Logo.png'
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import { FaShoppingCart } from "react-icons/fa";
import AddStockPage from './components/items/AddStockPage';
import AvailableStockPage from './components/items/AvailableStockPage';


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
              <Link to="/"><strong>Home</strong></Link>
              </Nav>
            <Nav
              className="me-auto"
            >
              <Link to="/AddStock"><strong>Add</strong></Link>
              </Nav>

              <Nav
              className="me-auto"
            >
              <Link to="/Stock"><strong>Shop</strong></Link>
              </Nav>
              
              <Nav>
              <Link to="/Cart" ><strong><FaShoppingCart /> </strong></Link >
            </Nav>

            </Container>

        </Navbar>

        

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/AddStock' element={<AddStockPage/>}></Route>
        <Route path='/Stock' element={<AvailableStockPage />}></Route>
        <Route path='/Cart' element={<Cart />}></Route>
      </Routes>
    </Router>

  );
}

export default App;