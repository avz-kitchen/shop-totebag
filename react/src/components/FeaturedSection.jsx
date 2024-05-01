import ProductList from "./ProductsList";
import "./FeaturedSection.css"

function FeaturedSection(){
return(
    <section className="FeaturedSection">
        <div className="text-box">
            <h3>Hot Picks</h3>
            <h2>Grab a totee</h2>
        <span>Easiest way to easy life by buying your favorite tote </span> </div>
         <div className="container">
           <ProductList/> 
           </div>
           <button>See more</button>

    </section>
 
)
}
export default FeaturedSection