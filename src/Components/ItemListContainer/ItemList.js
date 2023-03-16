import React from 'react'

import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Item from './Item';






const ItemList = () => {
    const [items, setItems] = useState([])
    const getItems = async()=>{
     setTimeout(async () => {
         const response = await fetch('https://dummyjson.com/products?limit=10')
         const data = await response.json()
         setItems(data.products)
         console.log(data)
        
     }, 2000);
    };



  
    useEffect(()=>{
        getItems()
    }, [])
  
    return (
    <Container fluid>
        <Row>
           {items.map(item => (
           <Item key={item.id} 
           image={item.images[0]} 
           title={item.title} 
           description={item.description} 
           prices={item.price}
           stocks={item.stock} />))}     
        </Row>
    </Container>
  );
};

export default ItemList

