import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import StatsPanel from './StatsPanel';

function FirstComponent() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setProducts(response.data.products);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setIsUpdating(true);
    setSearchTerm(e.target.value);
    setTimeout(() => setIsUpdating(false), 300);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">EV2: Products - Stats + Grid</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="border p-2 mb-4 w-full"
      />
      <div className={`transition-opacity duration-300 ${isUpdating ? 'opacity-0' : 'opacity-100'}`}>
        <StatsPanel products={filteredProducts} />
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
}

export default FirstComponent;