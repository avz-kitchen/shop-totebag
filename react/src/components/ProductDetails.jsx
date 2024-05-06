import { Link, useParams } from 'react-router-dom';

function ProductDetails(props){

    const {productId} = useParams();

    const product = props.productsToDisplay.find( (productObj) => productObj.id === parseInt(productId));

    return (
        <div className='productDetails'>

            <h1>{product.title}</h1>

            {product.imgURL
                ? <img src={product.images} />
                : <img src="https://dummyimage.com/182x268/ffffff/000000" />
            }

            <p>Description: {product.description}</p>
            <p>Rating: {product.rating}</p>
            <p>Price: {product.price}</p>

         

            <p>
                <Link to="/">Back to Homepage</Link>
            </p>

        </div>
    );
}

export default ProductDetails;