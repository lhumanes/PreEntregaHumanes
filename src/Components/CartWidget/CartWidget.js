import React, {useState} from 'react';
import { ListGroup } from 'react-bootstrap';
import { CartFill } from 'react-bootstrap-icons';


function CartWidget() {
  const [count, setCount] = useState(0);

  // Función para agregar un elemento al carrito
  const addToCart = () => {
    setCount(count + 1);
    
  };

  // Función para eliminar un elemento del carrito
  const removeFromCart = () => {
    setCount(count - 1);
    
  };

  return (
    <div className="cart">
      <ListGroup className="cart-items">
        <ListGroup.Item>
          {/* Elementos en el carrito */}
          <CartFill size={20} />
          <span className="count">{count}</span>
          {/* <CartFill size={20} onClick={removeFromCart} /> */}
          {/* La idea es que se agreguen los productos al clickerar sobre 
          el mismo, no sobre el carrito. Esto lo dejo asi para no olvidarme lo que fui haciendo */}
          
        </ListGroup.Item>
        {/* Otros elementos en el carrito */}
      </ListGroup>
      <div className="cart-summary">
        {/* Resumen del carrito */}
      </div>
    </div>
  );
}

export default CartWidget;

