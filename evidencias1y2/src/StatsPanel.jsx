import React from 'react';

function StatsPanel({ products }) {
  if (!products || products.length === 0) return <p>No products available</p>;

  const mostExpensive = products.reduce((prev, current) => (prev.price > current.price ? prev : current));
  const cheapest = products.reduce((prev, current) => (prev.price < current.price ? prev : current));
  const longTitleCount = products.filter(product => product.title.length > 20).length;
  const discountAverage = (products.reduce((sum, product) => sum + product.discountPercentage, 0) / products.length).toFixed(2);
  const totalProducts = products.length;
  const averagePrice = (products.reduce((sum, product) => sum + product.price, 0) / products.length).toFixed(2);
  const highestDiscounted = products.reduce((prev, current) => (prev.discountPercentage > current.discountPercentage ? prev : current));
  const lowestDiscounted = products.reduce((prev, current) => (prev.discountPercentage < current.discountPercentage ? prev : current));
  const priceRange = {
    min: Math.min(...products.map(product => product.price)),
    max: Math.max(...products.map(product => product.price))
  };

  return (
    <div className="p-4 border m-2 bg-blue-900 text-white rounded-md transition-all duration-300">
      <h2 className="text-xl font-bold mb-2">Product Stats</h2>
      <div className="space-y-2">
        <p className="bg-blue-800 p-2 rounded-md shadow-sm"><strong>Total Products:</strong> {totalProducts}</p>
        <p className="bg-blue-800 p-2 rounded-md shadow-sm"><strong>Average Price:</strong> ${averagePrice}</p>
        <p className="bg-blue-800 p-2 rounded-md shadow-sm"><strong>Most Expensive:</strong> {mostExpensive.title} (${mostExpensive.price})</p>
        <p className="bg-blue-800 p-2 rounded-md shadow-sm"><strong>Cheapest:</strong> {cheapest.title} (${cheapest.price})</p>
        <p className="bg-blue-800 p-2 rounded-md shadow-sm"><strong>Products with long titles:</strong> {longTitleCount}</p>
        <p className="bg-blue-800 p-2 rounded-md shadow-sm"><strong>Average Discount:</strong> {discountAverage}%</p>
        <p className="bg-blue-800 p-2 rounded-md shadow-sm"><strong>Highest Discounted:</strong> {highestDiscounted.title} ({highestDiscounted.discountPercentage}%)</p>
        <p className="bg-blue-800 p-2 rounded-md shadow-sm"><strong>Lowest Discounted:</strong> {lowestDiscounted.title} ({lowestDiscounted.discountPercentage}%)</p>
        <p className="bg-blue-800 p-2 rounded-md shadow-sm"><strong>Price Range:</strong> ${priceRange.min} - ${priceRange.max}</p>
      </div>
    </div>
  );
}

export default StatsPanel;