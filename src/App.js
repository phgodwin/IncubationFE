import Cart from "./components/cart/Cart";
import Home from "./components/Home";
import Paistina from "./components/Paistina";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { LuMountainSnow } from "react-icons/lu";

import AddStockPage from "./components/items/AddStockPage";
import AvailableStockPage from "./components/items/AvailableStockPage";
import EditItem from "./components/items/EditItem";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar>
        <Container>
          <Nav className="float-left">
            <Link
              className="nav-link"
              to="/"
              style={{ textDecoration: "none", color: "#254144" }}
            >
              <strong><LuMountainSnow size={30} />
</strong>
            </Link>
          </Nav>
          <Nav className="float-left">
            <Link
              className="nav-link"
              to="/AddStock"
              style={{ textDecoration: "none", color: "#254144" }}
            >
              <strong>ADD</strong>
            </Link>

            <Link
              className="nav-link"
              to="/Stock"
              style={{ textDecoration: "none", color: "#254144" }}
            >
              <strong>SHOP</strong>
            </Link>
          </Nav>

          <Nav className="float-rigth">
            <Link
              className="my-button-create"
              to="/Home"
              style={{ textDecoration: "none", color: "#254144" }}
            >
              <strong>REGISTER</strong>
            </Link>
            <Link
              className="nav-link icon-cart"
              to="/Cart"
              style={{ color: "#254144" }}
            >
              <strong>
                <FaShoppingCart size={30} />
              </strong>
              <span>0</span>
            </Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Paistina />}></Route>

        <Route path="/Home" element={<Home />}></Route>
        <Route path="/AddStock" element={<AddStockPage />}></Route>
        <Route path="/Stock" element={<AvailableStockPage />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/edit/:id" element={<EditItem />} />
      </Routes>
    </Router>
  );
}

export default App;
