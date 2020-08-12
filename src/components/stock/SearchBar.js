import React from 'react';

const SearchBar = () => {
  return (
    <form>
      <input 
        type="text" 
        placeholder="Enter Ticker Symbol here"
        name="stockSymbol"
      />
      <button>Search</button>
    </form>
  )
}

export default SearchBar;