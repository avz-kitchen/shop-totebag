/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import ProductList from "./pages/ProductsList";
import ContactUs from './pages/ContactUs';


function App() {

  const [productsToDisplay, setProductsToDisplay] = useState(products);


  const createProduct = (newProduct) => {

    const productIds = productsToDisplay.map(product => product.id);
    const maxId = Math.max(...productIds); 
    const nextId = maxId + 1;

    const newProductWithId = {
      ...newProduct,
      id: nextId
    }

    const newList = [newProductWithId, ...productsToDisplay];

    setProductsToDisplay(newList);
  }


  const deleteProduct = (productId) => {
    const newList = productsToDisplay.filter(product => product.id !== productId);
    setProductsToDisplay(newList);
  }



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
