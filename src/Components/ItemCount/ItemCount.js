
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

function ItemCount({ stock, onAdd }) {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);
  
  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

 

  const handleAdd = (count) => {
    setCart(cart + count);
    onAdd(count);
  };

  return (
    <div>
      <Button onClick={decrement}>-</Button>
      <span>{count}</span>
      <Button onClick={increment}>+</Button>
      <Button variant="primary" onClick={handleAdd} disabled={stock === 0}>
        Add to cart
      </Button>
    </div>
  );
}

export default ItemCount;

