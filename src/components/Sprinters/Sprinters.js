import React from 'react';

const Sprinters = (props) => {
  const{name,info,distance,time,img}=props.sprinter;
  return (
    <div>
      <img src={img} alt=""></img>
      <p>Name: {name}</p>
      <p>Info: {info}</p>
      <p>Distance: {distance}m</p>
      <p>Time: {time}s</p>

      
    </div>
  );
};

export default Sprinters;