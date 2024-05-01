import { useState } from "react";
import products from "../assets/products.json";

function ProductList() {
  const [productsToDisplay, setProductsToDisplay] = useState(products);
  
//   const newList = productsToDisplay.filter((products) => products.id !== productId)
//   setProductsToDisplay(newList);
setProductsToDisplay(products)
  return (
<section className="ProductList">
    {productsToDisplay.map((productObj)=> {
        return(
            <div className="card" key={productObj.id}>
            <p>Product Name: {productObj.title}</p>
            <p>Product Price: {productObj.price}</p>
            </div>
        );
    })}
</section>
)

}



export default ProductList;
