import React from 'react';
import toast from 'react-simple-toasts';
import './Toast.css'

const Toast = () => {
  return (
    <div>
       <div className="example">
    <button onClick={() => toast('Congratulations Activity Complete')}>Activity Complete</button>
    <button onClick={() => toast('Congratulations', 1000)}>One-second</button>
  </div>
      
    </div>
  );
};

export default Toast;