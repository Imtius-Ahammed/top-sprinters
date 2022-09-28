import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Sprinters from '../Sprinters/Sprinters';
import './Players.css'

const Players = () => {
  const[sprinters, setSprinters]=useState([])
  const[cart, setCart]=useState([]);
  useEffect(()=>{
    fetch('products.json')
    .then(res=>res.json())
    .then(data=>setSprinters(data))
  },[])
  const handleAddToCart=(sprinter)=>{
    console.log(sprinter);
    const newCart = [...cart,sprinter];
    setCart(newCart);
  }
  
  return (
    
      
    <div className='info-container'>
     
      
      <div>
        
      <h1>Spri</h1>
       <div className="players-container">
       {
          
          sprinters.map(sprinter=><Sprinters key={sprinter.id} sprinter={sprinter} handleAddToCart={handleAddToCart}></Sprinters>)
        }
       </div>

      </div>
      <div className="cart-container">
       <Cart></Cart>

      </div>
      
    </div>
    
  );
};

export default Players;