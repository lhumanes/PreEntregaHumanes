
import React, { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

 

  const handleAdd = (count) => {
    setCart(cart + count);
    onAdd(count);
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <button onClick={handleAdd} disabled={stock === 0}>
        Add to cart
      </button>
    </div>
  );
}

export default ItemCount;

