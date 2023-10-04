import React from 'react'
import { BsCartPlus } from 'react-icons/bs';
import "./CartButton.css";

const CartButton = () => {
  return (
    <button type='button' className='cart__button'><BsCartPlus/></button>
  )
}

export default CartButton;