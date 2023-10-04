import React from 'react'
import './Header.css'
import SearchBar from '../SearchBar/SearchBar';
import CartButton from '../CartButton/CartButton';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <p>Bia's Store</p>
        <SearchBar />
        <CartButton />
      </div>
    </header>
  )
}

export default Header;