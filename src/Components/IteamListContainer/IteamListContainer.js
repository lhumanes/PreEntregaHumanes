import React from 'react';
import Container from 'react-bootstrap/Container';





function Greeting({greeting}) {
  return (
    <Container fluid>
      <h1>Bienvenido {greeting}!</h1>
      
     
    </Container>
  );
}

export default Greeting;
