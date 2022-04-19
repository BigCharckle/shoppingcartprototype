import Header from './components/Header';
import Main from "./components/Main";
import Apisource from './components/Apisource';
import { useState,useEffect } from 'react';
import OrderSubmitted from './components/OrderSubmitted';
function App() {
  //const {countries,defaultCountry} = Apisource;  
  const defaultCountry = Apisource.defaultCountry;
  const [countries, setCountries]= useState([]);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [currentCountry, setCurrentCountry] = useState(defaultCountry);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => { 
    const fetchData = async () => {
        const response = await (
        fetch(Apisource.API_LOCAL_COUNTRIES));
        const data = await response.json();

        setCountries(data);
        };
        fetchData().catch((e) => setError(e.message));
    }, []);

  const onAdd = (product) => {
    const found = cartItems.find((x) =>x.id === product.id);
    if(found){
        setCartItems(
          cartItems.map((x)=>
            x.id === product.id ? {
              ...found, qty: found.qty +1} : x
          )
        );
    }
    else{
      setCartItems([...cartItems, {...product, qty:1}])
    }
  };
  const onChangeCountry = (event) => {
    const found = countries.find((x) =>x.name === event.target.value);
    setCurrentCountry({...found});
  };
  const onSubmitOrder = () =>{
    setCartItems([]);
    setOrderSubmitted(true);
  }
  const onContinueShopping = () =>{
    setOrderSubmitted(false);
  }
  //These props can be packed and shipped with more simple way by using context, however I stuck by some error during development, so using props way alternatively.
  //Through transfering cartItems and setCartItems to deepest component Basket, we delivered same way as context to synchrinize the state.
  return (
    <div className="App">
      <Header cartItems={cartItems} setCartItems={setCartItems}  countries={countries} currentCountry={currentCountry} 
      setCurrentCountry={setCurrentCountry} onChangeCountry={onChangeCountry} onSubmitOrder={onSubmitOrder} ></Header>
      <div>
        {!orderSubmitted && <Main onAdd={onAdd} products={products} setProducts={setProducts} currentCountry={currentCountry}></Main>}
        {orderSubmitted && <OrderSubmitted onContinueShopping={onContinueShopping}></OrderSubmitted>}
      </div>
    </div>
  );
}

export default App;
