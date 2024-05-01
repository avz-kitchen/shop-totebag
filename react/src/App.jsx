import "./App.css";
import SideNav from "./components/SideNav";
import Home from "./components/HomePage";
import Footer from "./components/Footer";
import Product from "./components/ProductsList";
function App() {
  return (
    <>
      <SideNav title="Contact"/>
      <Home />
      <Product />

      <Footer />
    </>
  );
}

export default App;
