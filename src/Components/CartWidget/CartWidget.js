
import { ListGroup } from 'react-bootstrap';
import { CartFill } from 'react-bootstrap-icons';
import {useContext} from 'react';
import { CartContext } from '../../Context/CartContext';

function CartWidget() {
  const {getQuantity}= useContext(CartContext)
 
  

  return (
    <div className="cart">
      <ListGroup className="cart-items">
        <ListGroup.Item>
         <CartFill size={30} />
          <span>{getQuantity()}</span>
         </ListGroup.Item>
         </ListGroup>
    
    </div>
  );
}

export default CartWidget;


