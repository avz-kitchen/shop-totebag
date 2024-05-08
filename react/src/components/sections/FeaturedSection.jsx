import ProductList from "../../pages/ProductsList";
import "../Products.css"
import "./section.css"

function FeaturedSection(){
return(
    <section className="Section">
        <div>
            <h3>Hot Picks</h3>
            <h2>Grab a totee</h2>
        <span>Easiest way to easy life by buying your favorite tote </span> </div>

      <ProductList /> 
   

    </section>
 
)
}
export default FeaturedSection