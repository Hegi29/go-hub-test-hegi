"use client";

import { useState } from 'react';

import ProductCard from './ProductCard';
import { Product } from '~/types/product';

interface Props {
  products: Product[];
}

const ProductFilter: React.FC<Props> = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...new Set(products.map(product => product.category))];

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    setSelectedCategory(category);
    setFilteredProducts(
      category === 'All' ? products : products.filter(product => product.category === category)
    );
  };

  const handleSortChange = (order: 'asc' | 'desc') => {
    setFilteredProducts([...filteredProducts].sort((a, b) => (order === 'asc' ? a.price - b.price : b.price - a.price)));
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 bg-gray-50 p-4 rounded-lg shadow-md">
        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
          <label htmlFor="category" className="font-semibold text-lg text-gray-700">Category:</label>
          <select
            id="category"
            className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 cursor-pointer"
            onChange={handleCategoryChange}
            value={selectedCategory}
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="flex space-x-4">
          <button
            className="btn px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            onClick={() => handleSortChange('asc')}
          >
            Sort Ascending
          </button>
          <button
            className="btn px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => handleSortChange('desc')}
          >
            Sort Descending
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;
