// import React, { useState, useEffect } from "react";
// //import ItemList from "./ItemList";


// function Prueba1() {
    
    
//     const [items, setItems] = useState([]);

//     useEffect(() => {
//         fetch('https://dummyjson.com/products?limit=4')
//           .then(res => res.json())
//           .then(data => setItems(data));
//     }, []);

  

//   return (
//     <div>
//       {items.map((item) => {
//             return(
//           <Prueba1
//           key={item.id}
//           title={item.title}
//           images={item.images}
//           description={item.description}
//           stock={item.stock}
          
          
          
//           />
//         );
//      })}
//     </div>
//   );
// };

// export default Prueba1;