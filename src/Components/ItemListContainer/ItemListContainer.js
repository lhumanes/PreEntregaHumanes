import React from 'react';
import Container from 'react-bootstrap/Container';
import ItemList from '../ItemList';





function Greeting({greeting}) {
  return (
    <Container fluid>
      <h1>Bienvenido {greeting}!</h1>
      <ItemList />
     
    </Container>
    
  );
}

export default Greeting;
