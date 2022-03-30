import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Products from './Components/Products';
import Product from './Components/Product';
import About from './Components/About';
import Contact from './Components/Contact';

import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Header />

      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="products/:id" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

    </>
  );
}

export default App;
