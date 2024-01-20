import React, { useContext, useState } from 'react'
import "./SearchBar.css"
import {BsSearch} from 'react-icons/bs';
import fetchProducts from '@/api/fetchProducts';
import AppContext from '@/context/AppContext';

const SearchBar = () => {
  const {setProducts, setLoading} = useContext(AppContext)
  const [ searchValue, setSearchValue ] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    const products = await fetchProducts(searchValue);
    setProducts(products);
    setLoading(false);
    setSearchValue('');
  }

  return (
    <form className='search-bar' onSubmit={handleSearch}>
      <input
        type="search"
        value={searchValue}
        placeholder='Buscar produtos'
        className='search__input'
        onChange={ ({ target }) => setSearchValue(target.value) }
      />
      <button type='submit' className='search__button'>
        <BsSearch />
      </button>
    </form>
  )
}

export default SearchBar;