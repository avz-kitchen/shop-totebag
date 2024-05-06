import { Routes, Route } from 'react-router-dom';

import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductsList";
import ContactUs from './components/ContactUs';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element = { <HomePage />}/>
        <Route path="/products" element = { <ProductList />}/>
        <Route path="/products/:productId" element = { <ProductDetails />}/>
        <Route path="/contact" element = {<ContactUs /> }/>

      </Routes>

      <Footer />
    </>
  );
}

export default App;
