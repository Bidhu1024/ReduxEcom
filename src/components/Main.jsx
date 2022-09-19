import React from 'react';
import {addToCart, removeFromCart} from '../redux/action'
import { useDispatch } from 'react-redux';
import './Main.css';


function Main() {
  const dispatch = useDispatch();
  const product={
    name:'Iphone',
    price:10000,
    type:'mobile',
    color:'red'
  }
  return (
   <>
  <div className='btn'>
  <button onClick={()=> dispatch(addToCart(product))}>Add to Cart</button>
    <button onClick={()=> dispatch(removeFromCart(product))}>Remove from Cart</button>
    <button onClick={()=> dispatch(addToCart(product))}>Empty Cart</button>
  </div>
   
   </>
  );

}

export default Main
