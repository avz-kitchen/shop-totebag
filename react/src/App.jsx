import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import ProductList from "./components/ProductsList";
function App() {
  return (
    <>
      <Navbar/>
      <HomePage />
      {/* <ProductList /> */}
      <Footer />
    </>
  );
}

export default App;
