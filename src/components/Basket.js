import React from "react";
import { useState, useEffect } from 'react';
import Apisource from "./Apisource";
import './modale.css';

export default function Basket(props){
    const cartItems = props.cartItems;
    const setCartItems = props.setCartItems;
    const currentCountry = props.currentCountry;
    const onSubmitOrder = props.onSubmitOrder;
    const [shippingPrice, setShipingPrice] = useState(0);

    useEffect(() => {
        setCartItems(cartItems);
    }, [cartItems]);
    //setShipingPrice(0);
    if(!cartItems ){
        return null;
    }

    const itemsPrice = cartItems.reduce((a, c) => a+c.price * c.qty * currentCountry.rate, 0);
    //const shippingPrice = itemsPrice > 50  ? 20 * currentCountry.rate: 10 * currentCountry.rate;
    const totalPrice = itemsPrice + shippingPrice; 
    const modal = document.getElementById("myModal");
    var overlay = document.getElementById("overlay");
    const closeModale = () => {
        overlay.style.display = "none";
        modal.style.display = "none";

      };
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
    const onRemove = (product) =>{
        const found = cartItems.find((x) =>x.id === product.id);
        if(found.qty === 1){
            setCartItems(
                cartItems.filter((x)=>x.id !== product.id)
            );
        }else{
          setCartItems(
            cartItems.map((x)=>
              x.id === product.id? {...found, qty: found.qty -1} :x ));
        }
      };

      const checkOut = ()=>{
        const data = { id:0, currency:currentCountry.currency, cartitems: cartItems };
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        };
        fetch(Apisource.API_LOCAL_CHECKOUT, requestOptions)
          .then(response => response.json())
          .then(res => setShipingPrice(0));
        closeModale();
        onSubmitOrder();

      };

      const getShippingPrice = () => {
        //e.preventDefault();
    
        const data = { id:0, currency:currentCountry.currency, cartitems: cartItems };
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        };
        fetch(Apisource.API_LOCAL_SHIPPINGPRICE, requestOptions)
          .then(response => response.json())
          .then(res => setShipingPrice(res* currentCountry.rate));
      };
    return (
    <div className='modal-content' id='myModal' >
        
        <span class="close" onClick = {() => closeModale()} >&times;</span>

        <h2>Cart Items</h2>
        <div>
            {cartItems.length ===0 && <div>Cart is empty</div>}
        </div>
        {

        cartItems.map((item) =>(
                <div key={item.id} >
                    <div className="col-2">{item.name}</div>
                    <div className="col-2">
                        <button onClick={()=>onRemove(item)} className="remove">-</button>                        
                        <button onClick={()=>onAdd(item)} className="add">+</button> 
                    </div>
                    <div className="col-2 " >
                        {item.qty} X {currentCountry.currency} {(item.price * currentCountry.rate).toFixed(2)}
                    </div>
                </div>
            ))
        }
        {cartItems.length !==0 && (
            <>
                <hr></hr>
                <div>
                        <div className="col-2">Items Price</div>
                        <div className="col-1 text-right"> {currentCountry.currency} {itemsPrice.toFixed(2)}</div>
                </div>
                <div>
                        <div className="col-2">Shipping Price ( <button onClick={()=>getShippingPrice(cartItems)} >Click to calculate</button> )</div>
                        <div className="col-1 text-right">{currentCountry.currency} {(shippingPrice).toFixed(2)}</div>
                </div>
                <div>
                        <div className="col-2"><strong>total Price</strong></div>
                        <div className="col-1 text-right"><strong>{currentCountry.currency} {totalPrice.toFixed(2)}</strong></div>
                </div>     
                <hr/>
                <div>
                    <button onClick={()=>checkOut()} > Checkout</button>
                </div>                           
            </>
        )}
        
    </div>

    );
}

