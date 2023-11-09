import React, { useState, useEffect } from "react";
import './Dashboard.css';

function Dashboard() {
  const [userCookie, setUserCookie] = useState("");
  const [vegetables, setVegetables] = useState([]);
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    
    const savedVegetables = localStorage.getItem("vegetables");
    const savedPrices = localStorage.getItem("prices");
    const sessionCookie = localStorage.getItem("sessionCookie");

    if (savedVegetables && savedPrices) {
      setVegetables(JSON.parse(savedVegetables));
      setPrices(JSON.parse(savedPrices));
    }
    if (sessionCookie) {
      setUserCookie(sessionCookie);
    }
  }, []);

  const handleAddData = () => {
   
    const newVegetable = prompt("Enter a vegetable:");
    const newPrice = prompt("Enter the price:");
    if (newVegetable && newPrice) {
      setVegetables([...vegetables, newVegetable]);
      setPrices([...prices, newPrice]);

      
      localStorage.setItem("vegetables", JSON.stringify([...vegetables, newVegetable]));
      localStorage.setItem("prices", JSON.stringify([...prices, newPrice]));
    }
  };

  return (
    <div className="veglist">
      <h1>Vegetables and Prices</h1>
      <table class="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">Vegetables</th>
            <th scope="col">Prices</th>
          </tr>
        </thead>
        <tbody>
          {vegetables.map((vegetable, index) => (
            <tr key={index}>
              <td>{vegetable}</td>
              <td>{prices[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
       
      <button className="btn" onClick={handleAddData}>Add Data</button>
      <button className="btn" onClick={() => localStorage.clear()}>Clear Data</button>
      <button className="btn" onClick={() => window.location.href = "map"}>Go to Map</button>
    </div>
  );
}

export default Dashboard;