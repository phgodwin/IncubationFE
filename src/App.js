import logo from './logo.svg';
import './App.css';
import Items from './components/Items';
import Cart from './components/Cart';
import Home from './components/Home';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (

    <Router>

      <nav>
        <Link to='/'>Home</Link>
        <Link to='/Items'>Items</Link>
        <Link to='/Cart'>Cart</Link>

      </nav>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Items' element={<Items />}></Route>
        <Route path='/Cart' element={<Cart />}></Route>
      </Routes>
    </Router>

  );
}

export default App;
