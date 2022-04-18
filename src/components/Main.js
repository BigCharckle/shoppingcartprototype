import {useState, useEffect} from "react";
import LoadingSpinner from "./LoadingSpinner";
import Product from "./Product";
import Filters from "./Filters";
import Apisource from './Apisource';
import './style.css';
export default function Main(props){
    const {products, setProducts, onAdd, currentCountry} = props;
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

   useEffect(() => { 
    const fetchData = async () => {
        setIsLoading(true);
        const response = await (
        //fetch("https://fakerapi.it/api/v1/products?_quantity=20&_price_max=100&_seed=88"));
        //fetch("https://dummyjson.com/products"));
        fetch(Apisource.API_PRODUCTS));
        const data = await response.json();

        setProducts(data);

        setIsLoading(false);
        };
        fetchData().catch((e) => setError(e.message));
    }, []);

    console.log(products);

    return (
        <div className="home">
            <Filters />
            {isLoading?
            (<LoadingSpinner />)            
            :
            (<div className="productContainer">
                {products.map((product)=> (
                    <Product key={product.id} product={product} onAdd={onAdd} currentCountry={currentCountry}></Product>
                ))}
            </div>)
            }
        </div>
    );
}
