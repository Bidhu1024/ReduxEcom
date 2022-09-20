import React from 'react';
import {addToCart, removeFromCart} from '../redux/action'
import { useDispatch, useSelector } from 'react-redux';
import './Main.css';
import { productList } from './../redux/Product';


function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state)=>state.productData)
  console.log('data in main component from saga', data)
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
    <button onClick={()=> dispatch(productList())}>Get List</button>
    
  </div>
   
   </>
  );

}

export default Main
