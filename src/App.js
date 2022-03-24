import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Product from './components/Product';
import Header from './components/Header';
import AddProduct from './components/AddProduct';

function App() {
  return (
    <div className="App">

      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Product" element={<Product />}></Route>
          <Route path="/AddProduct" element={<AddProduct />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
