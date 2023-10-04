import React from 'react'
import { BsCartPlus } from 'react-icons/bs';
import "./CartButton.css";

const CartButton = () => {
  return (
    <button type='button' className='cart__button'>
      <BsCartPlus/>
      <span className='cart-status'>1</span>
    </button>
  )
}

export default CartButton;