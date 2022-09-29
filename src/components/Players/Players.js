import { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
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

  useEffect(()=>{
    const storedCart = getStoredCart();
    const savedCart =[];
    for(const id in storedCart){
     const addedSprinter = sprinters.find(sprinter => sprinter.id ===id);
     if(addedSprinter){
      const quantity = storedCart[id];
      addedSprinter.quantity = quantity;
      savedCart.push(addedSprinter);
     }
    //  console.log(addedSprinter);
    }
    setCart(savedCart);
  },[sprinters])


  const handleAddToCart=(selectedSprinter)=>{
    // console.log(sprinter);
    let newCart = [];
    const exists = cart.find(sprinter => sprinter.id === selectedSprinter.id);
    if(!exists){
      selectedSprinter.quantity = 1;
      newCart = [...cart, selectedSprinter];
    }
    else{
      const restSprinter = cart.filter(sprinter => sprinter.id !== selectedSprinter.id);
      exists.quantity = exists.quantity+1;
      newCart= [...restSprinter, exists];
    }
    
    setCart(newCart);
    addToDb(selectedSprinter.id);
  }
  
  return (
    
      
    <div className='info-container'>
     
      
      <div>
        <div>
        <h1>Spri</h1>
        
        </div>
      
       <div className="players-container">
       {
          
          sprinters.map(sprinter=><Sprinters key={sprinter.id} sprinter={sprinter} handleAddToCart={handleAddToCart}></Sprinters>)
        }
       </div>

      </div>
      <div className="cart-container">
       <Cart cart={cart}></Cart>

      </div>
      
    </div>
    
  );
};

export default Players;