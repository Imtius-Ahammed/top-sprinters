import React, { useState } from 'react';
import './Cart.css'
import logo from '../../../src/runner.jpg'
import Toast from '../Toast/Toast';


const Cart = ({cart}) => {
  console.log(cart);
 
  let total = 0;
  let quantity = 0;
  for(const sprinter of cart ){
    
    quantity = quantity + sprinter.quantity;
   total = parseFloat((total + sprinter.time * sprinter.quantity).toFixed(2));
   
  }
  const[record,setRecord]=useState('')



  return (
    <div className='cart'>
      <div className='profile'>
        <div className='cart-logo'>
          <img src={logo} alt=""></img>

        </div>
        <div className='profile-text'>
          <h5>Md.Imtius Ahammed</h5>
          <p><small>Uttara,Dhaka</small></p>
         
         
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
      <div className='break-btn'>
       <input type="button" value="20s" onClick={e=> setRecord(e.target.value)}/>
       <input type="button" value="39.12s" onClick={e=> setRecord(e.target.value)} />
       <input type="button" value="40.13s" onClick={e=> setRecord(e.target.value)} />
       <input type="button" value="38.49s"onClick={e=> setRecord(e.target.value)} />

      </div>



      <div>
        <h5>Scores time Details</h5>
        <p>Selected items: {quantity}</p>

        <div className='total-time'>
          <p>Total Time:  {total} <small>seconds</small> </p>
        </div>

      </div>


      <div>
        <div className='total-time'>
          <p>Records: {record} </p>
        </div>
      </div>



     <Toast></Toast>
       
      
    </div>
  );
};

export default Cart;