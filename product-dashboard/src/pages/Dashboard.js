import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductTable from "../components/ProductTable";
import Filters from "../components/Filters";
import SearchBar from "../components/SearchBar";
import Graphs from "../components/Graphs";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/products/")
      .then((response) => {
        console.log("API Response: ", response.data); // Log the fetched data
        setProducts(response.data);
        setFilteredProducts(response.data);
        const categorySet = new Set(
          response.data.map((product) => product.category)
        );
        setCategories([...categorySet]);
      })
      .catch((error) => {
        console.error("Error fetching products: ", error);
      });
  }, []);

  const handleFilterChange = (filters) => {
    let tempProducts = [...products];
    console.log("Filters:", filters); // Log the filter object

    if (filters.category) {
      console.log("Filtering by category:", filters.category);
      tempProducts = tempProducts.filter(
        (product) => product.category === filters.category
      );
    }

    if (filters.sold !== "") {
      console.log("Filtering by sold:", filters.sold);
      tempProducts = tempProducts.filter(
        (product) => product.sold === (filters.sold === "true")
      );
    }

    if (filters.priceRange) {
      console.log("Filtering by price range:", filters.priceRange);
      tempProducts = tempProducts.filter(
        (product) =>
          product.price >= filters.priceRange[0] &&
          product.price <= filters.priceRange[1]
      );
    }

    setFilteredProducts(tempProducts);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);

    let tempProducts = [...products];

    if (query) {
      tempProducts = tempProducts.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }
    setFilteredProducts(tempProducts);

  };

  return (
    <div >
      <h1 style={{color:'Orange', backgroundColor:'lightgoldenrodyellow', border:'2px solid orange', margin:0, padding:7 ,marginBottom:15}}>Product Dashboard</h1>
      <SearchBar onSearchChange={handleSearchChange} />
      <Filters categories={categories} onFilterChange={handleFilterChange} />
      <ProductTable products={filteredProducts} />
      <h2 style={{color:'Red', backgroundColor:'lightblue', border:'2px solid red', marginTop:15, padding:5 ,marginBottom:15}}>Graphs Analysis</h2>
      <Graphs products={filteredProducts}/>
    </div>
  );
}
export default Dashboard;
