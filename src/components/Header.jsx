import {useSelector} from 'react-redux'
import React from "react";
import './Header.css'
import cart from '../images/cart.jpg'

const Header = () => {
    const result = useSelector((state)=>state.cartData)
    console.warn('redux data in header', result)
  return (
    <div className="header">
      <div className="cart-div">
        <span>{result.length}</span>
        <img src={cart} alt=""/>
      </div>
    </div>
  );
};

export default Header;
