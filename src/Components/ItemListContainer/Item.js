import React from 'react'
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';






const Item = () => {
    const [items, setItems] = useState(null)
   const {idProd}= useParams();

    const getItems = async(id)=>{
     setTimeout(async () => {
         const response = await fetch(`https://dummyjson.com/products/${id}`)
         const data = await response.json()
         setItems(data.product)
         console.log(data)
        
     }, 2000);
    };



  
    useEffect(()=>{
        getItems(idProd)
    }, [idProd])
console.log(idProd)
    
const filteredItems = items ? (idProd ? items.filter(item => item.id === idProd) : items) : [];
  
    return (
    <Container fluid>
        <Row>
           {filteredItems.map(item => (
           <ItemDetail key={item.id} 
           image={item.images[0]} 
           title={item.title} 
           description={item.description} 
           prices={item.price}
           stocks={item.stock} />))}     
        </Row>
    </Container>
  );
};

export default Item
