import React from 'react'
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';






const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const {id} = useParams ();

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
    }, [id])

    const filteredItems = id ? items.filter(item => item.category === id) : items;

  
    return (
    <Container fluid>
        <Row>
           {filteredItems.map(item => (
           <ItemList key={item.id} 
           image={item.images[0]} 
           title={item.title} 
           description={item.description} 
           prices={item.price}
           stocks={item.stock}
           id={item.id} />))}     
        </Row>
    </Container>
  );
};

export default ItemListContainer