import React from 'react';
import Button from 'react-bootstrap/Button';
import {useContext, useState} from 'react';


function ItemCount({stock, start, onAdd}) {
  const [count, setCount] = useState(start);

  
  const AddOne = () => {
    setCount(count + 1);
    };

  const RestOne = () => {
 if (count > 0) {
   setCount(count - 1);
 }
}
 
  


  return (
    <div>
      <Button onClick={RestOne}>-</Button>
      <span>{count}</span>
      <Button onClick={AddOne} disabled={count >= stock}>+</Button>
      <Button variant="primary" onClick={()=> onAdd(count)} disabled={stock === 0}>
        Add to cart
      </Button>
    </div>
  );
};

export default ItemCount;

