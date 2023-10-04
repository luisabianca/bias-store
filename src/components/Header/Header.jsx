import React from 'react'
import './Header.css'
import SearchBar from '../SearchBar/SearchBar';
import { BsCartPlus } from 'react-icons/bs';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <p>Bia's Store</p>
        <SearchBar />
        <button><BsCartPlus/></button>
      </div>
    </header>
  )
}

export default Header;