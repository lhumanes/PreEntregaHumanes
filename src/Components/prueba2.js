import React from 'react'
//import ItemCount from '../ItemCount/ItemCount';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Prueba3 from './prueba3';






const Prueba2 = () => {
    const [items, setItems] = useState([])
    const getItems = async()=>{
        const response = await fetch('https://fakestoreapi.com/products?limit=5')
        const data = await response.json()
        setItems(data)
        console.log(data)
    }

//   const [cartItems, setCartItems] = useState(0);
//   const handleAdd = (count) => {
//     setCartItems(cartItems + count);
//   }
  
    useEffect(()=>{
        getItems()
    }, [])
  
    return (
    <Container fluid>
        <Row>
           {items.map(item => (
           <Prueba3 key={item.id} 
           image={item.image} 
           title={item.title} 
           description={item.description} 
           price={item.price}
           stock={item.stock} />))}     
        </Row>
    </Container>











    // <div>
    //   <div key={props.id}>
    //     <div>
    //       <h3>{props.title}</h3>
    //     </div>

    //       <div>
    //         <p>{props.description}</p>
    //       </div>

    //         <div>
    //           <img src={props.image} alt={props.name}></img>
    //         </div>

    //           <div>
    //              <ItemCount stock={props.stock} initial={0} onAdd={handleAdd} />
    //           </div>
    //             <div>Stock: {props.stock}</div>
    //   </div>
    // </div>
  );
};

export default Prueba2

