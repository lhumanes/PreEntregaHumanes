import React, {useState} from "react";
import { useCartContext } from "../Context/CartContext";
import { getFirestore, collection, addDoc} from 'firebase/firestore';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';



const Checkout=()=>{
    const {totalPrice, cart, emptyCart, }= useCartContext()
    const formInputInfo= React.useRef()
    const [finalOrderId, setFinalOrderId] = useState(null)
    
    const formInfo =(e)=>{
        e.preventDefault();
        const formData = new FormData(formInputInfo.current)
        createOrder(Object.fromEntries(formData), totalPrice()).then(emptyCart()).then(e.target.reset())
    }
    console.log(cart)
    const createOrder= async (client, totalPrice)=>{
      
        if(client.fullname){
        const db= getFirestore();
          const ordersCollection= await addDoc(collection(db, "orders"),{
              fullName: client.fullname,
              email: client.email,
              id: client.id,
              address: client.address,
              phone: client.phone,
              total: totalPrice,
              item: cart.map(item => ({title: item.title, cantidad: item.cant, subtotal: item.price * item.cant}))
              })
              setFinalOrderId(ordersCollection.id)


        }
          
      }

      


return(

    <Form onSubmit={formInfo} ref={formInputInfo}> 
        <Form.Group className="mb-3" controlId="fullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" name="fullname" placeholder="Enter Full name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="id">
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" name="id" placeholder="Enter ID" />
        </Form.Group>


        
      <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="number" name="phone" placeholder="Enter Phone" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicRepeatEmail">
        <Form.Label>Repet Email address</Form.Label>
        <Form.Control type="email" name="email2" placeholder="email2" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAdress">
            <Form.Label>Adress</Form.Label>
            <Form.Control type="text" name="address" placeholder="address" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={createOrder}>
        Confirm
      </Button>
      {finalOrderId && (
        
      <Toast>
      <Toast.Header>
        <img src="#" className="rounded me-2" alt="" />
        <strong className="me-auto">Sucessfull Operation. Your ordenr number is: </strong>
        </Toast.Header>
      <Toast.Body>{finalOrderId}</Toast.Body>
    </Toast>
    )}



   
    </Form>
)
}






















export default Checkout;