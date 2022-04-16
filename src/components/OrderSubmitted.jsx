import React from "react";
  
const OrderSubmitted = (props) => {
  const onContinueShopping =props.onContinueShopping;
  return (
    <div>
      <h1>Your order was successfully submitted!</h1>
      <button onClick={onContinueShopping}>Continue Shopping</button>
    </div>
  );
};
  
export default OrderSubmitted;