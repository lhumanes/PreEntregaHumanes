

import { useCartContext } from '../Context/CartContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link} from 'react-router-dom';
import { useState} from 'react';

function Cart() {
  const {cart,emptyCart, totalPrice, removeItem}= useCartContext()
  const [productCount, setProductCount] = useState({});

  
  const AddOne = (productId) => {
    setProductCount((prevCount) => ({
      ...prevCount,
      [productId]: (prevCount[productId] || 0)+1,
    }));
    };

    const RestOne = (productId) => {
      setProductCount((prevCount) => ({
        ...prevCount,
        [productId]: (prevCount[productId] || 0)-1,
      }));
      };
  return (
    <>
      {cart.length === 0 ? (
      <>
      <h2>Cart Empty</h2>
      <Link to={"/"}><Button>Continue Shopping</Button></Link>
      </>
      ):(
      <Card style={{ width: '18rem' }}>
        {cart.map(p=> (
        <div key={p.id}> 

      <Card.Img variant="top" src={p.imageId} />
      <Card.Body>
        <Card.Title>{p.title}</Card.Title>
        <Card.Text>
          Quantity: {p.cant}<br/>
          price: $ {p.price}<br/>
          SubTotal: $ {p.price*p.cant}
        </Card.Text>
        <div>
      <Button 
      onClick={()=>RestOne(p.id)} disabled={productCount[p.id]<=0}>-</Button>

      <span>{productCount[p.id]}</span>

      <Button 
      onClick={()=> AddOne(p.id)}disabled={productCount[p.id]>= p.cant} >+</Button>

      </div>
        <Button variant="primary" onClick={()=> removeItem(p.id,productCount[p.id])} >Remove Item</Button>
      </Card.Body>
      </div>
      ))}
    </Card>
          
      )}
      <div>
        <h2>Total Cart: ${totalPrice()}</h2>
        <Button onClick={emptyCart}>Empty Cart</Button>
        <Link to={"/"}><Button>Continue Shopping</Button></Link>
        <Link to={"/checkout"}><Button>Checkout</Button></Link>
      </div>
    </>

    
  );
}

export default Cart;