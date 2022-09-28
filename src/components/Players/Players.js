
import { useEffect, useState } from 'react';
import './Players.css'

const Players = () => {
  const[sprinters, setSprinters]=useState([])
  useEffect(()=>{
    fetch('products.json')
    .then(res=>res.json())
    .then(data=>setSprinters(data))
  },[])
  
  return (
    <div className='info-container'>
      <div className="players-container">
        <h1>Welcome to Players</h1>

      </div>
      <div className="cart-container">
        <h1>Welcome to Scores</h1>

      </div>
      
    </div>
  );
};

export default Players;