import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';





const ItemList = (props) => {
  const [cartItems, setCartItems] = useState(0);
  const handleAdd = (count) => {
    setCartItems(cartItems + count);
  }
  

  return (
    <div>
      <div key={props.id}>
        <div>
          <h3>{props.title}</h3>
        </div>

          <div>
            <p>{props.description}</p>
          </div>

            <div>
              <img src={props.image} alt={props.name}></img>
            </div>

              <div>
                 <ItemCount stock={props.stock} initial={0} onAdd={handleAdd} />
              </div>
                <div>Stock: {props.stock}</div>
      </div>
    </div>
  );
};

export default ItemList

