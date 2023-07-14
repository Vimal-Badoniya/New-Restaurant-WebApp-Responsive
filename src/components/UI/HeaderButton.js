import React, { useContext } from "react";
import "./HeaderButton.css";
import CartContext from "../../source/cart-context";



const HeaderButton = (props) => {
  const ctx = useContext(CartContext)
  const clickHandler = ()=>{
    props.onclick()

  }

  return (
    <button className="cart-button" onClick={clickHandler} >
      <span className="child-text">Your Cart</span>
      <span className="counter">{ctx.quantity}</span>
    </button>
  );
};

export default HeaderButton;
