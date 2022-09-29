import React from 'react';
import './Cart.css'
import logo from '../../../src/runner.jpg'


const Cart = ({cart}) => {
  console.log(cart)
  return (
    <div className='cart'>
      <div className='profile'>
        <div className='cart-logo'>
          <img src={logo} alt=""></img>

        </div>
        <div>
          <h5>Md.Imtius Ahammed</h5>
          <p>Athletics Writer</p>
        </div>
      </div>

      <div className='maserment'>
        <div className='info'>
          <h5>75kg</h5>
          <p>Weight</p>
        </div>
        <div className='info'>
          <h5>6.5</h5>
          <p>Height</p>
        </div>
        <div className='info'>
          <h5>22yrs</h5>
          <p>Age</p>
        </div>

      </div>



      <div>
        <h5>Scores time Details</h5>
        
      </div>




       <h1>Welcome to Scores</h1>
        <p>Selected items: {cart.length}</p>
      
    </div>
  );
};

export default Cart;