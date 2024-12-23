import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as chartjs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

chartjs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Graphs({ products }) {
  // Calculate Category-Wise Sales Amount (Monthly)
  const salesByCategory = products.reduce((acc, product) => {
    const category = product.category;
    const price = product.price;
    if (product.sold) {
      acc[category] = (acc[category] || 0) + price;
    }
    return acc;
  }, {});

  // Calculate Total Items in Each Category (Monthly)
  const itemsByCategory = products.reduce((acc, product) => {
    const category = product.category;
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  //Data for Category-Wise Sales Amount
  const salesData = {
    labels: Object.keys(salesByCategory),
    datasets: [
      {
        label: "Sales Amount (₹)",
        data: Object.values(salesByCategory),
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  //Data for Total Items in Each Category
  const itemsData = {
    labels: Object.keys(itemsByCategory),
    datasets: [
      {
        label: "Total Items",
        data: Object.values(itemsByCategory),
        backgroundColor: "rgba(255, 159, 64, 0.5)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Allows custom width/height
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Graph Analysis',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Categories',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Values',
        },
      },
    },
  };

  return (
    <div>
      <h2>Category-Wise Sales Amount (Monthly)</h2>
      <div style={{ height: '400px', width: '80%' }}>
        <Bar data={salesData} options={chartOptions} />
      </div>
      
      <h2>Total Items in Each Category (Monthly)</h2>
      <div style={{ height: '400px', width: '80%' }}>
        <Bar data={itemsData} options={chartOptions} />
      </div>
    </div>
  );
}

export default Graphs;
