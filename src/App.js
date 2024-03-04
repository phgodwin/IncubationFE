import './App.css';
import Cart from './components/cart/Cart';
import Home from './components/Home';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Logo from './Logo.png'
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import { FaShoppingCart } from "react-icons/fa";
import AddStockPage from './components/items/AddStockPage';
import AvailableStockPage from './components/items/AvailableStockPage';

//Main entry point to the react app
function App() {
  return (

// wraps the entire app, enabling client-side routing. 

    <Router>
    {/* Inside the router, there’s a navigation bar (<Navbar>)
 with links to different pages. */}
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
              {/* The navigation links (<Nav.Link>) point to different routes: /, /AddStock, /Stock, and /Cart.
 */}
              <Nav.Link href="/"><strong>Home</strong></Nav.Link>
              </Nav>
            <Nav
              className="me-auto"
            >
              <Nav.Link href="/AddStock"><strong>Add Stock</strong></Nav.Link>
              </Nav>

              <Nav
              className="me-auto"
            >
              <Nav.Link href="/Stock"><strong>Shop</strong></Nav.Link>
              </Nav>
              
              <Nav>
              <Nav.Link href="/Cart" ><strong><FaShoppingCart /> </strong></Nav.Link >
            </Nav>

            </Container>

        </Navbar>

        
{/* The <Routes> component defines the routes for different pages.
 */}
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