import { useState } from "react";
import products from "../assets/products.json";
import "./Products.css"

function ProductList() {
 const [productsToDisplay, setProductsToDisplay] = useState(products);
  const addToCart = (productId) => {
    const newList = productsToDisplay.filter((products) => products.id !== productId)
    setProductsToDisplay(newList);
  }
  let counter = 0;
  
  const increaseCounter = () =>{
    setCounter(counter + 1)
}


if(productsToDisplay.length > 0){
    counter= <span>Cart item: {productsToDisplay.length}</span>
}
  return (
<section className="ProductList">
    {counter}
    {products.map((productObj)=> {
        return(
            <div className="card" key={productObj.id}>
            <img src={productObj.images}/>
            <p>{productObj.title}</p>
            <p>Product Price: {productObj.price}</p>
                          {productObj.rating > 5 && <h3>Hot Picks</h3>}

            <button onClick={() => {addToCart}}>Add to Cart</button>
            </div>
        );
    })}
</section>
)
    
}



export default ProductList;
