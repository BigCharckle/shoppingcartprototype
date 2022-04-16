import Basket from "./Basket";
import CountrySelecter from "./CountrySelecter";
import { FaShoppingCart } from "react-icons/fa";
import { Badge } from "react-bootstrap";
import './modale.css';
export default function Header(props){
    const {cartItems, setCartItems, countries, currentCountry, setCurrentCountry, onChangeCountry, onSubmitOrder } = props;
    var modal = document.getElementById("myModal");
    var overlay = document.getElementById("overlay");
    const openModal = () => {
        overlay.style.display = "block";
        modal.style.display = "block";

      };
    return (
        <header className="row block center">
            <diV>
                <a href="#/"> <h1>Shopping Cart</h1>
                </a>
            </diV>
            <div>
                <CountrySelecter countries={countries} currentCountry={currentCountry} setCurrentCountry={setCurrentCountry} onChangeCountry={onChangeCountry}></CountrySelecter>
            </div>
            <div>
                <button onClick={()=>openModal()} > 
                    <FaShoppingCart color="Green" fontSize="25px" />
                    <Badge>{cartItems.length}</Badge>            
                </button>
                <div id="overlay" className="overlay"></div>
                <div id="myModal" className="modal">
                    <Basket cartItems={cartItems} setCartItems={setCartItems} currentCountry={currentCountry} onSubmitOrder={onSubmitOrder}  ></Basket>     
                </div> 
            </div>
        </header>
    );
}