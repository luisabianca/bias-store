import React, { useState } from 'react'
import "./SearchBar.css"
import {BsSearch} from 'react-icons/bs';

const SearchBar = () => {
  const [ searchValue, setSearchValue ] = useState('');

  return (
    <form className='search-bar'>
      <input
        type="search"
        value={searchValue}
        placeholder='Buscar produtos'
        className='search__input'
        onChange={ ({ target }) => setSearchValue(target.value) }
      />
      {searchValue}
      <button type='submit' className='search__button'>
        <BsSearch />
      </button>
    </form>
  )
}

export default SearchBar;