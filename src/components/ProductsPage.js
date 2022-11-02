import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './Searchbar';
import ProductTable from './ProductTable';
import React from 'react';

export default function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [query, setQuery] = useState('');
  const [inStock, setInStock] = useState(false);
  
  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar setQueryProps={setQuery} queryProps={query} setInStockProps={setInStock} inStockProps={inStock}/>
        <ProductTable allProductsProps={products} queryProps={query} inStockProps={inStock} />
      </div>    
  )
}