import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";


function Items() {
    
    
    const [items, setItems] = useState([
        {
            id: 1,
            name: "Product 1",
            price: 10.99,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            stock: 10
          },
          {
            id: 2,
            name: "Product 2",
            price: 20.99,
            description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "https://dummyimage.com/300x200/000/fff",
            stock: 5
          },
          {
            id: 3,
            name: "Product 3",
            price: 30.99,
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: "https://dummyimage.com/300x200/000/fff",
            stock: 2
          }
    ]);


  

  return (
    <div>
      {items.map((item) => {
            return(
          <ItemList
          key={item.id}
          name={item.name}
          image={item.image}
          description={item.description}
          stock={item.stock}
          
          
          
          />
        );
     })}
    </div>
  )
};

export default Items;

