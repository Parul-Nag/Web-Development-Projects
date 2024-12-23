import React, { useState } from "react";
import { Range } from "react-range";

function Filters({ categories, onFilterChange }) {
  const [category, setCategory] = useState("");
  const [sold, setSold] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1500]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    onFilterChange({ category: event.target.value, sold, priceRange });
  };

  const handleSoldChange = (event) => {
    setSold(event.target.value);
    onFilterChange({ category, sold: event.target.value, priceRange });
  };

  const handlePriceRangeChange = (event) => {
    const newMaxPrice = event.target.value; // New value for max price
    setPriceRange([priceRange[0], newMaxPrice]); // Update priceRange with the current min and new max
    onFilterChange({
      category,
      sold,
      priceRange: [priceRange[0], newMaxPrice],
    });
  };

  return (
    <div>
      <h3>Filters</h3>
      <div>
        <label>Category:</label>
        <select onChange={handleCategoryChange} value={category}>
          <option value="">All</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Sold:</label>
        <select onChange={handleSoldChange} value={sold}>
          <option value="">All</option>
          <option value="true">Sold</option>
          <option value="false">Not Sold</option>
        </select>
      </div>
      <div>
        <div>
          <label>Price Range:</label>
          <input
            type="range"
            min="0"
            max="1500"
            value={priceRange[1]}
            onChange={handlePriceRangeChange}
          />
          <span>
            {priceRange[0]}-{priceRange[1]}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Filters;
